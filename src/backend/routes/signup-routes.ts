import { NextApiRequest, NextApiResponse } from "next";
import signupController from "../controllers/signup-controller";

export default async function signupRoutes(req: NextApiRequest, res: NextApiResponse): Promise<void> {
	await signupController(req, res)
}