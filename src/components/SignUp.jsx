import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
    const [input,setInput]=new useState(
        {
            "name":"",
            "age":"",
            "mobileno":"",
            "adddress":"",
            "pincode":"",
            "email":"",
            "password":""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues =()=>{
        console.log(input)
        axios.post("http://172.16.181.99:3000/api/user/signu",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Successfull")
                    setInput(
                        {
                            "name":"",
                            "age":"",
                            "mobileno":"",
                            "adddress":"",
                            "pincode":"",
                            "email":"",
                            "password":""
                        }
                    )
                } else {
                    alert("Invalid")
                }
            }
        )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Name</label>
                            <input type="text" className="form-control" name="name" value={input.name} onChange={inputHandler}/>
                            
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Age</label>
                            <input type="text" className="form-control" name="age" value={input.age} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone</label>
                            <input type="text" className="form-control" name="mobileno" value={input.mobileno} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" name="adddress" value={input.adddress} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Pincode</label>
                            <input type="text" className="form-control" name="pincode" value={input.pincode} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="email" name="email" className="form-control" value={input.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" value={input.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <button className="btn btn-success" onClick={readValues}>Submit</button>
                        </div>
                        <Link to="/">Back to Login</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp