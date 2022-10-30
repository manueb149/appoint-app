// This is an example of to protect an API route
import { unstable_getServerSession as getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSession(req, res, authOptions);

  if (session) {
    return res.send({
      content:
        'This is protected content. You can access this content because you are signed in.',
    });
  }

  res.send({
    error: 'You must be signed in to view the protected content on this page.',
  });
};

export default handler;
