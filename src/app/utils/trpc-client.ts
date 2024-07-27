import { createTRPCClient, httpBatchLink } from '@trpc/client';
import type { appRouter } from '@/backend/routers/router';
//     👆 **type-only** import

// Pass AppRouter as generic here. 👇 This lets the `trpc` object know
// what procedures are available on the server and their input/output types.
const trpc = createTRPCClient<appRouter>({
	links: [
		httpBatchLink({
			url: 'http://localhost:5000/api/trpc/',
		}),
	],
});

export default trpc