import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./about/About";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursePage from "./courses/CoursesPage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
