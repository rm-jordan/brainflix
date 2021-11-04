import { Component } from "react";
import "./styles/app.scss";
import Header from "./components/Header/Header";
import videoDetails from "./data/video-details.json";
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
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/upload" exact component={UploadPage}></Route>
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
