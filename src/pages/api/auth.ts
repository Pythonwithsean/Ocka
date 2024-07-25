import authRoutes from "@/backend/routes/auth-route";
import { NextApiRequest, NextApiResponse } from "next";


export default async function authHandler(req: NextApiRequest, res: NextApiResponse) {
	await authRoutes(req, res)
}