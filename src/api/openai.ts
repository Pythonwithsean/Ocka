import type { NextApiRequest, NextApiResponse } from 'next';
import openaiRoutes from '../backend/routes/openai-route';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  openaiRoutes(req, res);
}