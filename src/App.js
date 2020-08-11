import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import SongPage from "./containers/SongPage/SongPage";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/songs/:id" render={(props) => <SongPage {...props} />} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
