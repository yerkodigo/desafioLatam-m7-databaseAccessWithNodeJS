const {
  USER_DB,
  HOST,
  DATABASE,
  PASSWORD,
  PORT,
} = process.env;

const config = {
  user: USER_DB,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  port: PORT,
};

module.exports = config;
