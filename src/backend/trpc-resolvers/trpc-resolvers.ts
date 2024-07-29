import mysql from "mysql2"
import hashPassword from "../helpers/hashing"
import { v4 as uuid } from "uuid"
export function helloResolver() {
	return "Hello server Trpc endpoint"
}

export function healthResolver() {
	return {
		msg: "Server is online"
	}
}


export function loginResolver(opts: any) {

}


export async function signupResolver({ ctx, input }: {
	ctx: {
		db: mysql.Pool
	}, input: {
		email: string,
		username: string,
		password: string
	}
}) {
	const { db } = ctx
	const { username, password, email } = input;
	try {
		const hashedPassword = await hashPassword(password)
		const userId = uuid()
		const query = `INSERT INTO Users (id, email, username, password, role) VALUES (?, ?, ?, ?, ?)`
		await db.execute(query, [userId, email, username, hashedPassword, "nMember"])
		console.log("User Created Sucessfully")
		return {
			success: true,
			message: "User Created Sucessfully"
		}
	} catch (err: any) {
		console.error(err.message)
		return {
			success: false,
			message: "Failed to Create User."
		}
	}


}