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

                <div className="row">
                    <div className="col-md-4">
                        <div className="col-md-12 p-4 rounded shadow WhiteBackground">
                            <h4>Front End Development</h4>
                            <p className='PrimaryColor'><small>
                                <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                            </small> React
                            </p>
                            <p className=''>Flutter</p>
                            <p className=''>A little Angular</p>
                            <p className=''>A little Vue</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12 p-4 rounded shadow WhiteBackground">
                            <h4>Back End Development</h4>
                            <p className='PrimaryColor'><small>
                                <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                            </small> Nodejs
                            </p>
                            <p className=''>PHP</p>
                            <p className=''>Django</p>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12 p-4 rounded shadow WhiteBackground">
                            <h4>Mobile Application Development</h4>
                            <p className='PrimaryColor'>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>
                                Android with Java
                            </p>
                            <p className=''>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>
                                Flutter
                            </p>
                            <p className=''>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>
                                React Native
                            </p>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12 mt-3 p-4 rounded shadow WhiteBackground">
                            <h4>Deployment</h4>
                            <p className='PrimaryColor'>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>
                                Google Cloud Platform
                            </p>
                            <p className=''>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>
                                Firebase
                            </p>
                            <p className=''>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>
                                Heroku
                            </p>
                            <p className=''>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>
                                Amazon Web Services
                            </p>
                            <p className=''>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>
                                Digital Ocean
                            </p>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12 mt-3 p-4 rounded shadow WhiteBackground">
                            <h4>Databases</h4>
                            <p className='PrimaryColor'>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>
                                MySQL
                            </p>
                            <p className=''>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>
                                Firebase Cloudstore
                            </p>
                            <p className=''>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>
                                MongoDB
                            </p>
                            <p className=''>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>
                                Postgresql
                            </p>
                            <p className=''>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>

                            </p>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12 mt-3 p-4 rounded shadow WhiteBackground">
                            <h4>State Managers</h4>
                            <p className='PrimaryColor'>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>
                                Redux & Redux Toolkit
                            </p>
                            <p className=''>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>

                            </p>
                            <p className=''>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>
                                MongoDB
                            </p>
                            <p className=''>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>
                                Postgresql
                            </p>
                            <p className=''>
                                <small>
                                    <ion-icon name="checkmark-outline" className='PrimaryColor'/>
                                </small>

                            </p>

                        </div>
                    </div>
                </div>

                <div className="col-md-10 mx-auto">
                    <h4 className='mt-5'>
                        I am constantly learning and I experiment with different languages. Here are the
                        languages/frameworks/libraries I have
                        worked with and I have experimented with.
                    </h4>
                    <h6>
                        PHP, Python, Java, C#, ExpressJs, ReactJs, Laravel, Flutter, React Native, JavaScript
                    </h6>
                </div>


            </div>

        </div>

    )
}

export default Stacks;