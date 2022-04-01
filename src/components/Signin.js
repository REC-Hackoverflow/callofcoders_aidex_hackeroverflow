import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
    return (
        <div className="container1">
            <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="..." width="150" height="70" className="d-inline-block align-top" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto"  >
                            <li className="nav-item active">
                                <Link className="nav-link" to="/" style={{ color: "white" }} > Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about" style={{ color: "white" }} > About Us </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/" style={{ color: "white" }} > Contact Us </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className='signinalignment'>
            <div className='container'>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1" style={{ color: "white" }} >Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" style={{ color: "white" }}>Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" style={{ color: "white" }}>Confirm Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirm Your Password" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                    <br />
                    <br />
                    <Link className="signinlink" to="/"> Already have an account? Login Here! </Link>

                </form>
            </div>
            </div>

        </div>
    )
}

export default Signin