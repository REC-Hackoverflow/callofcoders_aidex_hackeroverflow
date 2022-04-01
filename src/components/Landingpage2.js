import React from 'react';
import Logo from '../logo1.png';
import { Link } from 'react-router-dom';

const Landingpage2 = () => {

    const changeHiring = () => {
        window.location = "/hiring"
    } 

    const changeFreelancers = () => {
        window.location = "/firstpage"
    }

  return (
    <div className='container1'>
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={Logo} width="150" height="100" className="d-inline-block align-top" alt="" />
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
            <div className='controllers'>
                <button type = "submit" onClick={changeHiring} className='btn btn-primary btn-block'> Hire Care-takers </button>
                <br />
                <br />
                <button type = "submit" onClick = {changeFreelancers} className='btn btn-primary btn-block'> FreeLancers </button>
            </div>
        </div>
    </div>
  )
}

export default Landingpage2