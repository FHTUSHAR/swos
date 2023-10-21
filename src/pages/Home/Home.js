import React from 'react';
import Banner from './Banner/Banner'
import Projects from './Projects/Projects'
import RecentProgram from './RecentProgram/RecentProgram'
import Join from './Join_US/Join_US'
import UpcommingProgram from './UpcommingProgram/UpcommingProgram'
import { Helmet } from 'react-helmet';

const Home = () => {
    return (
        <div className='bg-[#f6f8f8]'>
            <Helmet>
                <title>SWOS</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <Banner></Banner>
            <Projects></Projects>
            <RecentProgram></RecentProgram>
            <Join ></Join>
            <UpcommingProgram></UpcommingProgram>
        </div>
    );
};

export default Home;