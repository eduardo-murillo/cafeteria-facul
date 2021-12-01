const mysql = require("serverless-mysql")();
import {env} from "./next.config.js";
mysql.config({
  host: env.MYSQL_HOST,
  port: env.MYSQL_PORT,
  database: env.MYSQL_DATABASE,
  user: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
});
async function excuteQuery({query, values}) {
  try {
    const results = await mysql.query(query, values);
    await mysql.end();
    return results;
  } catch (error) {
    return {error};
  }
}

export {mysql, excuteQuery};
