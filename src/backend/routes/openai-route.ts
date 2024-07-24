import { NextApiRequest, NextApiResponse } from 'next';
import { handleAIRequest } from '../controllers/openai-controller';

const openaiRoutes = (req: NextApiRequest, res: NextApiResponse): void => {
  handleAIRequest(req, res);
};

export default openaiRoutes;