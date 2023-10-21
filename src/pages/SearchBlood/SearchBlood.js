import React, { useEffect, useState } from 'react';

const SearchBlood = () => {
    const [bloodData, setBloodData] = useState()
    const [selectedBlood, setSelectedBlood] = useState()
    useEffect(() => {
        fetch('http://localhost:5000/api/getBlood/allBlood')
            .then(res => res.json())
            .then(data => {
                setBloodData(data.data)
            })
    }, [])
    const handleBlood = (e) => {
        e.preventDefault()
        const group = e.target.group.value.toUpperCase()
        const blood = bloodData?.filter(data => data.blood === group || data.address === group)
        setSelectedBlood(blood)
    }
    return (
        <div className=''>
            <h1 className='text-[#923131] hidden md:block text-[24px]' >Blood Search</h1>
            <div className=''>
                <form className='flex justify-center ' onSubmit={handleBlood}>
                    <input type="text" className='border border-[#923131] py-[4px] px-[8px]' name='group' placeholder=' Search Blood Here (O+)' />
                    <button type='submit' className='border border-[#923131] py-[4px] px-[8px] ml-[4px]'> Search</button>
                </form>
            </div>
            <div className='flex ml-[16px] justify-center'>
                {
                    selectedBlood ? <>
                        <div className='mt-[24px]'>
                            {
                                selectedBlood?.map(bdata => (
                                    <div key={bdata.id}>
                                        <div className=' border-[#923131] p-[16px] w-[311px] lg:w-[350px] flex items-center gap-[16px] mb-[16px] shadow-lg shadow-[#923131]'>
                                            <div><h1 className='flex  text-[32px] text-[#ce3b3b]'>{bdata.blood}</h1></div>
                                            <div>
                                                <h1>Name: {bdata.name}</h1>
                                                <h1>Address: {bdata.address}</h1>
                                                <h1>Address: {bdata.phone}</h1>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div></>
                        :
                        <>
                            <div className='mt-[24px]'>
                                {
                                    bloodData?.map(bdata => (
                                        <div key={bdata.id}>
                                            <div className=' border-[#923131] p-[16px] w-[311px] lg:w-[350px] flex items-center gap-[16px] mb-[16px] shadow-lg shadow-[#923131]'>
                                                <div><h1 className='flex  text-[32px] text-[#ce3b3b]'>{bdata.blood}</h1></div>
                                                <div>
                                                    <h1>Name: {bdata.name}</h1>
                                                    <h1>Address: {bdata.address}</h1>
                                                    <h1>Address: {bdata.phone}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div></>
                }
            </div>
        </div>
    );
};

export default SearchBlood;