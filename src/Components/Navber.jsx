import React from 'react';
import logo from "../../assets/logo.png"
import { Link } from 'react-router';
import github from '../../assets/github.png'

const Navber = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <Link to='/' >Home </Link>
                        <Link to='/allapps'>Apps</Link>
                        <Link>Installation</Link>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-[#975BF0] text-xl">
                    <img className='w-[40px] h-[40px] ' src={logo} alt="" />
                    HERO.IO</Link>
            </div>
            <div className="navbar-center  hidden lg:flex">
                <ul className="menu menu-horizontal gap-4 px-1">
                    <Link to='/' className='text-[#975BF0]' >Home </Link>
                    <Link to='/allapps'>Apps</Link>
                    <Link>Installation</Link>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='https://github.com/sadiaRimi-01' className='btn text-white bg-linear-to-bl from-violet-500 to-fuchsia-500' ><img src={github} alt="" />Contribute</Link>
            </div>
        </div>
    );
};

export default Navber;