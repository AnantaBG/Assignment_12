
const Navbar = () => {
    const NavLinks = <>
                <li><a>Item 1</a></li>
                <li>
                <a>Item 2</a>
                </li>
                <li><a>Item 3</a></li>
    </>
    return (
        <div className="navbar max-w-screen-xl fixed z-10 bg-opacity-40  bg-black text-white">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-gray-600 rounded-xl z-[1] mt-3 w-52 p-2 ">
                    <li className="">
                    {NavLinks}
                    </li>
                   
            </ul>
            </div>
            <div className="flex flex-col">
            <a className="btn btn-ghost text-4xl font-extrabold ">Bistro Boss</a>
            <a className="btn btn-ghost text-4xl font-extralight font-mono">Restaurant</a>
            </div>
            
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu text-xl menu-horizontal px-1">
            {NavLinks}
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Button</a>
        </div>
        </div>
    );
};

export default Navbar;