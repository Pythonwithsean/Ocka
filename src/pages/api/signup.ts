import signupRoutes from "@/backend/routes/signup-routes";
import { NextApiRequest, NextApiResponse } from "next";


export default async function signupHandler(req: NextApiRequest, res: NextApiResponse) {
	await signupRoutes(req, res)
}