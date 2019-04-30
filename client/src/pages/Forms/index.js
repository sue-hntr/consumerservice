//page.bringforms.js
import React, { Component } from "react";
// import userDataAxios from "../utils/userDataAxios.js";

import LogoHeader from "../../components/LogoHeader";
import NavButtons from "../../components/NavButtons";



class Forms extends Component {

    render() {

      return (
        <div>
            <LogoHeader />
            <NavButtons />

            <h1 className="text-center">Bring Your Forms</h1>
        </div>
      );
    }
  }
  
  export default Forms;
  