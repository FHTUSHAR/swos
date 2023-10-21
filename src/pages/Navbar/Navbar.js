import React, { useContext } from 'react';
import logo from '../../assets/image/swos.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../features/AuthProvider';


const Navbar = () => {
    const admin = localStorage.getItem("isAdmin")
    const navigate = useNavigate();
    const handleLogOut = () => {
        localStorage.setItem("isAdmin", "false")
        navigate("/");
    }
    return (

        <div className=''>
            <div className="navbar bg-[#f5edc7] text-center md:px-[100px] px-[16px]">
                <div className="md:flex-1">
                    <img className='w-[60px] h-[60px] rounded-[30px] hidden md:block sm:block' src={logo} alt='Logo' />
                    <h1 className='hidden px-2 lg:block'>We Care</h1>
                    <h1 className='ml-[-37px] hidden lg:block mt-[37px]'>We Serve</h1>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 text-[10px] sm:text-[14px]">
                        <li> <Link to='/'>Home</Link></li>
                        <li> <Link to='/abouts'>About</Link></li>
                        <li> <Link to='/allprogram'>All Programs</Link></li>
                        {
                            admin === 'true' && <>
                                <li> <Link to='/dashboard'>DashBoard</Link></li>
                                <li onClick={handleLogOut} className='mt-[7px] cursor-pointer hover:bg-[#e29393] px-[6px] rounded-[4px]'>Log Out</li>
                            </>}
                        {

                            admin === 'false' &&
                            <li> <Link to='/login'>Login</Link></li>

                        }


                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;