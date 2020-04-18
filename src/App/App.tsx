import React from "react";
import { Routes } from "../Routes/Routes";
import { Router } from "react-router-dom";
import {motion} from 'framer-motion'
import { history } from "../history";
import { BurgerMenu } from "src/Components/View/BurgerMenu/BurgerMenu";

function App() {
  return (
    <div className="App">
      <div className="">
        <Router history={history}>
          {/* <Header /> */}
          <motion.div className="">
            <BurgerMenu />
          </motion.div>
          <Routes />
        </Router>
      </div>
    </div>
  );
}

export default App;
