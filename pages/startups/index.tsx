import Wrapper from "../../components/Wrapper";

const Startups = () => {

    return <Wrapper>
        <div className="bg-slate-400 md:grid md:grid-cols-4 flex    gap-4 justify-center items-center" style={{
            backgroundImage: `linear-gradient(to right, rgba(6,47,100, 0.14), rgba(6,47,100, 0.19))`,
            height: "50vh",
            backgroundPosition: "center",
            backgroundSize: "cover",
        }}>
            <div className='md:col-span-2 flex items-center justify-center flex-col'>
                <h4 className="md:text-6xl text-lg text-white font-extrabold ">
                    Startup Projects
                </h4>
                <p className='text-lg text-slate-50'>
                    I have been involved in a couple of startups.
                </p>
            </div>
            <div className='md:col-span-2 relative flex gap-2 justify-center items-center'>
                <img src="elior.png" className='h-[20vh] shadow p-2 bg-slate-200' alt="Vwaza Logo"/>
                <img src="vwaza.png" className='h-[25vh] shadow p-2 rounded-r-lg bg-slate-100' alt="Vwaza Logo"/>
                <img src="adn.png" className='h-[20vh] shadow p-2 bg-slate-300' alt="Vwaza Logo"/>
            </div>
        </div>

        <div className='mt-10 mx-20 flex gap-2 items-center flex-col p-10 '>
            <h4 className="md:text-4xl text-lg font-extrabold text-mainColor ">
                My Love Of Building Things
            </h4>
            <p className='text-lg'>
                I can't stress how much I love to build things. Below are some of the products that I have built over
                the years. I omitted some of the products because of other reasons.
            </p>
        </div>

        <div className='mt-10 mx-20 grid grid-cols-3 gap-4   relative p-10 '>
            <div className='shadow flex justify-between p-2 items-center gap-4 flex-col'>
                <h4 className="md:text-4xl text-lg font-extrabold text-mainColor-400 ">
                    Vwaza Multimedia Systems
                </h4>

                <img src="vwaza.png" className='h-[20vh]' alt="Vwaza Logo"/>
                <p className="text-lg">
                    A music streaming platform with African Content.
                </p>
                <p>
                    Status: Active
                </p>
                <span>Founded</span>
            </div>
            <div className='shadow flex justify-between p-2 items-center gap-4 flex-col'>
                <h4 className="md:text-4xl text-lg font-extrabold text-mainColor-400 ">
                    Elior Health Systems
                </h4>

                <img src="elior.png" className='h-[20vh]' alt="Vwaza Logo"/>
                <p className="text-lg">
                    A digital health platform that connected patients to the right care
                </p>
                <p>
                    Status: InActive
                </p>
                <span>Founded</span>
            </div>
            <div className='shadow flex justify-between p-2 items-center gap-4 flex-col'>
                <h4 className="md:text-4xl text-lg font-extrabold text-mainColor-400 ">
                    African Developers Network
                </h4>

                <img src="adn.png" className='h-[20vh]' alt="Vwaza Logo"/>
                <p className="text-lg">
                    A community for African Techies
                </p>
                <p>
                    Status: InActive
                </p>
                <span>Founded</span>
            </div>
            <div className='shadow flex justify-between p-2 items-center gap-4 flex-col'>
                <h4 className="md:text-4xl text-lg font-extrabold text-mainColor-400 ">
                    TECULES
                </h4>

                <img src="tecules.jpg" className='h-[20vh]' alt="Vwaza Logo"/>
                <p className="text-lg">
                    A community for African Techies
                </p>
                <p>
                    Status: InActive
                </p>
                <span>Co-Founded</span>
            </div>
        </div>


    </Wrapper>
}
export default Startups;
