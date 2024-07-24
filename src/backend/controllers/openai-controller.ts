import { NextApiRequest, NextApiResponse } from 'next';
import { generateAIOutput } from '../services/openai-service';

export const handleAIRequest = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    const { inputData } = req.body;

    try {
      const output = await generateAIOutput(inputData);
      res.status(200).json({ output });
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};