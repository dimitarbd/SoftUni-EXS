
import Login from './login/Login';
import Register from './register/Register';


export default function LoginRegister() {


    function toggleSignup() {
        document.getElementById('login-toggle').style.backgroundColor = '#fff';
        document.getElementById('login-toggle').style.color = '#222';
        document.getElementById('signup-toggle').style.backgroundColor = '#57b846';
        document.getElementById('signup-toggle').style.color = '#fff';
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
    }


    function toggleLogin() {
        document.getElementById('login-toggle').style.backgroundColor = '#57B846';
        document.getElementById('login-toggle').style.color = '#fff';
        document.getElementById('signup-toggle').style.backgroundColor = '#fff';
        document.getElementById('signup-toggle').style.color = '#222';
        document.getElementById('signup-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    }


    return (
        <div className="form-modal" >

            <div className="form-toggle">
                <button id="login-toggle" onClick={toggleLogin}>log in</button>
                <button id="signup-toggle" onClick={toggleSignup}>sign up</button>
            </div>
            
            <Login />
            <Register />

        </div>
    );
}