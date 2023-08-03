import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white font-bold text-xl">
                    Your Website
                </div>
                <div className="flex space-x-4 md:hidden">
                    <button className="text-white hover:bg-gray-700 px-3 py-2 rounded focus:outline-none">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <div className="hidden md:flex space-x-4">
                    <Link href="/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
                        Home
                    </Link>
                    <Link href="/about" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
                        About
                    </Link>
                    <Link href="/contact" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
                        Contact
                    </Link>
                    <Link href="/gallery" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
                        Gallery
                    </Link>
                    <Link href="/table" className="text-white hover:bg-gray-700 px-3 py-2 rounded">
                        Table
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
