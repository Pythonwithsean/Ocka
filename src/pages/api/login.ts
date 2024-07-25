import { NextApiRequest, NextApiResponse } from "next";
import loginRoutes from "@/backend/routes/login-route";

export default async function loginHandler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	await loginRoutes(req, res)
}