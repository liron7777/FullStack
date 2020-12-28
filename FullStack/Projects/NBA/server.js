// -------------------- Settings --------------------
// DBFunctions
const {
  add_to_db,
  get_data_from_db,
  delete_all_from_db,
  delete_item_from_db,
  get_data_of_one_item_from_db,
} = require("./client/src/Functions/DBFunctions");

// General
const express = require("express"),
  app = express(),
  axios = require("axios"),
  bodyParser = require("body-parser"),
  port = process.env.PORT || 5000;

// App Use
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// -------------------- Responding to requests --------------------

//  get - status NBA list
app.get("/", (req, res) => {
  axios
    .get("https://stats.nba.com/js/data/widgets/home_season.json")
    .then((nba_stats) => {
      res.send({ nba_status: nba_stats.data });
    });
});

//  get - Favorite lists
app.get("/Favorites", async (req, res) => {
  res.send({ favorit_list: await get_data_from_db(await req.query.db) });
});

//  post - add item to Favorite lists
app.post("/favorites", async(req, res) => {
  res.send({ exists_item_in_favorite: ((await(add_to_db(req.body.item, req.body.db))==='Exists')) });
});

//  delete - delete all items from Favorite lists
app.delete("/favorites", async (req, res) => {
  res.send({ delete_all: await delete_all_from_db(req.query.db) });
});

//  delete - delete item from Favorite lists
app.delete("/favorites/:id", async (req, res) => {
  res.send({
    delete_item: await delete_item_from_db(req.params.id, req.query.db),
  });
});

// -------------------- listen --------------------
app.listen(port, () => console.log(`Listening on port ${port}`));
