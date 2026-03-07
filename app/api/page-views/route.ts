import { NextRequest } from 'next/server';
import { google } from 'googleapis';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const startDate = searchParams.get('startDate') || '2020-01-01';
  const slug = searchParams.get('slug') || undefined;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
    });

    const analyticsData = google.analyticsdata({ auth, version: 'v1beta' });

    const response = await analyticsData.properties.runReport({
      property: `properties/${process.env.GOOGLE_ANALYTICS_PROPERTY_ID}`,
      requestBody: {
        dateRanges: [{ startDate, endDate: 'today' }],
        metrics: [{ name: 'screenPageViews' }],
        metricAggregations: ['TOTAL'],
        ...(slug
          ? {
              dimensions: [{ name: 'pagePath' }],
              dimensionFilter: {
                filter: {
                  fieldName: 'pagePath',
                  stringFilter: {
                    value: slug,
                    matchType: 'EXACT',
                  },
                },
              },
            }
          : {}),
      },
    });

    const pageViews = response?.data?.totals?.[0]?.metricValues?.[0]?.value;

    return Response.json({ pageViews });
  } catch (err) {
    return Response.json({ error: (err as Error).message }, { status: 500 });
  }
}
