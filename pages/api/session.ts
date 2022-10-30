// This is an example of how to access a session from an API route
import { unstable_getServerSession as getServerSessio } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getServerSessio(req, res, authOptions);
  res.send(JSON.stringify(session, null, 2));
};

export default handler;
