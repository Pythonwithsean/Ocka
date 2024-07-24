import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!, 
});

export const generateAIOutput = async (inputData: string): Promise<string> => {
  try {
    const response = await openai.completions.create({
      model: 'text-davinci-003',
      prompt: inputData,
      max_tokens: 150,
    });

    return response.choices[0].text;
  } catch (error) {
    console.error('Error generating AI output:', error);
    throw new Error('Failed to generate AI output');
  }
};