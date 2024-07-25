import { NextApiRequest, NextApiResponse } from "next";
import LoginController from "@/backend/controllers/login-controller";

export default async function loginRoutes(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	await LoginController(req, res)
}