import React from 'react';
import useMyHook2 from '../../Hooks/useMyHook2';

const SignUp2 = () => {
    // Hook code start here;
    const [emailValue, handleEmailChange] = useMyHook2('');
    const [passwordValue, handlePasswordChange] = useMyHook2('');
    const handleSubmitBtn = (e) => {
        e.preventDefault();
        console.log(emailValue, passwordValue);
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp2;