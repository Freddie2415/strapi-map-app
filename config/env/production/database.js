const parse = require('pg-connection-string').parse;
const config = parse(process.env.DATABASE_URL);
const connection = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: false
};
console.log(connection)
module.exports = ({env}) => ({
  connection: {
    client: 'postgres',
    connection: connection,
    debug: false,
  },
});
