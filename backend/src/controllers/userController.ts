
import { Request, Response } from "express";
import pool from "../db/database";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const result = await pool.query(
      "SELECT id, username, email, created_at FROM users"
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Nie udało się pobrać użytkowników."
    });
  }
};
