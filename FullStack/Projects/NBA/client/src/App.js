import React, { Component } from "react";
import MainWindow from "./Cmps/PlayersAndNBALeagueLeaders/MainWindow";
import MainBar from "./Cmps/ToolBar/MainBar";
import AxiosFunction from "./Functions/AxiosFunctions";
import full_like_icon from "../src/Assets/Icons/full_heart.png";

const axios = require("axios").default,
  port = "http://localhost:5000";

class App extends Component {
  state = {
    season_leaders_players: "",
    nab_league_leaders: "",
    favorite_players_likes: "",
    favorite_teams_likes: "",
  };

  async componentDidMount() {
    this.set_state_favorite_players_likes(
      "FavoritesPlayers",
      "favorite_players_likes"
    );
    this.set_state_favorite_players_likes(
      "FavoritesTeams",
      "favorite_teams_likes"
    );
    this.start_localhost().then((season_leaders_players) => {
      this.setState({
        season_leaders_players: season_leaders_players.data.nba_status.items[0],
        nab_league_leaders: season_leaders_players.data.nba_status.items[1],
      });
    });
  }

  start_localhost = async () => {
    const response = await axios.get(port);
    return response;
  };

  set_state_favorite_players_likes = async (db, state_variable) => {
    let list_id = [];
    await AxiosFunction.get_favorite(db)
      .then((list) => {
        list.data.favorit_list.map((data_id) => {
          list_id.push(data_id.PLAYER_ID || data_id.TEAM_ID);
        });
      })
      .then(this.setState({ [state_variable]: list_id })
      );
  };

  like = async (like_data, id, Favorit) => {
    document.querySelector(`.${id}`).src = full_like_icon;
    await AxiosFunction.post_favorite(like_data, Favorit).then(
      (result_exists) => {
        console.log(result_exists.data.exists_item_in_favorite);
      }
    );
  };

  render() {
    return (
      <section className="App">
        <MainBar />
        <div className="lebron_james">
          <h1>The Satus App of the NBA</h1>
        </div>
        <div className="nba_lists">
          <div className="season_leaders_players">
            <MainWindow
              favorit_likes={this.state.favorite_players_likes}
              items={this.state.season_leaders_players.items}
              title={this.state.season_leaders_players.title}
              like={async (like_data, id) => {
                this.like(like_data, id, "FavoritesPlayers");
              }}
            />
          </div>
          <div className="nab_league_leaders">
            <MainWindow
             
              favorit_likes={this.state.favorite_teams_likes}
              items={this.state.nab_league_leaders.items}
              title={this.state.nab_league_leaders.title}
              like={async (like_data, id) => {
                this.like(like_data, id, "FavoritesTeams");
              }}
            />
          </div>
        </div>
      </section>
    );
  }
}

export default App;
