// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

interface Data {
  name: string;
}

/**
 * handler function for hello API
 * @param {NextApiRequest} _req request received
 * @param {NextApiResponse} res respond to send
 * @return {void}
 */
export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
): void {
  res.status(200).json({ name: 'John Doe' });
}
