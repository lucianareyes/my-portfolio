import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProjectPage from "./pages/Project";
import HomePage from "./pages/Home";
import Header from "./layout/Header";
import "./App.css";
import ScrollToTop from "./hooks/scrollToTop";

export default function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/projects/:projectId" component={ProjectPage} />
      </Switch>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
