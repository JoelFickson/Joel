import React from "react";
import {SecondNavbar} from "../Navigation/Navbar";

const Stacks = () => {
    return (
        <div className='bodyBackground'>
            <SecondNavbar/>

            <div className="container">
                <div data-aos="fade-up-right" data-aos-delay="50"
                     data-aos-duration="1000">
                    <h2 className='text-center mt-4 PrimaryColor'>Tech Stacks</h2>
                </div>

                <div className="col-md-8 mx-auto">
                    <p className='text-center '>I will be honest with you. I am not an expert nor am I a beginner. Most
                        of my development career,
                        has been spent working
                        alone except from a few projects which I did with a few people. Also, the environment I started
                        my
                        career
                        assumes you are everything, designer, developer, tester and even learn deployment. It is with
                        this
                        information, I tell you I am an
                        advanced developer. I develop in different stacks. Throw me a challenge, I will deliver.</p>
                </div>
            </div>

        </div>

    )
}

export default Stacks;