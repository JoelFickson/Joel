import {FileCodeIcon, GraphIcon, PencilIcon, PeopleIcon} from "@primer/octicons-react";
import Link from "next/link";

const HeroSection = () => {
    return <div className='flex justify-center items-center md:h-[75vh] h-70' style={{
        backgroundImage: `linear-gradient(to bottom, rgba(6,47,100, 0.04), rgba(6,47,100, 1)),  url(contact.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat"
    }}>
        <div
            className="md:grid md:grid-cols-2 flex md:gap-24 md:flex-row flex-col justify-center md:w-2/3 w-full items-center">
            <div className="flex flex-col gap-6">
                <h4 className="md:text-6xl text-slate-800  z-0 text-lg extra-bold ">
                    Hello,
                    <br/>
                    I Am Joel Fickson
                </h4>
                <p className='text-xl z-0 text-white'>
                    I am a Full Stack Software Engineer, Startup Enthusiast and Tech Community Aspirant.
                </p>
                <Link href="">
                    <a className="main-button">
                        Get In Touch
                    </a>
                </Link>
            </div>

            <div
                className="grid md:gap-24 gap-12 justify-items-end items-center md:p-10  p-5 md:mb-0 mb-10   md:grid-cols-2 grid-cols-4">
                <div className='md:h-24 h-16'>
                    <FileCodeIcon className='text-white md:h-42 h-24'/>
                </div>
                <div className='md:h-24 h-16'>
                    <GraphIcon className='text-white md:h-42 h-24'/>
                </div>
                <div className='md:h-24 h-16'>
                    <PencilIcon className='text-white md:h-42 h-24'/>
                </div>
                <div className='md:h-24 h-16'>
                    <PeopleIcon className='text-white md:h-42 h-24'/>
                </div>
            </div>
        </div>
    </div>;
}

export default HeroSection
