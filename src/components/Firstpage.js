import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../logo1.png';


const Firstpage = () => {

    const [uniqueid, setUniqueid] = useState();
    const [phonenumber, setPhonenumber] = useState();
    const [username, setUsername] = useState();
    const [age, setAge] = useState();
    const [aadharcard, setAadharcard] = useState();
    const [description, setDescription] = useState();
    const [address, setAddress] = useState();

    const processData = (e) => {
        e.preventDefault();
        console.log(uniqueid);
        console.log(phonenumber);
        console.log(username);
        console.log(age);
        console.log(aadharcard);
        console.log(description);
        console.log(address);
    }

  return (
    <div className='container1'>
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
        <div className='signinalignment1'>
            <div className = "container">
                <form onSubmit={processData}>
                    <div class="form-group">
                        <label for="exampleFormControlInput1" style={{ color: "white" }}> Unique Id </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Contact Number" name="phonenumber" value={uniqueid} onChange={((e) => setUniqueid(e.target.value))} />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1" style={{ color: "white" }}> Phone Number </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Contact Number" name="phonenumber" value={phonenumber} onChange={((e) => setPhonenumber(e.target.value))} />
                    </div>
                        <div class="form-group">
                        <label for="exampleFormControlInput1" style={{ color: "white" }}> User Name </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your username" name="username" value={username} onChange={((e) => setUsername(e.target.value))} />
                    </div>
                        <div class="form-group">
                        <label for="exampleFormControlSelect1" style={{ color: "white" }}> Enter Your Current Age </label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Current Age" name="age" value={age} onChange={((e) => setAge(e.target.value))} />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1" style={{ color: "white" }}> Aadhar Card Number</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Aadhar Card" name="aadharcard" value={aadharcard} onChange={((e) => setAadharcard(e.target.value))} />
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1" style={{ color: "white" }}> Why are you voluntaring for care taking job? </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" name="description" value={description} onChange={((e) => setDescription(e.target.value))}></textarea>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1" style={{ color: "white" }}> Your Current Address </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="1" name="address" value={address} onChange={((e) => setAddress(e.target.value))}></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Firstpage