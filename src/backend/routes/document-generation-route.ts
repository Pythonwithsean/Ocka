import type { NextApiRequest, NextApiResponse } from 'next';
import { handleDocumentRequest } from '../controllers/document-controller';

const documentRoutes = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await handleDocumentRequest(req, res);
};

export default documentRoutes;
