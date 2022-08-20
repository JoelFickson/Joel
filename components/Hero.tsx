import Image from "next/image";
import Link from "next/link";

import J from "../public/j.jpg";

const HeroSection = () => {
    return <div className="mx-2.5 bg-slate-400 z-10 md:z-50 md:relative h-[200px]" style={{
        backgroundImage: `url(bg.svg)`,
        height: "200px",
        backgroundSize: "cover",
    }}>
        <div className="w-2/3 h-[45vh]  flex gap-4 flex-col justify-center items-center">
            <div className="flex flex-col gap-6">
                <h4 className="md:text-6xl text-mainColor  z-0 text-lg extra-bold ">
                    Hello,
                    <br/>
                    My Name is Joel,
                </h4>
                <p className='text-xl z-0'>
                    I am a Full Stack Software Engineer, Startup Enthusiast and Tech Community Aspirant.
                </p>
                <Link href="">
                    <a className="main-button">
                        Get In Touch
                    </a>
                </Link>
            </div>

            <div className="md:absolute w-1/3 md:right-10 md:bottom-0 md:top-10 md:-z-10">
                <Image layout="responsive" src={J} className="rounded" alt=""/>
            </div>
        </div>
    </div>;
}

export default HeroSection
