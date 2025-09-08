import fs from "fs";
import mysql from "mysql2/promise";

async function insert() {
  // 1. Connect to MySQL
  const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "your_password", // <-- change this
    database: "gamified_db", // <-- change if needed
  });

  // 2. Load data from JSON
  const data = JSON.parse(fs.readFileSync("init.json", "utf-8"));
  const { users, events, registrations } = data;

  try {
    // 3. Insert Users
    for (const user of users) {
      await connection.execute(`INSERT INTO users (id, name, email, password, role, phone) VALUES (?, ?, ?, ?, ?, ?)`, [
        user.id,
        user.name,
        user.email,
        user.password,
        user.role,
        user.phone,
      ]);
    }

    // 4. Insert Events
    for (const event of events) {
      await connection.execute(
        `INSERT INTO events 
          (id, organizerId, title, description, category, address, startTime, endTime, capacity, price, status) 
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          event.id,
          event.organizerId,
          event.title,
          event.description,
          event.category,
          event.address,
          new Date(event.startTime),
          new Date(event.endTime),
          event.capacity,
          event.price,
          event.status,
        ]
      );
    }

    // 5. Insert Registrations
    for (const reg of registrations) {
      await connection.execute(
        `INSERT INTO registrations 
          (id, eventId, userId, regType, checkIn, paymentStatus) 
         VALUES (?, ?, ?, ?, ?, ?)`,
        [reg.id, reg.eventId, reg.userId, reg.regType, reg.checkIn, reg.paymentStatus]
      );
    }

    console.log("✅ Data inserted successfully!");
  } catch (err) {
    console.error("❌ Error inserting data:", err);
  } finally {
    await connection.end();
  }
}

insert();
