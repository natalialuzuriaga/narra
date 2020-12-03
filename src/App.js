import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, withRouter, BrowserRouter} from "react-router-dom";

import Nav from "./components/nav.component";
import Login from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import Welcome from "./components/landing.component";
import Match from "./components/match.component"

const Main = withRouter(({location}) =>{
  return<div>
    {
      location.pathname !== '/login' && location.pathname !== '/' && location.pathname !== '/register' && <Nav />
    }

      <Route exact path="/" component={Welcome} />
      <Route path="/register" exact component={Register} />
      <Route path="/login" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/match" exact component={Match}/>
  </div>
})

const App = () => (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
)

// function App() {
//   return (
//     <Router>
//       {/* <Nav /> */}
//       <br/>
//       <Route exact path="/" component={Welcome} />
//       <Route path="/login" exact component={Login} />
//       <Route path="/register" exact component={Register} />
//       <Route path="/home" exact component={Home} />
//       <Route path="/match" exact component={Match}/>
//     </Router>
//   );
// }

export default App;
