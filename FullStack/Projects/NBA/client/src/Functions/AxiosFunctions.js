// -------------------- Import --------------------
import axios from "axios";

// -------------------- Requests Functions --------------------

// post - add item to favorite list
function post_favorite(item, db) {
  return axios.post("/favorites", { item, db });
}

// get - get favorite list
function get_favorite(db) {
  return axios.get("/Favorites", {
    params: {
      db,
    },
  });
}

// delete - delete all items from db
function delete_all(db) {
  return axios.delete("/favorites", {
    params: {
      db,
    },
  });
}

// delete - delete item from db
function delete_item(id, db) {
  return axios.delete(`/favorites/${id}`, {
    params: {
      db,
    },
  });
}

// -------------------- Export Functions --------------------
export default {
  post_favorite,
  get_favorite,
  delete_all,
  delete_item
};
