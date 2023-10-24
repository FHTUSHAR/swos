import React, { useContext } from 'react';

import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../features/AuthProvider';
import { Helmet } from 'react-helmet';


const Login = () => {
    const { gettingAdmin, admin } = useContext(AuthContext)

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";



    const handleLogin = (event) => {

        event.preventDefault()
        const form = event.target;
        const name = form.user_name.value;
        const password = form.password.value;


        fetch(`https://swos-server.vercel.app/api/admin/allAdmin?name=${name}&&pass=${password}`)
            .then(res => res.json())
            .then(data => {
                gettingAdmin(data)
                navigate(from, { replace: true });
            })


    }


    return (
        <div>
            <Helmet>
                <title>Login</title>
            </Helmet>
            <div className="">

                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">

                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mt-[2px] xl:mt-[-120px] lg:mt-[-120px]">
                            <form onSubmit={handleLogin}>
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">User Name</span>
                                        </label>
                                        <input type="text" name='user_name' placeholder="user name" className="input input-bordered focus:outline-none" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="password" className="input input-bordered focus:outline-none" />

                                    </div>
                                    <div className="form-control mt-6">
                                        <input className="btn btn-primary" type="submit" placeholder="Login" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Login;