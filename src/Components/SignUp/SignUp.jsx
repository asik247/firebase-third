import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { LuEyeOff } from 'react-icons/lu';
import { FaEye } from 'react-icons/fa';

const SignUp = () => {
    // error state code here now;
    const [error, setError] = useState('');
    const [sucess, setSucess] = useState(false);
    const [showEye, setShowEye] = useState(false)
    const handleSignUp = (e) => {
        e.preventDefault();
        // Reset;
        setError('')
        setSucess(false)
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user);
                setSucess(res.user)
            }).catch(error => {
                console.log(error);
                setError(error.message)
            })

    }

    // show eye btn;
    const handleShowEye = (e) => {
        e.preventDefault();
        setShowEye(!showEye);
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold mb-4">SignUp now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignUp}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />

                                <div className='relative'>
                                    <label className="label">Password</label>
                                    <input type={showEye ? 'text' : 'password'} name='password' className="input" placeholder="Password" />
                                    <button onClick={handleShowEye} className='btn btn-ghost absolute right-0.5'>
                                        {showEye ? <LuEyeOff /> : <FaEye />}
                                    </button>
                                </div>

                                <button className="btn btn-neutral mt-4">SignUp</button>
                                {/* error message */}
                                {
                                    sucess && <p className='text-2xl font-bold text-green-600'>Successfully SingUp</p>
                                }
                                {
                                    error && <p className='text-2xl font-bold text-red-600'>{error}</p>
                                }
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
