import bycrpt from 'bcrypt';

export default async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await bycrpt.hash(password, saltRounds);
}


export async function compareHash(password: string, encyrptPass: string) {
  const valid = await bycrpt.compare(password, encyrptPass)
  return valid
}
