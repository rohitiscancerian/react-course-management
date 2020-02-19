import React from "react";
import { Route, Switch } from "react-router-dom";
import AboutPage from "./about/About";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import CoursePage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/ManageCoursePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursePage} />
        <Route exact path="/course/:slug" component={ManageCoursePage} />
        <Route exact path="/course" component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
