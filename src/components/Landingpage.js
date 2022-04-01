import React from 'react'
import { Link } from 'react-router-dom';
import Typed from 'react-typed';

const Landingpage = () => {
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
                                <Link className="nav-link" to="/contact" style={{ color: "white" }} > Contact Us </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="body-wrapper">
                <div className="container">
                    <div className="landing-wrapper">
                        <div className='row'>
                            <div className='col-sm-6'>
                                <div className="header">
                                    <h1 className ="header-landing" >
                                        AidEx
                                        <Typed
                                            className="spanlanding"
                                            strings={[" For Care"]}
                                            typeSpeed={140}
                                            backspeed={140}
                                            loop
                                        />
                                    </h1>
                                    
                                    <p className="content-landing">
                                        <b className='hola'>Hola!</b> We are excited adn delighted to help you. We provide elegant and simple solution for your problem in finding a care-taker to baby sit your babies and elders.
                                    </p>
                                </div>
                            </div>

                            <div className='col-sm-6'>
                                <div className='buttons'>
                                    <form>
                                        <div class="form-group">
                                            <label for="exampleInputEmail1" style={{ color: "white" }} >Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1" style={{ color: "white" }}>Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                        <br />
                                        <br />
                                        <Link className = "signinlink" to = "/signin"> Dont have an account? Sign In Here! </Link>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landingpage