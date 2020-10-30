import React from "react";
import {SecondNavbar} from "../Navigation/Navbar";
import mystory from "../Media/mystory.jpg"

const MyStory = () => {
    return (
        <>
            <SecondNavbar/>

            <div className="container __FullHeight">
                <div className="row">
                    <div className="col-md-5 p-4">
                        <div className="col-md-12">
                            <div data-aos="fade-up-right " data-aos-delay="50"
                                 data-aos-duration="1000">
                                <h4 className='text-center mt-5'>Joel Fickson Ngozo </h4>
                                <hr/>
                                <img src={mystory} alt='My story picture' className="img img-fluid rounded"/>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-7 p-4">
                        <div className="col-md-12   rounded p-2">
                            <div className="col-md-12 shadow rounded">
                                <h4 className='text-center mt-5 p-2'>
                                    My Story
                                </h4>
                                <hr/>
                                <p className='text-justify p-2'>
                                    I am a passion driven and product building driven individual that excels with
                                    challenges
                                    and beautiful solutions.
                                    If I'm being totally honest, I am a curious individual and a sucker for knowledge.

                                    I have lived all my life trying to better myself through diverse ways and channels.
                                    I
                                    have sought knowledge from people,
                                    books and through internet searches.

                                    One of my strongest attributes is self-reliance. One teacher told me that "You must
                                    view
                                    yourself as a team".
                                    This changed how I view myself as an individual on different cases and environments.
                                    I
                                    live everyday looking at myself as
                                    a group of developers and the like.

                                    It is because of this that I go the extra mile learning, developing and building
                                    myself
                                    for the future which is now.

                                    I do no relent. I practice and learn everyday. Its true, your memory can only hold
                                    so
                                    much. For the past 5 years, I have
                                    focused on building products.

                                    It has not been an aspiration for me to be in service business for so long, I want
                                    to
                                    build a product that can be used by the masses and
                                    my job should be to scale it up.
                                </p>
                                <p className='p-2'>

                                    I begun coding when I was in form 3, which is third year in high school. My first
                                    programming language was Visual Basic.Net
                                    through my teacher. He is the man that made me realize the route I had to take to
                                    learn
                                    programming.
                                    When I was between the ages of 7-10, my best friend came to me and told me that you
                                    could ask a computer who your wife would be in the future
                                    and the computer would tell you. That was the gas I needed to actually dive into
                                    computer science.
                                    All I wanted was to grow up and meet a computer which I could ask about my future
                                    wife
                                    and it should tell me.

                                    There are a lot of crazy stories that happened when I got a chance to sit in front
                                    of a
                                    computer in my first yr in high school but that's something
                                    you are not interested in right now.

                                    Fast forward to third year, I asked my computer science teacher to teach me how to
                                    code
                                    because at that time
                                    he was developing a Student Information System and I would see him do it every day.

                                    This was 2010. First day he told me to read a certain book and write a calculator
                                    exercise which I failed miserably.


                                </p>

                                <p className='p-2'>
                                    Little did I know that was preparing me for the future, I did learn with him for a
                                    month
                                    and I quit. I focused on my final
                                    year Government exams[MANEB-- Malawi Nation Examinations Board].
                                </p>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default MyStory;