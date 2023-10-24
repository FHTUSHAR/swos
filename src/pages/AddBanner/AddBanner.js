import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';
import img from '../../assets/image/icon.jpg'
import axios from 'axios';

const AddBanner = () => {
    const notify = () => toast('Successfully Inserted');
    const [image, setImage] = useState(null);
    const [showimage, setShowImage] = useState(null);



    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        console.log(selectedImage)
        setImage(selectedImage);
        setShowImage(URL.createObjectURL(e.target.files[0]))
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            image
        }

        console.log(formData)
        try {
            await axios.post('https://swos-server.vercel.app/api/banner/postBanner', formData, {
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
                        <div className='w-[70%] mb-[16px]'>
                            <h1>Upload Image</h1>
                            <div className='h-[150px] w-[150px]  mb-[16px]'>
                                {
                                    image ? <img src={showimage} alt="" /> : <img src={img} alt="" />
                                }
                            </div>

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

export default AddBanner;