import mysql from "mysql2"
import { compareHash } from "./hashing"

export async function loginUser(username: string, password: string, connection: mysql.Connection): Promise<{
  user: string,
  id: string
}> {

  return new Promise((res) => {
    try {
      const query = `SELECT id, username, password FROM Users where username = ?`
      connection.execute(query, [username], (err, result) => {
        if ((result as []).length >= 1) {
          const foo = result[0] as { username: string, password: string, id: string };
          compareHash(password, foo.password).then(valid => {
            if (valid === true) {
              res({
                id: foo.id,
                user: foo.username,
              })
              return
            } else {
              console.error("No User Found")
              res({
                id: "",
                user: ""
              })
              return
            }
          })
        } else {
          console.error("No User Found")
          res({
            id: "",
            user: "",
          })
          return
        }
      })
    } catch (err: any) {
      console.error("Error from try catch")
      console.error(err.message)
      res({
        id: "",
        user: ""
      })
    }
  })
}

export async function createUser(id: string, email: string, username: string, password: string, connection: mysql.Connection): Promise<boolean> {
  return new Promise((res) => {
    const query = `INSERT INTO Users (id, email, username, password, role) VALUES (?, ?, ?, ?, ?)`;
    const exisitingUserQuery = `SELECT username from Users WHERE username = ? OR email = ?`
    connection.execute(exisitingUserQuery, [username, email], (err, result) => {
      if ((result as []).length !== 0) {
        console.error("User Exists")
        console.log("User That Exists", result)
        res(false)
      } else {
        connection.execute(query, [id, email, username, password, 'nMember'])
        res(true)
      }
    })
  })

}
