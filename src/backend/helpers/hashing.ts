import bycrpt from 'bcrypt';

export default async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await bycrpt.hash(password, saltRounds);
}
