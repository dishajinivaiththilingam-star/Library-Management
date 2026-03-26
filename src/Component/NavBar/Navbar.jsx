import React from 'react'



const Navbar = () => {
    return (
        <div>
            <nav className="bg-transparent text-black px-6 py-4 shadow-md">
                <div className="flex justify-between items-center">

                    {/* Logo / Title */}
                    <h1 className="text-xl font-bold">Library MS</h1>

                    {/* Menu */}
                    <ul className="flex space-x-6">
                        <a href="#" className="hover:text-blue-500 cursor-pointer">Home</a>
                        <a href="#" className="hover:text-blue-500 cursor-pointer">Information</a>
                        <a href="#" className="hover:text-blue-500 cursor-pointer">Book List</a>
                        <a href="#" className="hover:text-blue-500 cursor-pointer">New Books</a>
                        <a href="#" className="hover:text-blue-500 cursor-pointer">Donated Books</a>
                        {/* <li className="hover:text-blue-500 cursor-pointer">Home</li> */}
                        {/* <li className="hover:text-blue-500 cursor-pointer">Information</li> */}
                        {/* <li className="hover:text-blue-500 cursor-pointer">Book List</li> */}
                        {/* <li className="hover:text-blue-500 cursor-pointer">New Books</li> */}
                        {/* <li className="hover:text-blue-500 cursor-pointer">Donated Books</li> */}
                    </ul>

                    {/* Login Button */}
                    <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-200">
                        Login
                    </button>

                </div>
            </nav>

        </div>
    )
}

export default Navbar
