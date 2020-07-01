import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Weather from "./Views/Weather";
import News from "./Views/News";
import Alerts from "./Views/Alerts";
import DD from './img/DD.png'

export default function App() {

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img src={DD} width="50" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/weather">
                Weather
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/alerts">
                Alerts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/news">
                News
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <BrowserRouter>
        <Route exact path="/weather" component={Weather} />
        <Route path="/news" component={News} />
        <Route path="/alerts" component={Alerts} />
      </BrowserRouter>
    </>
  );
}
