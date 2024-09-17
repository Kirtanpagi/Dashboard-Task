import { Link } from "react-router-dom";

const Login = () => {

    return (

        <>

         
    <section id="loginpage">
        <div className="container">
            <div className="row">
                <div className="col left-section">

                    <div className="form-container">

                        <form>

                            <h3 className="form-title">Log in</h3>

                            <div className="form-outline">
                                <span><i className="fa-regular fa-user"></i></span>
                                <input type="email" id="email" className="form-input" placeholder="Username" />
                            </div>

                            <div className="form-outline">
                                <span><i className="fa-solid fa-lock"></i></span>
                                <input type="password" id="password" className="form-input" placeholder="Password" />
                            </div>

                            <div className="button-group">
                                <button className="btn btn-hover" type="button">Sign Up</button>
                                 <Link className="btn btn-hover" to='/dash'>
                                Login
                            </Link>
                            </div>

                            <p className="text-center">or connect with <a href="#!" className="link-warning">Facebook</a></p>

                        </form>

                    </div>

                </div>

                <div className="col right-section">
                </div>

            </div>
        </div>
    </section>
        </>
    )
}

export default Login;