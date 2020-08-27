import React from 'react';
import {Navigation} from "./Navigation/Navbar";
import Body from "./Body/Body";
import {Route} from "react-router-dom"
import GetInTouch from "./GetInTouch";
import RealWorldProjects from "./RealWorld/RealWorld";
import MyStory from "./MyStory/MyStory";
import SampleProjects from "./SampleProjects/Sample";
import Stacks from "./TechStacks/Stacks";
import Startups from "./Startups/Startups";


function App() {
    return (
        <div className='bodyBackground h-100'>


            <Route exact component={Navigation} path='/'/>
            <Route exact component={Body} path='/'/>
            <Route exact component={GetInTouch} path='/get-in-touch'/>
            <Route exact component={GetInTouch} path='/contact'/>
            <Route exact component={RealWorldProjects} path='/real'/>
            <Route exact component={MyStory} path='/story'/>
            <Route exact component={SampleProjects} path='/sample'/>
            <Route exact component={Startups} path='/start-ups'/>
            <Route exact component={Stacks} path='/stacks'/>

        </div>
    );
}

export default App;
