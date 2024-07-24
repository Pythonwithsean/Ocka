import type { NextApiRequest, NextApiResponse } from 'next';
import { generateAIOutput } from '../services/openai-generate-cv-service';

export const handleAIRequest = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    // Extract personalInfo and jobDescription from the request body
    const { personalInfo, jobDescription } = req.body as { personalInfo: PersonalInfo; jobDescription: string };

    try {
      // Call the generateAIOutput function with the extracted data
      const output = await generateAIOutput(personalInfo, jobDescription);
      res.status(200).json({ output });
    } catch (error: any) {
      console.error('Error generating AI output:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};