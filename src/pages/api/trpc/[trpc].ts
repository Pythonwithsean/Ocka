import * as trpcNext from '@trpc/server/adapters/next';
import appRouter from '@/backend/routers/router';

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
});