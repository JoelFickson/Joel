import Wrapper from "../../components/Wrapper";

const Contact = () => {

    return <Wrapper>

        <div className="bg-slate-400 flex flex-col gap-4 justify-center items-center" style={{
            backgroundImage: `linear-gradient(to bottom, rgba(6,47,100, 0.04), rgba(6,47,100, 1)),  url(contact.jpg)`,
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


    </Wrapper>
}

export default Contact
