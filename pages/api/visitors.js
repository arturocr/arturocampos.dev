import assert from 'assert';
import { Client, query, errors } from 'faunadb';

const { BLOG_FAUNADB_SECRET } = process.env;
const COLLECTION_NAME = 'visitors';
const INDEX_NAME = 'visitors_by_slug';

assert(
  BLOG_FAUNADB_SECRET != null,
  'No BLOG_FAUNADB_SECRET environment variable provided.'
);

/**
 * @param {import('http').IncomingMessage} request
 * @param {import('http').ServerResponse} response
 */
const visitorsAPI = async (request, response) => {
  const { url } = request;
  const { searchParams } = new URL(url, 'http://localhost/');
  const slug = searchParams.get('slug') || '/';
  const justRead = searchParams.get('justRead') == 'true' || false;

  try {
    const client = new Client({ secret: BLOG_FAUNADB_SECRET });
    let visitors;
    try {
      visitors = await client.query(
        query.Select(
          ['data', 'visitors'],
          query.Let(
            { match: query.Match(query.Index(INDEX_NAME), slug) },
            query.If(
              query.Exists(query.Var('match')),
              query.Let(
                { get: query.Get(query.Var('match')) },
                query.Update(query.Select('ref', query.Var('get')), {
                  data: {
                    visitors: justRead
                      ? query.Select(['data', 'visitors'], query.Var('get'))
                      : query.Add(
                          query.Select(['data', 'visitors'], query.Var('get')),
                          1
                        ),
                  },
                })
              ),
              query.Create(query.Collection(COLLECTION_NAME), {
                data: { slug, visitors: 1 },
              })
            )
          )
        )
      );
    } catch (error) {
      if (
        error instanceof errors.FaunaHTTPError &&
        (error.message === 'invalid ref' ||
          error.message === 'validation failed')
      ) {
        const createdCollection = await client.query(
          query.If(
            query.Not(query.Exists(query.Collection(COLLECTION_NAME))),
            query.CreateCollection({
              name: COLLECTION_NAME,
            }),
            null
          )
        );
        const createdIndex = await client.query(
          query.If(
            query.Not(query.Exists(query.Index(INDEX_NAME))),
            query.CreateIndex({
              name: INDEX_NAME,
              source: query.Collection(COLLECTION_NAME),
              terms: [{ field: ['data', 'slug'] }],
              unique: true,
            }),
            null
          )
        );
        if (createdCollection != null || createdIndex != null) {
          return visitorsAPI(request, response);
        }
      } else {
        throw error;
      }
    }
    response.status(200).json({ visitors });
  } catch (error) {
    if (error instanceof errors.FaunaHTTPError) {
      response.status(error.requestResult.statusCode).send(error.message);
    } else {
      response.status(500).send(error.message);
    }
  }
};

export default visitorsAPI;
