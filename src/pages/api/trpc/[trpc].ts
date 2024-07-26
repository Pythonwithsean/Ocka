import { createNextApiHandler } from '@trpc/server/adapters/next';
import { createContext } from '../../../server/trpc/context';
import { router } from '../../../backend/helpers/tRPC';
import healthRouter from '@/backend/routers/health';

export default createNextApiHandler({
	router: healthRouter,
	createContext,
});