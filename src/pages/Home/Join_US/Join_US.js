import React from 'react';
import donation from '../../../assets/image/donation.jpeg'
import voluntier from '../../../assets/image/volanteer.png'
import sponsor from '../../../assets/image/sponsor.jpeg'


const Join_US = (props) => {

    console.log(props)
    // useEffect(() => {
    //     const getData = async () => {
    //         const query = await fetch('https://jsonplaceholder.typicode.com/posts')
    //         const data = query.json()
    //         console.log(data)
    //     }
    //     getData()
    // }, [])

    return (
        <div>

            <div className='mt-[24px] lg:px-[100px] md:px-[70px]'>
                <h1 className='text-[24px] text-center mb-[24px] '><u className='font-bold'> Join Us</u></h1>
                <div className='flex gap-[40px] flex-wrap'>
                    <div className="card w-full md:w-[350px]  bg-base-100 shadow-xl">
                        <figure> <figure><img className='lg:w-[300px] w-full' src={donation} alt="images" /></figure></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Donation
                            </h2>
                            <p>Donate here sothat we can work for humanity.</p>

                        </div>
                    </div>
                    <div className="card w-full md:w-[350px] bg-base-100 shadow-xl">
                        <figure> <figure><img className='w-[300px]' src={voluntier} alt="Shoes" /></figure></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Voluntier
                            </h2>
                            <p>Voluntier here sothat you can work with us.</p>

                        </div>
                    </div>
                    <div className="card w-full md:w-[350px] bg-base-100 shadow-xl">
                        <figure> <figure><img className='w-[300px]' src={sponsor} alt="Shoes" /></figure></figure>
                        <div className="card-body">
                            <h2 className="card-title">
                                Sponsor!

                            </h2>
                            <p>Sponsor us sothat we can help to the humanity and continue our work.</p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Join_US;