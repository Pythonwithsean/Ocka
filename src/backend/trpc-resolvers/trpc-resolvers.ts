import mysql from 'mysql2';
import hashPassword from '../helpers/hashing';
import { v4 as uuid } from 'uuid';
export function helloResolver() {
  return 'Hello server Trpc endpoint';
}

export function healthResolver() {
  return {
    msg: 'Server is online',
  };
}

export function loginResolver(opts: any) { }

export async function signupResolver({
  ctx,
  input,
}: {
  ctx: {
    connectToDatabase: () => Promise<mysql.Connection>
  };
  input: {
    email: string;
    username: string;
    password: string;
  };
}) {
  const { connectToDatabase } = ctx;
  const { username, password, email } = input;
  try {
    const hashedPassword = await hashPassword(password);
    const userId = uuid();
    const query = `INSERT INTO Users (id, email, username, password, role) VALUES (?, ?, ?, ?, ?)`;
    (await connectToDatabase()).execute(query, [
      userId,
      email,
      username,
      hashedPassword,
      'nMember',
    ], (err, res) => {
      if (err === null) {
        console.log('User Created Sucessfully');
        return
      }
      throw new Error(err.message)
    });
    return {
      success: true,
      message: 'User Created Sucessfully',
    };
  } catch (err: any) {
    console.error(err.message);
    return {
      success: false,
      message: 'Failed to Create User.',
    };
  }
}
