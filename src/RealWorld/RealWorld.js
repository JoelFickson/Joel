import React from "react";
import {SecondNavbar} from "../Navigation/Navbar";
import elior from "../Media/elior.png";
import v from "../Media/vwaza.png";
import adn from "../Media/adn.png";
import eli from "../Media/eli.jpg";
import dv from "../Media/dv.svg";
import xt from "../Media/xt.png";

const RealWorldProjects = () => {
    return (
        <>
            <SecondNavbar/>

            <div className="container">
                <div data-aos="fade-up-right" data-aos-delay="50"
                     data-aos-duration="1000">
                    <h2 className='text-center mt-4'>Here Are Some of my Projects</h2>

                </div>

                <h5 className='p-3 text-center PrimaryColor'>I am constantly building products and here are some of
                    them</h5>

                <div className="row mt-5">
                    <div className="col-md-12"><h3>Personal Startup Projects</h3>
                        <hr/>
                    </div>

                    <div className="col-md-4">
                        <div className="col-md-12 p-4 shadow WhiteBackground rounded">
                            <h4 className='PrimaryColor text-center p-2'> Elior Health Systems</h4>
                            <img alt='Elior Health Systems' className='img img-fluid mx-auto d-block' src={elior}/>

                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="col-md-12 p-4 shadow WhiteBackground rounded">
                            <h4 className='PrimaryColor text-center p-2'> Name withheld</h4>
                            <img alt='Music Systems' className='img img-fluid mx-auto d-block' src={v}/>

                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="col-md-12 p-4 rounded WhiteBackground shadow">
                            <h4 className='PrimaryColor text-center p-2'>African Developers Network</h4>
                            <img alt='African Developers Network' className='img img-fluid mx-auto d-block' src={adn}/>

                        </div>
                    </div>
                </div>

                <div className="row mt-5 p-2">
                    <div className="col-md-12">
                        <h3> Portfolio</h3>
                        <hr/>
                    </div>

                    <div className="col-md-3">

                        <div className="col-md-12 WhiteBackground shadow p-3 rounded">
                            <img src={eli} className='img img-fluid rounded d-block mx-auto' alt=""/>
                            <h5>English Language Institute</h5>
                            <h6>San Francisco, California</h6>
                        </div>
                    </div>

                    <div className="col-md-3">

                        <div className="col-md-12 WhiteBackground shadow p-3 rounded">
                            <img src={dv} className='img img-fluid rounded d-block mx-auto' alt=""/>
                            <h5>Changing Directions</h5>
                            <h6>Martinez, California</h6>
                        </div>
                    </div>
                    <div className="col-md-3">

                        <div className="col-md-12 WhiteBackground shadow p-3 rounded">
                            <img src={xt} className='img img-fluid rounded d-block mx-auto' alt=""/>
                            <h5>Changing Directions</h5>
                            <h6>Martinez, California</h6>
                        </div>
                    </div>
                </div>
            </div>


        </>

    )
}

export default RealWorldProjects;