import React, { useState } from "react";


const Contact = () => {
    const [data, setData] = useState({
        fullname: "",
        phone: "",
        email: "",
        msg: "",
    });

    const InputEvent = (event) => {
        const {name, value} = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            }
        })
        }
    
    
    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Name is ${data.fullname}. Mobile number is ${data.phone}. Email is ${data.email}. Message is ${data.msg}`);
    };
    return (<>
    <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
    </div>
    <div className="container contact_div">
        <div className="row">
            <div className="col-md-6 mb-5 col-10 mx-auto">
            <form onSubmit={formSubmit}>
  <div class="form-group">
    <label for="exampleFormControlInput1"> FullName </label>
    <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter your name" required />
  </div> 
  <br />
  <div class="form-group">
    <label for="exampleFormControlInput1"> Phone </label>
    <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="Mobile number" required />
  </div>
  <br />
  <div class="form-group">
    <label for="exampleFormControlInput1">Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" required />
  </div>
  <br />
  <div class="form-group">
    <label for="exampleFormControlTextarea1"> Message </label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent} required ></textarea>
  </div>
  <br />
<div className="col-md-12">
<button class="btn btn-outline-primary w-25" type="submit">Submit form</button></div>
  
</form>
            </div>
        </div>
    </div>
    </>);
};

export default Contact;