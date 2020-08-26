import React from "react";
import {Link} from "react-router-dom";

const WelcomeComponent = () => {
    return (
        <>
            <div className="col-md-6 mx-auto mt-5">
                <h1 className='text-center'>Hi, I am Joel Fickson Ngozo.</h1>
                <h3 className='text-center'>You can call me Joel</h3>
                <h4 className='text-center'>Others call me JavaKid</h4>
                <p className='text-center py-3'>
                    <Link className='btn btn-primary' to={''}>Get To Know Me</Link>
                </p>

            </div>

        </>
    )
}

export default WelcomeComponent;