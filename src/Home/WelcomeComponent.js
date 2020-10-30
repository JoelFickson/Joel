import React from "react";
import {Link} from "react-router-dom";
import "../App.css";

const WelcomeComponent = () => {
    return (
        <>
            <div className="col-md-6 mx-auto p-4">
                <div className="col-md-12 CenteredHomeContent">
                    <h1 className='text-center BlueColor animate__animated animate__fadeInUp'>Hi, I am Joel Fickson
                        Ngozo.</h1>
                    <h4 className='text-center WhiteTextColor'>You can call me Joel</h4>
                    <h6 className='text-center secondaryColor'>Others call me JavaKid</h6>
                    <p className='text-center py-3'>
                        <Link className='btn btn-primary' to='/story'>Get To Know Me</Link>
                    </p>

                </div>
            </div>


        </>
    )
}

export default WelcomeComponent;