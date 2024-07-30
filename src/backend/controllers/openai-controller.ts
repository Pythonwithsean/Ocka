import type { NextApiRequest, NextApiResponse } from 'next';
import { generateAIOutput } from '../services/openai-generate-cv-service';

export const handleAIRequest = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  if (req.method === 'POST') {
    const { personalInfo, jobDescription } = req.body as {
      personalInfo: PersonalInfo;
      jobDescription: string;
    };
    try {
      const buffer = await generateAIOutput(personalInfo, jobDescription);
      res.setHeader('Content-Disposition', 'attachment; filename=cv.docx');
      res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      );
      res.send(buffer);
    } catch (error: any) {
      console.error('Error generating AI output:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};
