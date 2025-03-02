import logo from '../../assets/logos/mhm.png';
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a href='/'>Home</a></li>
                        <li><a href='/#about'>About</a></li>
                        <li><a href='/#glimpses'>Glimpses</a></li>
                        <li><a href='/#faq'>FAQ</a></li>
                        <li><a href='/#footer'>Contact</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl"><img src={logo} className='w-28' /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a href='/'>Home</a></li>
                    <li><a href='/#about'>About</a></li>
                    <li><a href='/#glimpses'>Glimpses</a></li>
                    <li><a href='/#faq'>FAQ</a></li>
                    <li><a href='/#footer'>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn btn-diabled" href='/#get-ticket'>
                    <p className='text-xs'>
                        Sold Out!
                    </p>
                </a>
            </div>
        </div>
    )
}

export default Navbar;