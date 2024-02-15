/* eslint-disable prettier/prettier */
export default () => ({
  port: 3000,
  host: process.env.MYSQL_HOST,
  db: 'mysql',
  database: {
    host: 'test',
    port: 3306,
    username: 'root',
    password: 'root',
  },
});
