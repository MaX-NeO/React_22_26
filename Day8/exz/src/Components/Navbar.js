import { useRef, useState } from 'react'
import '../Assets/Css/Style.css'
const NavBar = () => {
    const [visible, setVisible] = useState(false);
    // const [data, setData] = useState({
    //     email: '',
    //     password: ''
    // })
    // const handleCahnge = (e) => {
    //     setData({ ...data, [e.target.id]: e.target.value })
    // }
    const email = useRef(null)
    const password = useRef(null)

    const Login = (e) => {
        e.preventDefault();
        const data = {
            email: email.current.value,
            password: password.current.value
        }
        console.log(data.email.length)

        email.current.value = ''
        password.current.value = ''
        // email.current.focus()

    }

    const toggle = () => {
        setVisible(!visible)
    }
    return (
        <div>
            <div className="navbar">
                <div className="navtitle">
                    Hello world
                </div>
                <ul className="navlinks">
                    <li>
                        Home
                    </li>
                    <li>
                        About
                    </li>
                    <li>
                        Contact
                    </li>
                    <li onClick={toggle}>
                        Login
                    </li>
                </ul>
            </div>
            {visible ? (
                <div className='card-wrapper'>
                    <div className="">
                        <h2 className="auth-title">Login</h2>
                        <form className="auth-container h-30v shadow" onSubmit={Login}>
                            <input type="text" name="" id="email" placeholder="email" className="auth-input" ref={email} />
                            <input type="password" name="" id="password" placeholder="Password" className="auth-input" ref={password} />
                            <span className='btn-container'>
                                <input type="submit" value="Login" className="auth-btn w-50" />
                                <button className='cancel-btn w-50' onClick={toggle}>Cancel</button>
                            </span>
                        </form>
                    </div>
                </div>
            ) : ('')
            }
        </div>
    )
}

export default NavBar