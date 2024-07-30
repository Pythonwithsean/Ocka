import { z } from 'zod';

export const loginType = z.object({
  username: z.string(),
  password: z.string(),
});

export const signupType = z.object({
  email: z.string(),
  username: z.string(),
  password: z.string(),
});
