import * as trpcNext from '@trpc/server/adapters/next';
import appRouter from '@/backend/routers/trpc-router';
import { db } from "../../../backend/_db/_db"

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: async () => ({
    db
  }),
});