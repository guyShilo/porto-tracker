import React from "react";
import { Routes } from "../Routes/Routes";
import { Router } from "react-router-dom";

import { history } from "../history";
import { Header } from "../Components/View/Header/Header";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Router history={history}>
          <Header />

          <Routes />
        </Router>
      </div>
    </div>
  );
}

export default App;
