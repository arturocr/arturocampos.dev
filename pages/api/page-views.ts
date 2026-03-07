import type { NextApiRequest, NextApiResponse } from 'next';
import { google } from 'googleapis';

const pageViewsAPI = async (req: NextApiRequest, res: NextApiResponse) => {
  const startDate = (req.query.startDate as string) || '2020-01-01';
  const slug = req.query.slug as string | undefined;

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
    });

    const analytics = google.analytics({
      auth,
      version: 'v3',
    });

    const response = await analytics.data.ga.get({
      'end-date': 'today',
      ids: 'ga:200655605',
      metrics: 'ga:pageviews',
      dimensions: 'ga:pagePath',
      ...(slug ? { filters: `ga:pagePath==${slug}` } : {}),
      'start-date': startDate,
    });

    const pageViews = response?.data?.totalsForAllResults?.['ga:pageviews'];

    return res.status(200).json({
      pageViews,
    });
  } catch (err) {
    return res.status(500).json({ error: (err as Error).message });
  }
};

export default pageViewsAPI;
