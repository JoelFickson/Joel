import React from "react";
import {SecondNavbar} from "./Navigation/Navbar";

const GetInTouch = () => {
    return (
        <div className="inTouch h-100">
            <SecondNavbar/>

            <div data-aos="zoom-in" data-aos-delay="50"
                 data-aos-duration="1000">
                <h2 className='text-center mt-4'>Welcome and get in touch with me</h2>
            </div>

            <h4 className='mt-5 p-5 text-center'>I am everywhere on the internet</h4>

        </div>

    )
};

export default GetInTouch;