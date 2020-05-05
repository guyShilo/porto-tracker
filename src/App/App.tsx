import React from "react";
import { Routes } from "../Routes/Routes";
import { Router } from "react-router-dom";
import { history } from "../history";
import { Header } from "src/Components/View/Header/Header";
import GlobalState from "../Context/GlobalState";
import GlobalMenuState from "../Context/GlobalMenuState";

function App() {
  return (
    <GlobalState>
      <div className="App">
        <GlobalMenuState>
            <Router history={history}>
                <Header/>
              <Routes />
            </Router>
        </GlobalMenuState>
      </div>
    </GlobalState>
  );
}

export default App;
