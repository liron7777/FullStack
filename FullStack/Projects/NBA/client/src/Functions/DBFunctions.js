// -------------------- Settings --------------------
const MongoClient = require("mongodb"),
  url = "mongodb://localhost:27017";

// -------------------- DB Functions --------------------
// Connect NBA db
async function connect_nab_db(db) {
  var data_of_nba = MongoClient.connect(url).then((data) => {
    return data.db("NBA").collection(db);
  });
  return await data_of_nba;
}

// Get data from db
async function get_data_from_db(db) {
  return (await connect_nab_db(db)).find({}).toArray();
}

// ADD item to db
async function add_to_db(item, db) {
  let result = await (await connect_nab_db(db))
    .find({ TEAM_ID: item.TEAM_ID })
    .toArray();
  return result.length === 0?(await connect_nab_db(db)).insertOne(item) : 'Exists';
  
}

// Delete all items from db
async function delete_all_from_db(db) {
  (await connect_nab_db(db)).remove({});
  return get_data_from_db(db);
}

// Delete item from db
async function delete_item_from_db(id, db) {
  await (await connect_nab_db(db)).remove({ _id: MongoClient.ObjectId(id) });
  return get_data_from_db(db);
}

// -------------------- Exports Functions --------------------
module.exports = {
  add_to_db,
  get_data_from_db,
  delete_all_from_db,
  delete_item_from_db,
};
