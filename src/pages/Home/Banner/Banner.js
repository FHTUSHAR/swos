import React, { useEffect, useState } from 'react';
import banner1 from '../../../assets/image/Brown Modern Charity Care Banner.png'
const Banner = () => {
    const [banner, setBanner] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/api/banner/banner')
            .then(res => res.json())
            .then(data => {
                setBanner(data.image)
            })
    }, [])
    console.log(banner)


    return (
        <div>
            {
                banner ? <>
                    <img src={banner} alt='banner' className='w-full' />
                </> :
                    <>
                        <img src={banner1} alt='banner' />
                    </>
            }
        </div>
    );
};

export default Banner;