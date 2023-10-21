import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';

const AllProgram = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/api/upcoming')
            .then(res => res.json())
            .then(data => {
                setData(data.reverse())
            })
    }, [])
    return (
        <div className='w-[90%] mx-auto'>
            <Helmet>
                <title>All Program</title>
            </Helmet>

            <div className='flex flex-wrap  gap-x-[16px] mt-[16px] '>
                {
                    data?.map(pgr => (
                        <div key={pgr.id}>
                            <div className="card w-[380px] bg-base-100 shadow-xl mb-[20px]">
                                <figure><img src={pgr?.image} alt="Shoes" /></figure>
                                <div className="card-body ">
                                    <h2 className="card-title">{pgr?.title}!</h2>
                                    <p>{pgr?.description}</p>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllProgram;