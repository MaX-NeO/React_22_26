import React from 'react'
import { useRef, useState } from 'react' 

import { Toaster, toast } from 'react-hot-toast'

const Login = () => {
    // const [data, setData] = useState({
    //     email: '',
    //     password: ''
    // })
    // const handleCahnge = (e) => {
    //     setData({ ...data, [e.target.id]: e.target.value })
    // }
    const email = useRef(null)
    const password = useRef(null)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    })
    const Login = (e) => {
        e.preventDefault();
        const data = {
            email: email.current.value,
            password: password.current.value
        }
        console.log(data.email)
        //not empty
        if (data.email.length === 0) {
            setErrors({ ...errors, email: 'email is empty !' });
        }
        //min 6 
        // else if (data.email.length < 6) {
        //     setErrors({ ...errors, email: 'min 6 chars' });
        // }

        //email pattern
        else if (!emailRegex.test(data.email)) {
            setErrors({ ...errors, email: 'Invalid email format!' });
        }
        else {
            setErrors({ ...errors, email: '' });
            if (data.email === 'mohanraj.m@gmail.com' && data.password === '123') {
                console.log(data.email)
                toast.success('Successfully logged in !')
            }
            else {
                toast.error('invalid email/password'
                // ,{
                //     duration: 10000,
                // }
                )
            }
        }


        email.current.value = ''
        password.current.value = ''
        // email.current.focus()

    }

    return (

        <>
            <div className='card-wrapper'>
                <div className="">
                    <h2 className="auth-title">Login</h2>
                    <form className="auth-container h-30v shadow" onSubmit={Login}>
                        <input type="text" name="" id="email" placeholder="email" className="auth-input" ref={email} />
                        {
                            errors.email === '' ?
                                ''
                                :
                                <span className='error-comp'>
                                    {errors.email}
                                </span>
                        }

                        <input type="password" name="" id="password" placeholder="Password" className="auth-input" ref={password} />
                        <span className='btn-container'>
                            <input type="submit" value="Login" className="auth-btn w-100" />
                        </span>
                    </form>
                </div>
            </div>
            <Toaster
                position="bottom-right"
                reverseOrder={false}
            />
        </>
    )
}

export default Login