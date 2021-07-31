import React, { useState } from 'react';
import './App.css';

const Contact = () => {
  const [data, setData] = useState({
    fullname:'',
    phone:'',
    email:'',
    msg:'',
  });

  const InputEvent = (event) => {
    const {name, value} = event.target;

    setData((preVal) => {
      return {
        ...preVal,[name]:value,
      }
    })
  };
  
  const formSubmit = (e) => {
  e.preventDefault();
  alert(`My  name is ${data.fullname}, my mobile number is ${data.phone}, my email id is ${data.email} and description is ${data.msg}`);
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="exampleFormControlInput1"
                name="fullname"
                onChange={InputEvent}
                value={data.fullname}
                placeholder="Enter your name" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Phone no.</label>
              <input type="number" className="form-control" id="exampleFormControlInput1"
                name="phone"
                onChange={InputEvent}
                value={data.phone}
                placeholder="phone number" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1"
                name="email"
                onChange={InputEvent}
                value={data.email}
                placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg"
                onChange={InputEvent}
                value={data.msg}></textarea>
            </div>
            <div className="col-12">
              <button className="btn btn-outline-primary" type="submit">Submit</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}


export default Contact;

