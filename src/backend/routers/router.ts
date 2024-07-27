import { connectToDatabase } from "../_db/_db"
import { procedure, router } from "../helpers/tRPC"
import { healthResolver, helloResolver } from "../trpc-resolvers/trpc-resolvers"


connectToDatabase()

const appRouter = router({
	hello: procedure.query(helloResolver),
	health: procedure.query(healthResolver)
})

export type appRouter = typeof appRouter