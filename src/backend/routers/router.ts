import { procedure, router } from "../helpers/tRPC"
import { helloResolver } from "../trpc-resolvers/trpc-resolvers"

const appRouter = router({
	hello: procedure.query(helloResolver)
})

export type appRouter = typeof appRouter
export default appRouter