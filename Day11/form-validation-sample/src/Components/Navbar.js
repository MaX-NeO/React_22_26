import { useNavigate } from "react-router-dom"


const NavBar = () => {
    const navigate = useNavigate()
    const routeLogin = () => {
        console.log('hello')
        navigate('/login')
    }
    const routeRegister = () => {
        navigate('/register')
    }

    return (
        <div>
            <div className="navbar">
                <div className="navtitle">
                    Form Validation
                </div>
                <ul className="navlinks">

                    <li onClick={routeLogin}>
                        Login
                    </li>
                    <li onClick={routeRegister}>
                        Register
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar