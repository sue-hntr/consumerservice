//component logoheader.js
import React from "react";
//Create link for /about
import { Link } from "react-router-dom";

function LogoHeader() {
    return (
        <div>
            <div classname="pagehctr">
                <div classname="container">
                    <div classname="logohead">
                        <div classname="row">
                            <div classname="col-1 pzero"></div>
                            <div classname="col-3">
                                <Link to="/about">
                                    <h1 classname="crs_font  dblue">CRS</h1>
                                </Link>
                            </div>
                            <div classname="col-7 green">
                                <span>Consumer Registration for Services</span>
                                <br />
                                <span>Free Confidential Help with Housing</span>
                            </div>
                            <div classname="col-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LogoHeader;