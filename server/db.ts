import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

// Use a default database URL for development if not provided
const DATABASE_URL = process.env.DATABASE_URL || "postgresql://localhost:5432/medaithon_dev";

export const pool = new Pool({ 
  connectionString: DATABASE_URL,
  // Add connection options for development
  ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false
});
export const db = drizzle(pool, { schema });
