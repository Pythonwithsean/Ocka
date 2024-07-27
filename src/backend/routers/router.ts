import { procedure, router } from "../helpers/tRPC"
import { healthResolver, helloResolver } from "../trpc-resolvers/trpc-resolvers"

const appRouter = router({
	hello: procedure.query(helloResolver),
	health: procedure.query(healthResolver)
})

export type appRouter = typeof appRouter
export default appRouter