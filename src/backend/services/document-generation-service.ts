import { Document, Packer, Paragraph, TextRun, HeadingLevel } from 'docx';

export const generateWordDoc = async (
  personalInfo: PersonalInfo,
  jobDescription: string,
  generatedText: string
): Promise<Buffer> => {
  const doc = new Document({
    sections: [
      {
        properties: {},
        children: [
          // Personal Information Section
          new Paragraph({
            text: 'Personal Information',
            heading: HeadingLevel.HEADING_1,
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({ text: `Name: `, bold: true }),
              new TextRun(personalInfo.name),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: `Email: `, bold: true }),
              new TextRun(personalInfo.email),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: `Phone: `, bold: true }),
              new TextRun(personalInfo.phone),
            ],
          }),
          new Paragraph({
            children: [
              new TextRun({ text: `LinkedIn: `, bold: true }),
              new TextRun(personalInfo.linkedin),
            ],
          }),
          new Paragraph({
            text: '',
            spacing: { after: 200 },
          }),

          // Experience Section
          new Paragraph({
            text: 'Experience',
            heading: HeadingLevel.HEADING_1,
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [new TextRun(personalInfo.experience)],
          }),
          new Paragraph({
            text: '',
            spacing: { after: 200 },
          }),

          // Education Section
          new Paragraph({
            text: 'Education',
            heading: HeadingLevel.HEADING_1,
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [new TextRun(personalInfo.education)],
          }),
          new Paragraph({
            text: '',
            spacing: { after: 200 },
          }),

          // Job Description Section
          new Paragraph({
            text: 'Job Description',
            heading: HeadingLevel.HEADING_1,
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [new TextRun(jobDescription)],
          }),
          new Paragraph({
            text: '',
            spacing: { after: 200 },
          }),

          // Generated CV Section
          new Paragraph({
            text: 'Generated CV',
            heading: HeadingLevel.HEADING_1,
            spacing: { after: 200 },
          }),
          new Paragraph({
            children: [new TextRun(generatedText)],
          }),
        ],
      },
    ],
  });

  // Generate the Word document
  const buffer = await Packer.toBuffer(doc);
  return buffer;
};
