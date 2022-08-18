import type {NextPage} from 'next'

import HeroSection from "../components/Hero";
import Wrapper from "../components/Wrapper";


const Home: NextPage = () => {
    return (
        <Wrapper>

            <div>
                <HeroSection/>
            </div>
            <div
                className='bg-gradient-to-r  p-2  from-slate-100 to-slate-200 h-[10vh] flex gap-4 justify-center items-center mt-[45vh]  md:-rotate-6'>
                <h4 className='md:text-xl text-sm'>
                    Software Development
                </h4>
                |
                <h4 className='md:text-xl text-sm'>
                    Tech Startups
                </h4>
                |
                <h4 className='md:text-xl text-sm'>
                    Part Time Writer
                </h4>
                |
                <h4 className='md:text-xl text-sm'>
                    Tech Community Aspirant
                </h4>
            </div>

            <div className='mt-40 mx-20'>
                <h4 className='text-2xl'>
                    Software Development
                </h4>
                <p className='text-lg'>
                    I have been developing software since 2010 and professionally since 2013. I started out as a
                    traditional Desktop Application Developer and have since then worked on a variety of different
                    projects.

                </p>
            </div>
            <div className='mt-10 mx-20'>
                <h4 className='text-2xl'>
                    Tech Startups
                </h4>
                <p className='text-lg'>
                    Lots of lessons! I have founded and helped create a lot of startups. The earliest started that I
                    co-founded was called EazyMalawi back in 2014.

                </p>
            </div>
            <div className='mt-10 mx-20'>
                <h4 className='text-2xl'>
                    Part Time Writer
                </h4>
                <p className='text-lg'>
                    When I am not working I write. I write about tech, startups, and life.

                </p>
            </div>
            <div className='mt-10 mx-20'>
                <h4 className='text-2xl'>
                    Tech Community Aspirant
                </h4>
                <p className='text-lg'>
                    As I grow as a developer, I embrace the power that teams have in achieving goals faster. I am
                    currently championing the idea of a tech community.

                </p>
            </div>

        </Wrapper>
    )
}

export default Home
