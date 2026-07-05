import { useLogin } from '../../../hooks/useAuth';
import { useForm } from '../../../hooks/useForm';
import { useState } from 'react';

export default function Login() {
    const [error, setError] = useState('');
    const login = useLogin();

    const initialValues = { email: '', password: '' };


    const loginHandler = async ({ email, password }) => {
        try {
            await login(email, password);
            window.location.href = '/';
        } catch (err) {
            setError(err);
            console.log(err.message);
        }
    };

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValues, loginHandler);

    return (
        <div id="login-form">
            <form >
                <input
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={changeHandler}
                    placeholder="Enter email"
                />
                <input
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={changeHandler}
                    placeholder="Enter password"
                />
                {error && (
                    <p>
                        <span style={{ fontSize: '18px', color: 'red' }}>{error.message}</span>
                    </p>
                )}
                <button type="button" className="btn login" onClick={submitHandler}>login</button>

                <hr />

            </form>
        </div>

    );
}