import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { useRegister } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

const initialValues = {
    email: '',
    password: '',
    repassword: ''
};

export default function Register() {
    const [error, setError] = useState('');
    const register = useRegister();
    const navigate = useNavigate();

    const registerHandler = async ({ email, password, repassword }) => {
        if (password !== repassword) {
            setError('Passwords do not match!');
            return;
        }
        try {
            await register(email, password);
            navigate('/');
        } catch (err) {
            setError(err.message);
            return;
        }
    }

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(initialValues, registerHandler);

    return (
        <>
            {/* <!-- Begin Uren's Breadcrumb Area --> */}
            <div className="breadcrumb-area">
                <div className="container">
                    <div className="breadcrumb-content">
                        <h2>Other</h2>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li className="active">Login & Register</li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* <!-- Uren's Breadcrumb Area End Here --> */}
            {/* <!-- Begin Uren's Login Register Area --> */}
            <div className="uren-login-register_area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                            <form action="#" onSubmit={submitHandler} >
                                <div className="login-form">
                                    <h4 className="login-title">Register</h4>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <label>Email Address*</label>
                                            <input
                                                type="email"
                                                placeholder="Email Address"
                                                name="email"
                                                value={values.email}
                                                onChange={changeHandler}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Password</label>
                                            <input
                                                type="password"
                                                placeholder="Password"
                                                name="password"
                                                value={values.password}
                                                onChange={changeHandler}
                                            />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Confirm Password</label>
                                            <input
                                                type="password"
                                                placeholder="Confirm Password"
                                                name="repassword"
                                                value={values.repassword}
                                                onChange={changeHandler}
                                            />
                                        </div>
                                        {error && <div className="col-12">
                                            <p style={{ color: 'red' }}>{error}</p>
                                        </div>}
                                            <div className="col-12">
                                            <button className="uren-register_btn">Register</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Uren's Login Register Area  End Here --> */}
        </>
    );
}