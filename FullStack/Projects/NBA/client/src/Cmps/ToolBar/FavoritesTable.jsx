import React, { Component } from "react";
import AxiosFunction from "../../Functions/AxiosFunctions";
import RowFavoritesTable from "./RowFavoritesTable";
import MainBar from "./MainBar";

import LinearProgress from "@material-ui/core/LinearProgress";
import Button from "@material-ui/core/Button";

export default class FavoritesTable extends Component {
  
  state = {
    favorite_items: "",
    title: this.props.name,
    db: this.props.db,
  };

  async componentDidMount() {
    await AxiosFunction.get_favorite(this.state.db).then((list) => {
      this.setState({ favorite_items: list.data.favorit_list });
    });
  }

  render() {
    const favorite_items = this.state.favorite_items;
    if (favorite_items) {
      if (favorite_items.length > 0) {
        return (
          <section>
            <MainBar />
            <div className="favorite_list">
              <h2>{this.state.title}</h2>

              <Button
                variant="contained"
                color="primary"
                onClick={async () => {
                  await AxiosFunction.delete_all(this.state.db).then((list) => {
                    this.setState({ favorite_items: list.data.delete_all });
                  });
                }}
              >
                Delete All
              </Button>

              <ul>
                {favorite_items.map((item, key) => (
                  <RowFavoritesTable
                    item={item}
                    key={key}
                    deleteItem={async (id) => {
                      await AxiosFunction.delete_item(id, this.state.db).then(
                        (list) => {
                          this.setState({
                            favorite_items: list.data.delete_item,
                          });
                        }
                      );
                    }}
                  />
                ))}
              </ul>
            </div>
          </section>
        );
      } else {
        return (
          <section>
            <MainBar />
            <div className="favorite_list">
              <h2>Your {this.state.title} is empty</h2>
            </div>
          </section>
        );
      }
    } else {
      return (
        <section className="linear_progress">
          <LinearProgress className="line" />
        </section>
      );
    }
  }
}
