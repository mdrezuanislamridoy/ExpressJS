require("dotenv").config();

const dev = {
  app: {
    port: process.env.port || 4000,
  },
  db: {
    URL: process.env.DB_URL,
  },
};

module.exports = dev;
