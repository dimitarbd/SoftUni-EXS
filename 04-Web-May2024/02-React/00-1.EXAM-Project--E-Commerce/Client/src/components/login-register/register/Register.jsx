import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../../hooks/useAuth';
import { useForm } from '../../../hooks/useForm';
import { useState } from 'react';


export default function Register() {
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const initialValues = { email: '', password: '', repass: '' };

    const registerHandler = async (values) => {
        if (values.password !== values.repass) {
            return setError('Password missmatch!');
        }


        try {
            await register(values.email, values.password);
            navigate('/');
        } catch (err) {
            setError(err.message);
        }
    };


    const register = useRegister();


    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, registerHandler);

    return (
        <div id="signup-form">
            <form>
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={changeHandler}
                    placeholder="Enter your email"
                />
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                    placeholder="Create password"
                />
                <input
                    type="password"
                    name="repass"
                    value={values.repass}
                    onChange={changeHandler}
                    placeholder="Repeat password"
                />

                {error && (
                    <p>
                        <span style={{ fontSize: '18px', color: 'red' }}>{error.message}</span>
                    </p>
                )}

                <button type="button" className="btn signup" onClick={submitHandler}>create account</button>
                <p>Clicking <strong>create account</strong> means that you are agree to our <a href="#">terms of services</a>.</p>
                <hr />

            </form>
        </div>
    );
}