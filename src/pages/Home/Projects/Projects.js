import React from 'react';
import swos from '../../../assets/image/swos.jpg'


const Projects = () => {

    const datas = [
        {
            id: 1,
            img: swos,
            program: 'Manobik Siadpur'
        },
        {
            id: 2,
            img: swos,
            program: 'Chatro Kollan'

        },
        {
            id: 3,
            img: swos,
            program: 'Blood Donation'
        },
        {
            id: 4,
            img: swos,
            program: 'Nari Kollan'
        },
        {
            id: 5,
            img: swos,
            program: 'ICT'
        },
        {
            id: 6,
            img: swos,
            program: 'Potho Sishu Bivag'
        },



    ]
    return (
        <div className='mt-[24px]'>
            <h1 className='text-[24px] text-center'><u className='font-bold'>Programs</u></h1>
            <div className='flex flex-wrap gap-[34px] md:px-[30px]  lg:px-[100px] mt-[24px]'>
                {
                    datas.map(data => {
                        return (
                            <div key={data.id} className="card lg:w-[360px] md:w-[360px] w-full  bg-base-100 shadow-xl relative">
                                <figure><img className='w-[300px] h-[300px]' src={data.img} alt="" /></figure>
                                <div className={`absolute md:w-[360px] w-full  text-[#f1c40f]  h-[300px] opacity-[85%] rounded-[14px] bg-[#333232]`}>
                                    <h1 className='flex justify-center items-center h-[300px] text-[30px]'>{data.program}</h1>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Projects;