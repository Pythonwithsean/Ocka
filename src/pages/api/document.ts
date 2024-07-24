import type { NextApiRequest, NextApiResponse } from 'next';
import documentRoutes from '../../backend/routes/document-generation-route';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await documentRoutes(req, res);
}