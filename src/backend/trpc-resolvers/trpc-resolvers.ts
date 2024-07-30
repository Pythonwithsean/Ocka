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
}): Promise<{ success: boolean, message: string }> {
  const { connectToDatabase } = ctx;
  const connection = await connectToDatabase()
  try {
    const { username, password, email } = input;
    const hashedPassword = await hashPassword(password);
    const userId = uuid();
    const query = `INSERT INTO Users (id, email, username, password, role) VALUES (?, ?, ?, ?, ?)`;
    // create seperate function to create user to handle error and see if valid
    await connection.execute(query, [userId, email, username, hashedPassword, 'nMember'])

  } catch (err: any) {
    console.error(err.message)
    return {
      success: false,
      message: "Fail"
    }
  }
  finally {
    connection.end()
  }
  return {
    success: true,
    message: "Success"
  }
}
