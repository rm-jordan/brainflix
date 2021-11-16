import { Component } from "react";
import "./styles/app.scss";
import Header from "./components/Header/Header";
import HomePage from "./components/HomePage/HomePage";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import UploadPage from "./pages/UploadPage/UploadPage";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/videos" exact component={HomePage} />
            <Route path="/videos/:id" exact component={HomePage} />
            <Route path="/upload" exact component={UploadPage} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
