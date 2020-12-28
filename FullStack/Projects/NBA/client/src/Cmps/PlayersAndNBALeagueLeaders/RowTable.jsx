import React from "react";
import like_icon from "../../Assets/Icons/icons8-heart-50.png";
import full_like_icon from "../../Assets/Icons/full_heart.png";
var uniqid = require("uniqid");

export default function RowTable(props) {
  const category_data = props.category_data,
    points_name = props.points_name,
    id = uniqid();

  function is_like() {
    for (let index = 0; index < props.favorite_likes.length; index++) {
      if (
        props.favorite_likes[index] ===
        (category_data.PLAYER_ID || category_data.TEAM_ID)
      ) {
        return true;
      }
    }
  }

  return (
    <li>
      <div className="row_list">
        <span>{category_data.PLAYER_NAME || category_data.TEAM_CITY}</span>
        <span>{category_data[points_name]}</span>
        <img
          className={`like , ${id}`}
          src={is_like() === true ? full_like_icon : like_icon}
          alt="like"
          onClick={() => {
            props.like(category_data, id);
          }}
        />
      </div>
    </li>
  );
}
