import { procedure, router } from "../helpers/tRPC"
import signupTrpcResolver from "../trpc-resolvers/signup-trpc-resolver"


const signupRouter = router({
	signup: procedure.mutation(
		signupTrpcResolver
	)
})