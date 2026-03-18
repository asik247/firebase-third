import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';

const Login = () => {
    // Error and successfully state here now;
    const [error,setError] = useState('')
    const [success,setSuccess] = useState(false);
    const handleLogin = (e)=>{
        e.preventDefault();
        setError('')
        setSuccess(false)
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password);
        signInWithEmailAndPassword(auth , email,password)
        .then(res=>{
            console.log(res.user);
            setSuccess(res.user)
            if(!res.user.emailVerified){
                alert("no email validation")
            }
        }).catch(error=>{
            console.log(error.message);
            setError(error.message)
        })

    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleLogin}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" className="input" name='email' placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" className="input" name='password' placeholder="Password" />
                                    <div><a className="link link-hover">Forgot password?</a></div>
                                    <button className="btn btn-neutral mt-4">Login</button>
                                </fieldset>
                                {
                                    success && <p className='text-green-600 font-bold text-xl'>Successfully SignIn</p>
                                }
                                {
                                    error && <p className='text-red-600 font-bold text-xl'>{error}</p>
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;