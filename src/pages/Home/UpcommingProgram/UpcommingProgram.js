import React, { useEffect, useState } from 'react';
import swos from '../../../assets/image/swos.jpg'


const UpcommingProgram = () => {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/upcoming')
            .then(res => res.json())
            .then(data => {
                setData(data[data.length - 1])
                console.log('successfully inserted')


            })
    }, []);


    console.log(data)

    return (
        <div className='lg:flex  justify-end'>
            <div className='mt-[24px] lg:bg-[#f5edc7] lg:px-[100px] lg:h-[500px] h-auto'>
                <h1 className='text-[24px] text-center mb-[24px] pt-[24px]'><u className='font-bold'>Upcomming Programs</u></h1>
                <div className='lg:flex gap-[140px]'>

                    <div className='lg:w-[60%] w-full lg:flex items-center '>
                        <div className='bg-[#ffffff] p-[25px] rounded-[10px] w-full lg:h-[250px] h-auto'>
                            <div className='flex justify-between'><h1 className='font-semibold text-[18px]'><u>Title:{data?.title}</u></h1>
                                <p><small>{data?.date}</small></p></div>
                            {
                                data ? <p>{data?.description}</p> : <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi voluptate laboriosam placeat obcaecati debitis. Illo delectus atque optio eum fugiat corrupti maiores vero qui blanditiis dicta provident, itaque repellendus amet.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi voluptate laboriosam placeat obcaecati debitis. Illo delectus atque optio eum fugiat corrupti maiores vero qui blanditiis dicta provident, itaque repellendus amet.</p>
                            }

                        </div>
                    </div>
                    <div className='relative'>
                        {
                            data ? <>
                                <img className='lg:w-[300px] w-full h-[300px] relative z-[10] rounded-[16px]' src={data.image} alt="" />
                                <img className=' lg:w-[300px] hidden lg:block h-[300px] absolute top-[85px] right-[80px] rounded-[16px] z-[20]' src={data.image} alt="" />
                            </> :
                                <>
                                    <img className='lg:w-[300px] w-full h-[300px] relative z-[10] rounded-[16px]' src={swos} alt="" />
                                    <img className='lg:w-[300px] hidden lg:block h-[300px] absolute top-[85px] right-[80px] rounded-[16px] z-[20]' src={swos} alt="" />
                                </>
                        }

                    </div>
                </div>
            </div>

        </div>
    );
};

export default UpcommingProgram;