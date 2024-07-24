import { Document, Packer, Paragraph, TextRun } from 'docx';

export const generateWordDoc = async (personalInfo: PersonalInfo, jobDescription: string, generatedText: string): Promise<Buffer> => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          new Paragraph({
            children: [
              new TextRun({ text: `Name: ${personalInfo.name}`, bold: true }),
              new TextRun(`\nEmail: ${personalInfo.email}`),
              new TextRun(`\nPhone: ${personalInfo.phone}`),
              new TextRun(`\nLinkedIn: ${personalInfo.linkedin}`),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: '\nExperience', bold: true }),
              new TextRun(`\n${personalInfo.experience}`),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: '\nEducation', bold: true }),
              new TextRun(`\n${personalInfo.education}`),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: '\nJob Description', bold: true }),
              new TextRun(`\n${jobDescription}`),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: '\nGenerated CV:', bold: true }),
              new TextRun(`\n${generatedText}`),
            ],
          }),
        ],
      },
    ],
  });

  // Generate the Word document
  const buffer = await Packer.toBuffer(doc);
  return buffer;
};