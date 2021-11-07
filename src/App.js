import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Ruf from "./Pages/Ruf/Ruf";
import Appionment from "./Pages/Appionment/Appionment";
import Footer from "./Pages/Shared/Footer/Footer";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Privateroute from "./Pages/PrivateRoute/Privateroute";
import Dashbord from "./Pages/Dashbord/Dashbord/Dashbord";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Privateroute path="/appionment">
              <Appionment />
            </Privateroute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/rgister">
              <Register />
            </Route>
            <Privateroute path="/dashbord">
              <Dashbord />
            </Privateroute>
            <Route path="/ruf">
              <Ruf />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
