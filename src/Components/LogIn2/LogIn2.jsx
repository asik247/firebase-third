import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';
import { auth } from '../../firebase/firebase.init';
import { NavLink } from 'react-router';

const LogIn2 = () => {
    const emailRef = useRef(null);
    const [showUser,setShowUser] = useState("");
    // LogIn form submit handler here;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("logIn form submit");
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        // SingIn in code here;
        signInWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user);
                setShowUser(res.user)
                if (!res.user.emailVerified) {
                    alert("Not verify Email")
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    // Forgot Pasword handler code here;
    const forgotPasswordHandler = (e) => {
        e.preventDefault();
        console.log("clicked forgot passowrd", emailRef.current.value);
        const email = emailRef.current.value
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("Email Cheacked and password Reset!")
            })
    }
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login2 now!</h1>

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <fieldset className="fieldset">
                                    <label className="label">Email</label>
                                    <input type="email" name='email' className="input" ref={emailRef} placeholder="Email" />
                                    <label className="label">Password</label>
                                    <input type="password" name='password' className="input" placeholder="Password" />

                                    <div onClick={forgotPasswordHandler}>
                                        <a className="link link-hover">Forgot password?</a>

                                    </div>

                                    <button className="btn btn-neutral mt-4">Login2</button>
                                </fieldset>
                            </form>
                            <div>

                                <p className='text-sm'>
                                    No Account Create ? please
                                    <NavLink to={'/signUp2'} className={'text-blue-500 underline text-[16px] font-extrabold'}> SignUP </NavLink>

                                </p>
                            </div>
                            <div>
                                {showUser && <div>
                                    <h1>{showUser.displayName}</h1>
                                    <img src={showUser.photoURL} alt="" />
                              </div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn2;