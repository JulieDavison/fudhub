import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import Budget from "./pages/Budget";
import FoodChoice from "./pages/FoodChoice";
import FoodResults from "./pages/FoodResults";
import * as routes from "./routes";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={routes.Home} component= {Home}/>
          <Route exact path={routes.Register} component= {Register}/>
          <Route exact path={routes.SignIn} component= {SignIn}/>
          <Route exact path={routes.Profile} component= {Profile}/>
          <Route exact path={routes.Budget} component= {Budget}/>
          <Route exact path={routes.FoodChoice} component= {FoodChoice}/>
          <Route exact path={routes.FoodResults} component= {FoodResults}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
