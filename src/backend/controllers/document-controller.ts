import type { NextApiRequest, NextApiResponse } from 'next';
import { generateWordDoc } from '../services/document-generation-service';

export const handleDocumentRequest = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  if (req.method === 'POST') {
    const { personalInfo, jobDescription, generatedText } = req.body as {
      personalInfo: PersonalInfo;
      jobDescription: string;
      generatedText: string;
    };

    try {
      const buffer = await generateWordDoc(personalInfo, jobDescription, generatedText);
      res.setHeader('Content-Disposition', 'attachment; filename=cv.docx');
      res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document');
      res.send(buffer);
    } catch (error: any) {
      console.error('Error generating document:', error);
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
};