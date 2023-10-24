import React, { useEffect, useState } from 'react';
import banner2 from '../../../assets/image/Brown Modern Charity Care Banner.png'
const Banner = () => {
    const [banner, setBanner] = useState([])

    useEffect(() => {
        fetch('https://swos-server.vercel.app/api/banner/banner')
            .then(res => res.json())
            .then(data => {
                setBanner(data.image)
            })
    }, [])
    console.log(banner)


    return (
        <div>
            {
                banner && <img src={banner} alt='banners' className='w-full' />

            }
            {
                !banner && <img src={banner2} alt='banner' className='w-full' />
            }
        </div>
    );
};

export default Banner;