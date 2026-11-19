import { Pool } from "pg";

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "komunikator",
  user: "komunikator",
  password: "komunikator123"
});

export default pool;
