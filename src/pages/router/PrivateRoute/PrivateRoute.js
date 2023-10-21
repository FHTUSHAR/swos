import React, { useContext } from 'react';
// import { TailSpin } from 'react-loader-spinner';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../features/AuthProvider';

const PrivateRoute = ({ children }) => {
    let location = useLocation()
    const navigate = useNavigate();
    const { loading } = useContext(AuthContext)
    const admin = localStorage.getItem("isAdmin")
    if (loading) {
        // return <TailSpin
        //     height="80"
        //     width="80"
        //     color="#4fa94d"
        //     ariaLabel="tail-spin-loading"
        //     radius="1"
        //     wrapperStyle={{}}
        //     wrapperClass=""
        //     visible={true}
        // />
        <p>Loading</p>
    }

    console.log(admin)

    if (admin === 'true') {
        navigate('/')
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>

};

export default PrivateRoute;