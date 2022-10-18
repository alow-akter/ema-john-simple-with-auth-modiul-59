import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './SingUp.css'
const SingUp = () => {
    const [error, setError] = useState(null);
    const { createUser } = useContext(AuthContext)

    const handleSubmit = (event) => {
        event.preventDefault()

        const from = event.target;

        const email = from.email.value;

        const password = from.password.value;

        const confirm = from.confirm.value;
        if (password.length < 6) {
            setError('password should be 6 character or more ')
            return
        }

        if (password !== confirm) {
            setError('Your Password did not match ')
            return
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                from.reset()
            })
            .catch(error => {
                console.error('error', error)
            })



    }

    return (
        <div className='from-container'>
            <h2 className='from-tittle'>Sing Up</h2>
            <form onSubmit={handleSubmit}>
                <div className='from-control'>
                    <label htmlFor='email'>Email</label>
                    <input type="email" name="email" required />
                </div>

                <div className='from-control'>
                    <label htmlFor='password'>Password</label>
                    <input type="password" name="password" required />
                </div>

                <div className='from-control'>
                    <label htmlFor='confirm'> Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>

                <input className='btn-submit' type="submit" value="Sing Up" />
            </form>
            <p>Already Have an Account <Link to='/login'>Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SingUp;