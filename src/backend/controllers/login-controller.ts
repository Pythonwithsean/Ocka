import { NextApiRequest, NextApiResponse } from "next"
export default function LoginController(request: NextApiRequest, response: NextApiResponse): Promise<void> {
	return new Promise(res => {
		if (request.method !== "POST") {
			return res(response.status(405).json({ message: "Method Not Allowed" }))
		}


	})
}