import React, { useContext, useState } from 'react';
import AddDonar from '../AddDonar/AddDonar';
import AddUpcomingProgram from '../AddUpComingProgram/AddUpComingProgram';
import SearchBlood from '../SearchBlood/SearchBlood';
import { AuthContext } from '../features/AuthProvider';
import AddBanner from '../AddBanner/AddBanner';
import { Helmet } from 'react-helmet';

const Dashboard = () => {
    const { admin } = useContext(AuthContext)
    const [dep, setDep] = useState()
    const bloodSearch = <>
        <SearchBlood></SearchBlood>
    </>
    const addDonar = <>
        <AddDonar></AddDonar>
    </>
    const upcomming = <>
        <AddUpcomingProgram></AddUpcomingProgram>
    </>
    const addBanner = <>
        <AddBanner></AddBanner></>
    console.log(admin)
    return (
        <div className='md:flex'>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className='h-[100px] md:h-[450px] md:w-[25%] w-full md:bg-[#f5edc7] text-center flex md:justify-center'>

                <ul className='mb-[300px] pt-[20px] flex flex-wrap gap-4 px-[20px] md:block'>
                    <li onClick={() => setDep('bsearch')} className='border md:mb-[16px] border-red-900 md:h-[45px] md:text-[16px]  md:px-[16px] md:py-[10px] w-[90px] text-[13px] h-[24px] md:w-[180px] hover:bg-[#ac373d] hover:text-[white] hover:cursor-pointer'>Blood Search</li>
                    <li onClick={() => setDep('adddonar')} className='border md:mb-[16px] border-red-900 md:h-[45px] md:text-[16px] text-[13px] h-[24px] md:px-[16px] w-[90px] md:py-[10px] md:w-[180px] radius-[11px] hover:bg-[#ac373d] hover:text-[white] hover:cursor-pointer'>Add Donar</li>
                    <li onClick={() => setDep('upcoming')} className='border md:mb-[16px] border-red-900 md:h-[45px] md:px-[16px] md:text-[16px] md:py-[10px] md:w-[180px] w-[121px] h-[24px] text-[13px] radius-[11px] hover:bg-[#ac373d] hover:text-[white] hover:cursor-pointer'>Upcoming Program</li>
                    <li onClick={() => setDep('addbanner')} className='border border-red-900 md:h-[45px] md:px-[16px] md:text-[16px] md:py-[10px] md:w-[180px] w-[121px] h-[24px] text-[13px] radius-[11px] hover:bg-[#ac373d] hover:text-[white] hover:cursor-pointer'>Add Banner</li>
                </ul>
                {/* <ul className='mb-[300px] pt-[20px]'>
                    <Link to={'/addDonar'}> <li className='border mb-[16px] border-red-900 md:h-[45px] px-[16px] py-[10px] w-[180px] hover:bg-[#ac373d] hover:text-[white]'>Blood Search</li></Link>
                    <Link to={'/addDonar'}> <li className='border mb-[16px] border-red-900 md:h-[45px] px-[16px] py-[10px] w-[180px] radius-[11px] hover:bg-[#ac373d] hover:text-[white]'>Add Donar</li></Link>
                    <Link to={'/addUpComingProgram'}>  <li className='border border-red-900 md:h-[45px] px-[16px] py-[10px] w-[180px] radius-[11px] hover:bg-[#ac373d] hover:text-[white]'>Upcoming Program</li></Link>
                </ul> */}

            </div>
            <div className='ml-[16px] w-[75%]  mx-auto'>
                <div className=''>
                    {
                        dep === 'bsearch' && bloodSearch
                    }
                </div>
                <div className=''>
                    {
                        dep === 'adddonar' && addDonar
                    }
                </div>
                <div>
                    {
                        dep === 'upcoming' && upcomming
                    }
                </div>
                <div>
                    {
                        dep === 'addbanner' && addBanner
                    }
                </div>
                <div>
                    {
                        !dep && bloodSearch
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;