import React from 'react';
import useMyHook from '../../Hooks/useMyHook';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/firebase.init';

const Registation = () => {
    const [password, handleChangePassword] = useMyHook('');
    const [email, handleChangeEmail] = useMyHook('');
    const submited = (e) => {
        e.preventDefault();
        // console.log(password,email);

        // email,password authencation;
        createUserWithEmailAndPassword(auth, email, password)
            .then(res => {
                console.log(res.user);
            }).catch(error => {
                console.log(error);
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
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registation;