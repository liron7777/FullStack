import React from "react";
import Table from "./Table";
import { LinearProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "rgb(8 112 255/85%)",
  },
  barColorPrimary: {
    background: "#b6b8bb",
  },
});

export default function MainWindow(props) {
  const classes = useStyles();

  const title = props.title,
    items = props.items;

  if (items) {
    return (
      <section>
        <h2>{title}</h2>
        <div className="items_list">
          {items.map((item, key) => (
            <Table
              favorite_likes={props.favorit_likes}
              item={item}
              key={key}
              like={(like_data, id) => {
                props.like(like_data, id);
              }}
            />
          ))}
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <LinearProgress
          classes={{
            root: classes.root,
            barColorPrimary: classes.barColorPrimary,
          }}
        />
      </section>
    );
  }
}
