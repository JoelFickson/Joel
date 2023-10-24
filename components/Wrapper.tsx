import React from "react";

import Navbar from "./NavBar";

type PropsT = {
    children: React.ReactNode
}
type WrapperT = (props: PropsT) => JSX.Element;

const Wrapper: WrapperT = ({children}) => {

    return <div>
        <Navbar/>
        <div className='min-h-[100vh]'>
            {children}
        </div>
        <div className='main-color p-10'>

        </div>
    </div>
}
export default Wrapper;
