//component navbuttons.js
//component logoheader.js
import React from "react";
//Create link for /about
import { Link } from "react-router-dom";

function NavButtons() {
    return (
        <div>
            <div classname="container">
                <div classname="regpagetopbtn">
                    <div classname="row">
                        <div classname="col-1 pzero"></div>
                        <div classname="col-2">
                            <a href="/appointment">
                                <img src="images/Appt.png" />
                            </a>
                            <br />
                            <span classname="btnlabel">
                                Appointments
                      </span>
                        </div>
                        <div classname="col-1"></div>
                        <div classname="col-2">
                            <a href="/bringforms">
                                <img src="images/Appt.png" />
                            </a>
                            <br />
                            <span classname="btnlabel">
                                &nbsp;&nbsp;ID/Forms
                      </span>
                        </div>
                        <div classname="col-1"></div>
                        <div classname="col-2">
                            <a href="/staff">
                                <img src="images/Counselor.png" />
                            </a>
                            <br />
                            <span classname="btnlabel">
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Staff
                    </span>
                        </div>
                        <div classname="col-1"></div>
                        <div classname="col-2">
                            <a href="logout">
                                <img src="images/HomeConsumers.png" />
                            </a>
                            <br />
                            <span classname="btnlabel">
                                &nbsp;&nbsp;Log
                  </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavButtons;
