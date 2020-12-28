import React from "react";
import delete_item from "../../Assets/Icons/delete_item.png";

export default function RowFavoritesTable(props) {
  return (
    <li>
      <div className="row_favorite_list">
        <img
          src={delete_item}
          alt="delete_item"
          onClick={() => props.deleteItem(props.item._id)}
          className="delete_item"
        />
        <div className="data_row">
          {props.item.PLAYER_ID ? (
            <img
              src={`https://cdn.nba.com/headshots/nba/latest/260x190/${props.item.PLAYER_ID}.png`}
              alt="player"
              className="img_item"
            />
          ) : (
            <img
              src={`https://cdn.nba.com/logos/nba/${props.item.TEAM_ID}/primary/L/logo.svg`}
              alt="team"
              className="img_item"
            />
          )}
          <span>{props.item.PLAYER_NAME || props.item.TEAM_CITY}</span>
          <span>
            {props.item.PTS ||
              props.item.FT_PCT ||
              props.item.FG3_PCT ||
              props.item.REB ||
              props.item.BLK ||
              props.item.AST ||
              props.item.FG3M}
          </span>
        </div>
      </div>
    </li>
  );
}
