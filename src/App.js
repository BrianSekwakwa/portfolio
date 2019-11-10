import React from "react";
import Main from "./components/Main";
import AboutProject from "./components/AboutProject";
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/" component={Main} exact />
          <Route path="/AboutProject" component={AboutProject} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;

// Navigation {main}
// Landing Home Page {main}
// About Me {main}
// Projects {main}
// Contacts {main}
// About project {Route}
