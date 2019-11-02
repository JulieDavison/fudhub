import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Budget from "./pages/Budget";
import FoodChoice from "./pages/FoodChoice";
import RecipeResults from "./pages/RecipeResults";
import YelpResults from "./pages/YelpResults";
import Saved from "./pages/Saved"
import restaurant from "./pages/restaurant"

import * as routes from "./routes";

function App() {
  return (
    <Router>
      <div>
          <Route exact path={routes.Home} component= {Home}/>
          <Route exact path={routes.Register} component= {Register}/>
          <Route exact path={routes.SignIn} component= {SignIn}/>
          <Route exact path={routes.Profile} component= {Profile}/>
          <Route exact path={routes.Budget} component= {Budget}/>
          <Route exact path={routes.FoodChoice} component= {FoodChoice}/>
          <Route exact path={routes.RecipeResults} component= {RecipeResults}/>
          <Route exact path={routes.YelpResults} component= {YelpResults}/>
          <Route exact path={routes.Saved} component= {Saved} />
          <Route exact path={routes.restaurant} component= {restaurant} />
      </div>
    </Router>
  );
}

export default App;

