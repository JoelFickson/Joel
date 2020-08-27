import React from "react";
import top from "../Media/mystory.jpg";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <div style={{
                backgroundImage: `url(${top})`,
                height: '450px',
                backgroundPosition: 'center',
                backgroundSize: 'cover',

            }}
                 className='shadow'
            >
                <nav className="navbar navbar-expand-lg navbar-light bg-light transparent">
                    <Link className="navbar-brand" to="#">Joel Here</Link>
                    <Link to='#' className="navbar-toggler WhiteTextColor" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <ion-icon className='WhiteTextColor' name="apps-outline"/>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto py-1 animate__animated animate__slideInDown contentNavBar">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/story">My Story</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/real">Real World Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sample">Sample Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/stacks">Tech Stacks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/start-ups">Start-ups</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/get-in-touch">Get In Touch</Link>
                            </li>


                        </ul>

                    </div>
                </nav>
            </div>
        </>
    )
};

const SecondNavbar = () => {
    return (
        <>
            <div className='shadow contentNavBar'>
                <nav className="navbar navbar-expand-lg navbar-light bg-light transparent">
                    <Link className="navbar-brand WhiteTextColor" to="/">Joel Here</Link>
                    <Link to='#' className="navbar-toggler WhiteTextColor" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                        <ion-icon className='WhiteTextColor' name="apps-outline"/>
                    </Link>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto py-1 animate__animated animate__slideInDown contentNavBar">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/story">My Story</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/real">Real World Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sample">Sample Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/stacks">Tech Stacks</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/start-ups">Start-ups</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/get-in-touch">Get In Touch</Link>
                            </li>
                        </ul>

                    </div>
                </nav>
            </div>
        </>
    )
};


export {Navigation, SecondNavbar};