import { procedure, router } from '../helpers/tRPC';

const healthRouter = router({
  health: procedure.query(async () => {
    return 'Server TRPC endpoint working';
  }),
});

export default healthRouter;
