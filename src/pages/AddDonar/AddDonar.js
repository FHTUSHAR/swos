import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const AddDonar = () => {

    const notify = () => toast('Successfully Inserted');

    const handleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.name.value
        const address = event.target.address.value.toUpperCase()
        const blood = event.target.group.value.toUpperCase()
        const phone = event.target.phone.value
        const donar = {
            name,
            blood,
            phone,
            address
        }

        fetch('http://localhost:5000/api/postBlood', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(donar)
        })
            .then(res => res.json())
            .then(data => {

                notify()

            })
        console.log(name, address, blood, phone)
    }
    return (
        <div className=' md:px-[100px] mx-auto'>

            <h1 className='text-center text-[18px] mb-[16px] mt-[8px]'><span className='shadow-lg px-[10px] py-[10px]'>Type Donar's Details</span></h1>
            <div className='text-center'>
                <form onSubmit={handleSubmit}>
                    <input type="text" className='input input-bordered input-primary md:w-[330px] w-[292px] h-[36px] mb-[8px] focus:outline-none mt-[16px]' placeholder='Name' name='name' /><br />
                    <input type="text" className='input input-bordered input-primary md:w-[330px] w-[292px] h-[36px] mb-[8px] focus:outline-none' placeholder='Address' name='address' /><br />
                    <input type="text" className='input input-bordered input-primary md:w-[330px] w-[292px] h-[36px] mb-[8px] focus:outline-none' placeholder='Blood group O+' name='group' /><br />
                    <input type="text" className='input input-bordered input-primary md:w-[330px] w-[292px] h-[36px] mb-[8px] focus:outline-none' placeholder='Phone' name='phone' /><br />
                    <input type="submit" className='btn  w-[120px] mt-[16px] mb-[115px]' placeholder='Add Donar' value='Add Donar' />
                </form>
            </div>
            <Toaster
                position="bottom-center"
                reverseOrder={true}
            />
        </div>
    );
};

export default AddDonar;