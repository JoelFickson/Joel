import {BriefcaseIcon, GlobeIcon, LocationIcon, WorkflowIcon} from '@primer/octicons-react';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';

import Wrapper from "../../components/Wrapper";


const Software = () => {

    return <Wrapper>
        <div className="bg-slate-400 flex flex-col gap-4 justify-center items-center" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(6,47,100, 0.04), rgba(6,47,100, 1)),  url(career.jpg)`,
            height: "60vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>
            <h4 className="md:text-6xl text-lg text-white font-extrabold ">
                My Career
            </h4>
            <p className='text-lg text-slate-50'>
                My career in glance
            </p>
        </div>

        <div className='mt-10 mx-20 flex gap-2 flex-col p-10 shadow'>
            <h4 className="md:text-4xl text-lg font-extrabold ">
                #Context
            </h4>
            <p className='text-lg'>
                For the most part of my career, I have spent it doing software development. The first ever code I wrote
                was back in 2010, I was 16 at the time. Still in high school. I am glad I knew what I wanted to become
                when I finish school.
            </p>
            <p className='text-lg'>
                I don't have an attractive educational background as most people have. My educational background
                consists of doing various
                programs. I did Computer Networking [Cisco Certified -2012], Computing & Information Systems, Advanced
                Diploma in Information Technology, I enrolled at San Francisco State Univeristy to finish my undergrad
                in Computer Science[3rd yr], then Covid happened.
                The rest is history.
            </p>

        </div>


        <div className='bg-slate-300'>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{background: '#193A67', color: '#fff'}}
                    contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                    date="2022 - present"
                    dateClassName='text-black'
                    iconStyle={{background: '#0d5cc1', color: '#fff'}}
                    icon={<BriefcaseIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Full Stack Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Scaling Funds</h4>
                    <p><LocationIcon/> Berlin, Germany</p>
                    <p><WorkflowIcon/> Remote</p>
                    <p><GlobeIcon/> <a href="www.scalingfunds.com" target='_blank'>www.scalingfunds.com</a></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: '#052F65', color: '#fff'}}
                    icon={<BriefcaseIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Founding Software Engineer</h3>
                    <h4 className="vertical-timeline-element-subtitle">CollabWorks Inc</h4>
                    <p><LocationIcon/> Redwood City, California</p>
                    <p><WorkflowIcon/> Hybrid</p>
                    <p><GlobeIcon/> <a href="www.collabworks.com" target='_blank'>www.collabworks.com</a></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: '#052F65', color: '#fff'}}
                    icon={<BriefcaseIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">AKTEK iO</h3>
                    <h4 className="vertical-timeline-element-subtitle">Full Stack Software Engineer</h4>
                    <p><LocationIcon/> London, England</p>
                    <p><WorkflowIcon/> Remote</p>
                    <p><GlobeIcon/> <a href="www.aktek.io" target='_blank'>www.aktek.io</a></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    iconStyle={{background: '#052F65', color: '#fff'}}
                    icon={<BriefcaseIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Changing Directions</h3>
                    <h4 className="vertical-timeline-element-subtitle">Full Stack Software Engineer</h4>
                    <h4 className="vertical-timeline-element-subtitle">Richmond, CA</h4>
                    <p><WorkflowIcon/> Hybrid</p>
                    <p><GlobeIcon/>
                        <a href="https://changingdirections.life"
                           target='_blank' rel="noreferrer"
                        >    {" "} www.changingdirections.life
                        </a>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{background: '#052F65', color: '#fff'}}
                    icon={<BriefcaseIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Web Developer [Consultant]</h3>
                    <h4 className="vertical-timeline-element-subtitle">Raised For a Purpose</h4>
                    <p><LocationIcon/> Lilongwe, Malawi</p>
                    <p><WorkflowIcon/> Hybrid</p>
                    <p><GlobeIcon/>
                        <a href="https://rfpmam.com"
                           target='_blank' rel="noreferrer">
                            {" "}www.rfpmam.com
                        </a>
                    </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"

                    iconStyle={{background: '#052F65', color: '#fff'}}
                    icon={<BriefcaseIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Android Mobile App Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">What Matters Associate Broker</h4>
                    <p><LocationIcon/> Virginia, USA</p>
                    <p><WorkflowIcon/> Remote</p>

                    <p><GlobeIcon/>
                        <a href="https://whatmattersw2.com/"
                           target='_blank' rel="noreferrer">
                            {" "} whatmattersw2.com
                        </a>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"

                    iconStyle={{background: '#052F65', color: '#fff'}}
                    icon={<BriefcaseIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Web & Mobile App Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Fountain of Victory</h4>
                    <p><WorkflowIcon/> Hybrid</p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{background: '#052F65', color: '#fff'}}
                    icon={<BriefcaseIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">Android Game Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle">LUANAR In Association with Michigan State
                        University</h4>
                    <p>
                        <LocationIcon/> Lilongwe, Malawi</p>
                    <p><WorkflowIcon/> Hybrid</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    iconStyle={{background: '#052F65', color: '#fff'}}
                    icon={<BriefcaseIcon/>}
                >
                    <h3 className="vertical-timeline-element-title">IT Instructor</h3>
                    <h4 className="vertical-timeline-element-subtitle">Techno Brain New Horizons</h4>
                    <p>
                        <LocationIcon/> Lilongwe, Malawi</p>
                    <p><WorkflowIcon/> Office</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>

        <div className='flex justify-center flex-col items-center p-10'>
            <h4 className='md:text-xl'>You can be a part of my journey too.</h4>
            <span className='md:text-2xl'> Talk to me : {" "}<a
                href="mailto:hello@imjoel.dev" className='text-mainColor-50'>hello@imjoel.dev</a></span>
        </div>

    </Wrapper>
}
export default Software;
