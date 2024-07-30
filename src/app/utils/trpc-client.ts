import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { appRouter } from '@/backend/routers/trpc-router';

const trpc = createTRPCClient<appRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:5000/api/trpc/',
    }),
  ],
});

export default trpc;
