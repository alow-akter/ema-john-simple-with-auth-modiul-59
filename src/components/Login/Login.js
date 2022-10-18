import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Login.css';


const Login = () => {
    const [error, setError] = useState(null);

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault()
        const from = event.target;
        const email = from.email.value;
        const password = from.password.value;
        // console.log(email, password)

        if (password.length < 6) {
            setError('password should be 6 character or more ')
            return
        }

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                from.reset()
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error('error', error)
            })
    }

    return (
        <div className='from-container'>
            <h2 className='from-tittle'> Login </h2>
            <form onSubmit={handleSubmit}>
                <div className='from-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" required />
                </div>

                <div className='from-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to ema john <Link to='/singup'>Create new account </Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default Login;