import mysql from 'mysql2';
import hashPassword from '../helpers/hashing';
import { v4 as uuid } from 'uuid';
import { createUser, loginUser } from '../helpers/DatabaseFunctions';
export function helloResolver() {
  return 'Hello server Trpc endpoint';
}

export function healthResolver() {
  return {
    msg: 'Server is online',
  };
}


export function Auth(opts: any) { }

export async function loginResolver({ ctx, input }: {
  ctx: {
    connectToDatabase: () => Promise<mysql.Connection>
  }, input: {
    username: string,
    password: string,
  }
}) {
  const { username, password } = input
  const { connectToDatabase } = ctx
  const connection = await connectToDatabase()
  try {
    const response = await loginUser(username, password, connection)
    const { user, id } = response
    console.log(user, id)

  } catch (err) {
    console.error(err)
  }


}

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
    connection.end()
    return {
      success: true,
      message: "Success"
    }
  }
  console.error("Error Creating User")
  connection.end()
  return {
    success: false,
    message: "Error Creating User"
  }
}
