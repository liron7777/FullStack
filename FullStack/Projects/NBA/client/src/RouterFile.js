import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

import App from "./App";
import FavoritesTable from "./Cmps/ToolBar/FavoritesTable";

const history = createBrowserHistory();

export default function RouterFile(props) {
  return (
    <Router history={history}>
      <main>
        <Switch>
          <Route path="/Players">
            <FavoritesTable name="Favorites Players" db="FavoritesPlayers" />
          </Route>
          <Route path="/Teams">
            <FavoritesTable
              name="Favorites Teams"
              db="FavoritesTeams"
              deleteAll={() => {
                console.log("hh");
              }}
            />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
