import React from "react";
import WelcomeComponent from "../Home/WelcomeComponent";
import top from "../Media/8.jpg";
import {Link} from "react-router-dom";

const Body = () => {
    return (
        <div className="row __FullHeight">
            <div className="col-md-12" style={{
                backgroundImage: `url(${top})`,
                height: "100vh",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundBlendMode: "overlay",
                backgroundColor: "#3b526e"
            }}>
                <div className="col-md-12 CenteredHomeContent">
                    <WelcomeComponent/>
                </div>

            </div>


        </div>

    )
}

export default Body;