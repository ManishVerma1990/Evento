import express from "express";
import { v4 as uuidv4 } from "uuid";
import db from "../config/db.config.js";
import type { Event } from "../../../shared/types.ts";
import { RowDataPacket } from "mysql2";

const router = express.Router();

router.get("/", async (req: express.Request, res: express.Response) => {
  try {
    const [result] = await db.execute("SELECT * FROM events");
    console.log(result);
    res.send(result);
  } catch (err) {
    console.log(err);
  }
  console.log("list event");
});

router.post("/new", async (req: express.Request, res: express.Response) => {
  const eventId = uuidv4();
  const organizerId = "ed0e0cc3-58be-41b7-a581-d125640e4d7c";
  const event: Event = req.body;
  //validation code

  try {
    //return error if email already exists
    const [result] = await db.execute<RowDataPacket[]>(
      "INSERT INTO events (eventId, organizerId, title, description, category, address, startTime, endTime, capacity, price) VALUES(?,?,?,?,?,?,?,?,?,?)",
      [
        eventId,
        organizerId,
        event.title,
        event.description,
        event.category,
        event.address,
        event.startTime,
        event.endTime,
        event.capacity,
        event.price,
      ]
    );
    console.log("added event");
  } catch (err) {
    console.log(err);
  }
  res.send("new event");
});

export default router;
