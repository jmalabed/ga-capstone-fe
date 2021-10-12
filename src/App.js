import "./App.css";
import { Route, Link, Switch, withRouter, useHistory } from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Register from "./components/Register";
import Business from "./components/Business";
import EmployeeAdd from "./components/EmployeeAdd";
import HotdeskAdd from "./components/HotdeskAdd";
import ConferenceAdd from "./components/ConferenceAdd";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Default from "./components/Default";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/home"
          render={(routerProps) => <Home {...routerProps} />}
        />
        <Route
          exact
          path="/register"
          render={(routerProps) => <Register {...routerProps} />}
        />
        <Route
          exact
          path="/login"
          render={(routerProps) => <Login {...routerProps} />}
        />
        <Route
          exact
          path="/business/:id"
          render={(routerProps) => <Business {...routerProps} />}
        />
        <Route
          exact
          path="/business/:id/employee/add"
          render={(routerProps) => <EmployeeAdd {...routerProps} />}
        />
        <Route
          exact
          path="/business/:id/hotdesk/add"
          render={(routerProps) => <HotdeskAdd {...routerProps} />}
        />
        <Route
          exact
          path="/business/:id/conference/add"
          render={(routerProps) => <ConferenceAdd {...routerProps} />}
        />
        <Route
          path="/"
          render={(routerProps) => <Default {...routerProps} />}
        />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
