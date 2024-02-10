import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate=useNavigate()
    const [input,setInput]=new useState(
        {
            "emailId":"",
            "password":""
        }
    )

    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValues=()=>{
        console.log(input)
        axios.post("http://172.16.181.99:3000/api/user/signin",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    console.log(response.data.userId._id)
                    sessionStorage.setItem("userId",response.data.userData._id)
                    navigate("/add")
                } else {
                    alert("invalid")
                }
            }
        )
    }
  return (
    <div>
        <div>
        <br /><br />
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Email Id</label>
                            <input type="email" name="emailId" className="form-control" value={input.emailId} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="password" name="password" className="form-control" value={input.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>Login</button>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <Link class="page-link" to="/signup">Click Here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SignIn