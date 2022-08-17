import Link from "next/link";

const Navbar = () => {
    return <nav className='bg-amber-200 w-full shadow'>
        <h4>
            Joel Fickson
        </h4>


        <div className='flex'>


            <Link href='/'>
                <a className='text-blue-500'>Home</a>
            </Link>
            <Link href='/'>
                <a className='text-blue-500'>About</a>
            </Link>
            <Link href='/'>
                <a className='text-blue-500'>Creative</a>
            </Link>
            <Link href='/'>
                <a className='text-blue-500'>Home</a>
            </Link>

        </div>
    </nav>

}

export default Navbar
