import Link from "next/link";

const Navbar = () => {
    return <nav className='w-full shadow flex gap-3 justify-between items-centee p-4 flex-row'>
        <h4 className='font-extrabold flex gap-4 justify-between items-center'>
            Joel Fickson
        </h4>


        <div className='flex gap-4 justify-between items-center'>

            <Link href='/'>
                <a className='nav-links'>Home</a>
            </Link>
            <Link href='/'>
                <a className='nav-links'>About</a>
            </Link>
            <Link href='/'>
                <a className='nav-links'>Creative</a>
            </Link>
            <Link href='/'>
                <a className='nav-links'>Home</a>
            </Link>
        </div>
        <Link href='/'>
            <a className='main-button w-32'>Get In Touch</a>
        </Link>

    </nav>

}

export default Navbar
