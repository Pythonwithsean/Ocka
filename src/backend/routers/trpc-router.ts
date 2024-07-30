import { procedure, router } from '../helpers/tRPC';
import {
  healthResolver,
  helloResolver,
  loginResolver,
  signupResolver,
} from '../trpc-resolvers/trpc-resolvers';
import { signupType, loginType } from '@/types/trpc-types';

const appRouter = router({
  hello: procedure.query(helloResolver),
  health: procedure.query(healthResolver),
  login: procedure.input(loginType).mutation(loginResolver),
  signup: procedure.input(signupType).mutation(signupResolver),
});

export default appRouter;
export type appRouter = typeof appRouter;
