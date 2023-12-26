const db = require("../config/dbSetup-pool");
// const db = require('../config/dbSetup-client');

const getUserData = async () => {
  const query1 = `select * from users`;
  const queryIns = `insert into users ("username","firstName","lastName") values($1,$2,$3) returning id`;

  let resp = await db.query(query1, []);

  return resp.rows;
};

module.exports = { getUserData };
