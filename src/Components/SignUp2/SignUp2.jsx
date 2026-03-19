import React, { useState } from 'react';
// hook2 import code;
import useMyHook2 from '../../Hooks/useMyHook2';
// create user firebase import;
import { createUserWithEmailAndPassword } from "firebase/auth";
// authe import;
import { auth } from '../../firebase/firebase.init';


const SignUp2 = () => {
    // Hook code start here;
    const [emailValue, handleEmailChange] = useMyHook2('');
    const [passwordValue, handlePasswordChange] = useMyHook2('');
    // Error state + Success Message state here;
    const [error,setError] = useState('');
    const [sucess,setSucess] = useState(false);
    // submite btn here now;
    const handleSubmitBtn = (e) => {
        e.preventDefault();
        // console.log(emailValue, passwordValue);
        // Reset all message;
        setSucess(false);
        setError('')
        // create user code here;
        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then(res => {
                console.log(res.user);
                setSucess(res.user)
            })
            .catch(error => {
                console.log(error.message);
                setError(error.message)
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold">SignUp2 now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmitBtn}>
                                <fieldset className="fieldset">
                                    {/* Email input field */}
                                    <label className="label">Email</label>
                                    <input type="email" value={emailValue} onChange={handleEmailChange} className="input" placeholder="Email" />
                                    {/* Password input field */}
                                    <label className="label">Password</label>
                                    <input type="password" value={passwordValue} onChange={handlePasswordChange} className="input" placeholder="Password" />

                                    <button className="btn btn-neutral mt-4">SingUP2</button>
                                </fieldset>

                                {/* Error and success message show code here now */}
                                {sucess && <p className='text-green-600 text-xl'>Sucessfully Account Create!</p>}

                                {error && <p className='text-red-600 text-xl'>{error}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp2;