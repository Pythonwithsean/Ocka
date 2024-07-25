import { NextApiRequest, NextApiResponse } from "next";
import authController from "../controllers/auth-controller";



export default async function authRoutes(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	await authController(req, res)
}