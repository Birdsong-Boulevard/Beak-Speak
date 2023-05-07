require("dotenv").config();
const path = require("path");

module.exports = {
  development: {
    client: "pg",
    connection: {
      host: process.env.PG_HOST || "127.0.0.1",
      port: process.env.PG_PORT || 5431,
      user: process.env.PG_USER || "kristensantos",
      password: process.env.PG_PASS || "",
      database: process.env.PG_DB || "bird",
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
      stub: path.join(__dirname, "migration-stub.js"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
  test: {
    client: "pg",
    connection: {
      host: process.env.PG_HOST || "127.0.0.1",
      port: process.env.PG_PORT || 5431,
      user: process.env.PG_USER || "kristensantos",
      password: process.env.PG_PASS || "",
      database: process.env.database || "bird",
    },
  },
};
