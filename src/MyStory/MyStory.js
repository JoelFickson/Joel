import React from "react";
import {SecondNavbar} from "../Navigation/Navbar";

const MyStory = () => {
    return (
        <>
            <SecondNavbar/>

            <div data-aos="fade-up-right" data-aos-delay="50"
                 data-aos-duration="1000">
                <h2 className='text-center mt-4'>Here is my story</h2>
            </div>

        </>

    )
}

export default MyStory;