//page.home.js
import React, { Component } from "react";
// import userDataAxios from "../utils/userDataAxios.js";
import LogoHeader from "../../components/LogoHeader";
import NavButtons from "../../components/NavButtons";



class Home extends Component {

    render() {

      return (
        <div>
            <LogoHeader />
            <NavButtons />

            <h1 className="text-center">CRS Home Page</h1>
        </div>
      );
    }
  }
  
  export default Home;
  