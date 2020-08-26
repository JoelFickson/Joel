import React from "react";
import top from "../Media/t.jpg";
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
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <ion-icon name="apps-outline"/>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to="#">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">My Story</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Real World Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Sample Projects</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Tech Stacks</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Start-ups</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Get In Touch</Link>
                        </li>


                    </ul>

                </div>
            </nav>
            </div>
        </>
    )
};

export default Navigation;