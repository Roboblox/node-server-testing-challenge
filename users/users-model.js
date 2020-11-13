const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(hobbit) {
  // 2- implement the code that makes the test pass
  const [id] = await db("users").insert(hobbit);
  return db("hobbits").where({ id }).first();
}

async function update(id, changes) {
  await db("users").update(changes).where({ id });
  return db("users").where({ id }).first();
}

function remove(id) {
  return db("users").where({ id }).delete();
}

function getAll() {
  return db("users");
}

function findById(id) {
  return null;
}
