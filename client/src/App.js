import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import AppointmentResponse from "./pages/AppointmentResponse";
import BringForms from "./pages/BringForms";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Staff from "./pages/Staff";

import FooterContact from "./components/FooterContact";
import LogoHeader from "./components/LogoHeader";
import MessageError from "./components/MessageError";
import NavButtons from "./components/NavButtons";


// require("dotenv").config();

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/appointment" component={Appointment} />
          <Route exact path="/appointmentresponse" component={AppointmentResponse} />
          <Route exact path="/bringforms" component={Bringforms} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/staff" component={Staff} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
