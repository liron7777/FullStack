import React from "react";
import RowTable from "./RowTable";

export default function Table(props) {
  const item = props.item,
    category = item.playerstats || item.teamstats,
    title = item.title,
    points_name = item.name;

  return (
    <section>
      <div className="data_windows">
        <h3>{title}</h3>
        <ul>
          {category.map((category_data, key) => (
            <RowTable
              favorite_likes={props.favorite_likes}
              category_data={category_data}
              key={key}
              points_name={points_name}
              like={(like_data, id) => {
                props.like(like_data, id);
              }}
              openItem={(selected_item) => props.openItem(selected_item)}
            />
          )
          )}
        </ul>
      </div>
    </section>
  );
}
