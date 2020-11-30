import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import LandingNav from "./components/landing-nav.component"
import Login from "./components/login.component"
function App() {
  return (
    <Router>
      <LandingNav />
      <br/>
      <Route path="/login" exact component={Login} />
    </Router>
  );
}

export default App;
