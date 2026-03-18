import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { LuEyeOff } from 'react-icons/lu';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router';

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
        const term = e.target.terms.checked
        console.log(email, password,term);

        if(!term){
            setError("please accept terms")
            return;
        }
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
                                {/* Accept our terms and condition */}
                                <div className='mt-2'>
                                    <label className="label">
                                        <input type="checkbox" name='terms' className="checkbox" />
                                        Accept All Conditon!
                                    </label>
                                </div>
                                <button className="btn btn-neutral mt-4">SignUp</button>
                                {/* error message */}
                                {
                                    sucess && <p className='text-2xl font-bold text-green-600'>Successfully SingUp</p>
                                }
                                {
                                    error && <p className='text-2xl font-bold text-red-600'>{error}</p>
                                }
                                <div>
                                    <p className='font-bold text-xl'>Already have an account? please <Link    className='text-blue-700 font-bold text-xl underline' to={'/login'}> LogIn</Link></p>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
