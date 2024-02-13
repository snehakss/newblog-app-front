import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Viewpost = () => {
    const [data,setData]=new useState([])
    const getData=()=>{
        axios.get("http://172.16.181.99:3002/api/post/viewall").then(
            (response)=>{
                setData(response.data)
            }
        )
    }
    useEffect(()=>{getData()},[])
    const deletePost = (id)=>{
      alert(id)
      axios.post("link",input).then(
        (response)=>{
          if (response.data.status=="success") {
            
          }
        }
      )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
  <thead>

    <tr>
      
      <th scope="col">Post</th>
      
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index)=>{
                return <tr>
                    <td>{value.userId.name}</td>
                <td>{value.post}</td>
                <td>{value.postDate}</td>
                <button className="btn btn-danger">Delete</button>
              </tr>
            }
        )
    }
    
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewpost