import express from "express";
import { v4 as uuidv4 } from "uuid";
import db from "../config/db.config.js";
import type { User } from "../../../shared/types.ts";
import { RowDataPacket } from "mysql2";

const router = express.Router();

router.post("/new", async (req: express.Request, res: express.Response) => {
  const userId = uuidv4();
  const user: User = req.body;
  //validation code

  try {
    //return error if email already exists
    const [result] = await db.execute<RowDataPacket[]>("SELECT email FROM users WHERE email = ?", [user.email]);
    if (result.length != 0) throw new Error("user with this email already exists");
    const [results] = await db.execute("INSERT INTO USERS (userId, name, email, password, phone) VALUES(?,?,?,?,?);", [
      userId.toString(),
      user.name,
      user.email,
      user.password,
      user.phone,
    ]);
  } catch (err) {
    console.log(err);
  }
  res.send(user);
});

router.get("/login", async (req: express.Request, res: express.Response) => {
  const user: { email: string; password: string } = req.body;
  //validation code

  try {
    //return error if email already exists
    const [result] = await db.execute<RowDataPacket[]>("SELECT email, password FROM users WHERE email = ?", [user.email]);
    if (result.length == 0) throw new Error("user with this email doesn't exists");
    if (user.password == result[0].password) console.log("logged in");
  } catch (err) {
    console.log(err);
  }
  res.send(user);
});



export default router;
