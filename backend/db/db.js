const Pool = require("pg").Pool;

const pool = new Pool({
  user: "emanuel",
  password: "1000306848",
  host: "localhost",
  database: "colegio_geek_db",
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

module.exports = { pool };
