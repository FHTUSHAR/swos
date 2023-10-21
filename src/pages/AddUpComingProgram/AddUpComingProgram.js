import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { Form } from 'react-router-dom';
const AddUpComingProgram = () => {

    const notify = () => toast('Successfully Inserted');

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);

    const handleNameChange = (e) => {
        console.log(e.target.value)
        setName(e.target.value);

    };

    const handleDescriptionChange = (e) => {
        console.log(e.target.value)
        setDescription(e.target.value);
    };

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        console.log(selectedImage)
        setImage(selectedImage);
    };





    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, description, image)
        const formData = {
            name,
            description,
            image
        }


        try {
            await axios.post('http://localhost:5000/api/upcoming/postUpcomingProgram', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });


        } catch (error) {
            console.error('Error sending data and image:', error);
        }
    };



    return (
        <div className='lg:px-[100px] mx-auto'>
            <div className='  '>
                <div className=' mx-auto'>

                    <form onSubmit={handleSubmit}>

                        <div>
                            <h1>Title</h1>
                            <input type="text" name="title" value={name} onChange={handleNameChange} placeholder="Type here" className="focus:outline-none input input-bordered input-accent h-[40px] mb-[16px] w-[292px] md:w-[350px]" />
                        </div>
                        <div className='w-[525px] mb-[16px]'>
                            <h1>Description</h1>
                            <textarea name="description" value={description} onChange={handleDescriptionChange} className=" focus:outline-none textarea textarea-accent w-[292px] md:w-[70%] h-[125px]" placeholder="Bio"></textarea>
                        </div>
                        <div className='w-[70%] mb-[16px]'>
                            <h1>Upload Image</h1>

                            <input type="file" accept="image/*" onChange={handleImageChange} className=" focus:outline-none file-input file-input-bordered file-input-info w-full max-w-xs" />
                        </div>
                        <div className="form-control mt-4  w-[185px] mb-[16px]">
                            <input onClick={notify} className="btn btn-primary" type="submit" placeholder="Login" />
                        </div>

                    </form>
                </div>
            </div>
            <Toaster
                position="bottom-center"
                reverseOrder={true}
            />

        </div>
    );
};

export default AddUpComingProgram;