import mysql, { Connection } from "mysql2"


const config = {
	host: 'localhost',
	port: process.env.MYSQL_PORT || 3306,
	user: process.env.MYSQL_USER,
	password: process.env.MYSQL_PASSWORD,
	database: process.env.MYSQL_DATABASE

} as {
	host: string,
	port: number,
	user: string,
	password: string,
	database: string
}


export const connectToDatabase = async (): Promise<Connection> => {
	return new Promise(async (res, rej) => {
		try {
			const connection = await mysql.createConnection(config);
			res(connection)
		} catch (error: any) {
			rej(error.message)
		}
	})
};


