import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const generateAIOutput = async (inputData: string): Promise<string> => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o', 
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: inputData },
      ],
      max_tokens: 150,
    });

    return response.choices[0].message.content ?? '';

  } catch (error) {
    console.error('Error generating AI output:', error);
    throw new Error('Failed to generate AI output');
  }
};