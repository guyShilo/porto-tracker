import React, { useEffect } from "react";
import { Routes } from "../Routes/Routes";
import { Router } from "react-router-dom";
import { motion } from "framer-motion";
import { history } from "../history";
import { BurgerMenu } from "src/Components/View/BurgerMenu/BurgerMenu";
import GlobalState from "../Context/GlobalState";
import GlobalMenuState from "../Context/GlobalMenuState";
import { animationHelpers } from "../Utils";

function App() {
  return (
    <GlobalState>
      <div className="App">
        <GlobalMenuState>
            <Router history={history}>
                <BurgerMenu />
              <Routes />
            </Router>
        </GlobalMenuState>
      </div>
    </GlobalState>
  );
}

export default App;
