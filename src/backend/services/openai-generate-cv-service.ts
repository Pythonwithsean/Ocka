import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const generateAIOutput = async (
  personalInfo: PersonalInfo,
  jobDescription: string
): Promise<string> => {
  try {
    const inputData = `
        Name: ${personalInfo.name}
        Email: ${personalInfo.email}
        Phone: ${personalInfo.phone}
        LinkedIn: ${personalInfo.linkedin}
        Experience: ${personalInfo.experience}
        Education: ${personalInfo.education}
        Job Description: ${jobDescription}
    `;

    console.log('inputData:', inputData);

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content:
            'You are an AI assistant specialized in creating expert-level CVs. Your task is to generate comprehensive and professional CVs for users based on their personal information and job descriptions provided.',
        },
        { role: 'user', content: inputData },
      ],
      max_tokens: 1500,
    });

    return response.choices[0].message.content ?? '';
  } catch (error) {
    console.error('Error generating AI output:', error);
    throw new Error('Failed to generate AI output');
  }
};
