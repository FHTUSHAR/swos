import React, { useEffect, useState } from 'react';
import swos from '../../../assets/image/swos.jpg'

const RecentProgram = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://swos-server.vercel.app/api/upcoming')
            .then(res => res.json())
            .then(data => {
                setData(data[data.length - 2])
                console.log('successfully inserted')


            })
    }, []);
    return (
        <div className='w-full mx-auto'>
            <div className='mt-[24px] lg:bg-[#f5edc7] lg:px-[100px] lg:h-[500px]'>
                <h1 className='text-[24px] text-center mb-[24px] pt-[24px]'><u className='font-bold'>Recent Programs</u></h1>



                <div ke className='lg:flex gap-[140px]'>
                    <div className='relative'>
                        {
                            data ? <>
                                <img className='lg:w-[300px] w-full h-[300px] relative z-[10] rounded-[16px]' src={data?.image} height={100} width={100} alt="" />
                                <img className='w-[300px] h-[300px] absolute top-[85px] hidden lg:block left-[80px] rounded-[16px] z-[2]' src={data?.image} height={100} width={100} alt="" />
                            </> :
                                <>
                                    <img className='lg:w-[300px] w-full h-[300px] relative z-[10] rounded-[16px]' src={swos} height={100} width={100} alt="" />
                                    <img className='w-[300px] h-[300px] absolute top-[85px] hidden lg:block left-[80px] rounded-[16px] z-[2]' src={swos} height={100} width={100} alt="" />
                                </>
                        }
                    </div>
                    <div className='lg:w-[60%] w-full flex items-center '>
                        <div className='bg-[#ffffff] p-[25px] rounded-[10px] w-full lg:h-[250px] h-auto'>
                            <div className='flex justify-between'><h1 className='font-semibold text-[18px]'><u>Title:{data?.title}</u></h1>
                                <p><small>{data?.date}</small></p></div>
                            {
                                data ? <p >{data.description}</p> :
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi voluptate laboriosam placeat obcaecati debitis. Illo delectus atque optio eum fugiat corrupti maiores vero qui blanditiis dicta provident, itaque repellendus amet.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi voluptate laboriosam placeat obcaecati debitis. Illo delectus atque optio eum fugiat corrupti maiores vero qui blanditiis dicta provident, itaque repellendus amet.</p>
                            }

                        </div>
                    </div>
                </div>



            </div>
        </div>
    );
};

export default RecentProgram;