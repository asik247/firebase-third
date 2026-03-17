import React, { useState } from 'react';
import useMyHook from '../../Hooks/useMyHook';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const Registation = () => {
    const [password, handleChangePassword] = useMyHook('');
    const [email, handleChangeEmail] = useMyHook('');
    // Error and success sate her now;
    const [error,setError] = useState('');
    const [success,setSuccess] = useState(false);
    const submited = (e) => {
        e.preventDefault();
        // console.log(password,email);
        // reset error and successfully message;
        setError('')
        setSuccess(false)
        // validation before cal firbase;
        if(!email){
            setError('Email dite hobe');
            return;
        }
        if(!password){
            setError('Passowrd dite hobe')
            return;
        }
        // email,password authencation;
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user);
                setSuccess(true)
            }).catch(error => {
                console.log('error message:',error.message);
                setError(error.message)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center   w-[400px] mx-auto">
                    <h1 className="text-5xl font-bold mb-4">Registation now!</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        {/* form code start here */}
                        <form onSubmit={submited}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" value={email} onChange={handleChangeEmail} className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" value={password} onChange={handleChangePassword} className="input" placeholder="Password" />

                                <button className="btn btn-neutral mt-4">Registation</button>
                                {
                                    success && <p className='text-green-500 font-bold text-2xl'>Authencation Successfully</p>
                                }
                                {
                                    error && <p className='text-red-600 font-bold text-2xl'>{error}</p>
                                }
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registation;