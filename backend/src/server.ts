import express from "express";
import pool from "./db/database";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({
    message: "Backend działa!"
  });
});

app.get("/api/db-test", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.json({
      message: "Połączenie z bazą działa!",
      time: result.rows[0].now
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Nie udało się połączyć z bazą."
    });
  }
});

app.listen(PORT, () => {
  console.log(`Backend działa na http://localhost:${PORT}`);
});
