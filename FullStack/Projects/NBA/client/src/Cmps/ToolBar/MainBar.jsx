// -------------------- Import --------------------
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class MainBar extends Component {
  render() {
    return (
      <header className="main_bar">
        <NavLink to="/">
          <img
            src="https://ak-static.cms.nba.com/wp-content/uploads/logos/leagues/logo-nba.svg"
            alt="nba_logo"
            className="nba_logo"
          />
        </NavLink>
        <div className="NavLink">
          <NavLink to="/Players">
            <span className="players">PLAYERS</span>
          </NavLink>
          <NavLink to="/Teams">
            <span className="teams">TEAMS</span>
          </NavLink>
        </div>
      </header>
    );
  }
}
