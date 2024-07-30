import mysql from 'mysql2';
import hashPassword from '../helpers/hashing';
import { v4 as uuid } from 'uuid';
import { createUser } from '../helpers/DatabaseFunctions';
export function helloResolver() {
  return 'Hello server Trpc endpoint';
}

export function healthResolver() {
  return {
    msg: 'Server is online',
  };
}


export function Auth(opts: any) { }

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
  const { username, password, email } = input;
  const hashedPassword = await hashPassword(password);
  const userId = uuid();
  const response = await createUser(userId, email, username, hashedPassword, connection)
  if (response === true) {
    return {
      success: true,
      message: "Success"
    }
  }
  console.error("Error Creating User")
  return {
    success: false,
    message: "Error Creating User"
  }
}
