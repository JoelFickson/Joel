import {ThreeBarsIcon} from '@primer/octicons-react';
import Link from 'next/link';
import React from 'react';

import getRoutes, {routePath} from "../utils/routes"


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const routes: routePath[] = getRoutes;
    return (
        <nav className="relative flex bg-slate-200 flex-wrap items-center justify-between  py-3  ">
            <div className="container  px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link href="/">
                        <a className="font-bold leading-relaxed logo-text flex justify-center font-extrabold items-center inline-block mr-4 py-2  uppercase">
                            Joel Fickson

                        </a>
                    </Link>
                    <button
                        className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <ThreeBarsIcon size={16}/>
                    </button>
                </div>
                <div className={`lg:flex flex-grow just items-center${navbarOpen ? ' flex' : ' hidden'}`}>
                    <div className="flex flex-col justify-between gap-4 lg:flex-row  lg:ml-auto">
                        {routes.map((route) => (
                            <Link key={route.name} href={route.path}>
                                <a
                                    className={`p-1 ${

                                        route.path === route.path ? 'active-state' : ' text-gray-700'
                                    }`}
                                >
                                    <p>{route.name}</p>
                                </a>
                            </Link>
                        ))}
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
