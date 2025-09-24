import pkg from "pg";
const { Client } = pkg;

const database = new Client({
  user: "postgres",
  host: "localhost",
  database: "shopmate",
  password: "201500",
  port: 5432,
});

try {
  await database.connect();
  console.log("Connected to the database successfully");
} catch (error) {
  console.log("error :>> ", error);
  process.exit(1);
}

export default database;
