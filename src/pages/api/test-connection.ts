import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '@/backend/_db/_db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const connection = await connectToDatabase();
    connection.execute('show tables;', (err, result) => {
      if (err === null) {
        console.log(result);
        res.json({
          result,
        });
      } else {
        throw new Error(err.message);
      }
    });
  } catch (error) {
    res.status(500).json({ error: 'Error connecting to the database' });
  }
}
