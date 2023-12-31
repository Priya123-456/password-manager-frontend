import React, { useContext, useState,useEffect } from 'react'
import { NavLink ,useNavigate } from 'react-router-dom'
import { adddata } from '../context/ContextProvider';

const Dashboard = () => {

  const [getuserdata, setUserdata] = useState([]);
  console.log(getuserdata);

  
    const { udata, setUdata } = useContext(adddata);

    const navigate = useNavigate();

   

    const [inpval, setINP] = useState({
        Website: "",
        Username: "",
        Password: ""

    })

    const setdata = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        setINP((preval) => {
            return {
                ...preval,
                [name]: value
            }
        })
    }


    const addinpdata = async (e) => {
        e.preventDefault();

        const {Website,Username,Password} = inpval;

        const res = await fetch("http://localhost:4002/dashboard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                Website,Username,Password
            })
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 400 || !data) {
          alert("error");
            console.log("error ");
            

        } else {
         
          
           alert("data added")
            console.log("data added");

        }
    }






 

    return (
        <div className="container">
            <NavLink to="/home">home</NavLink>
            <form className="mt-4">
                <div className="row">
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputEmail1" class="form-label">Website</label>
                        <input type="text" value={inpval.Website} onChange={setdata} name="Website" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Username</label>
                        <input type="text" value={inpval.Username} onChange={setdata} name="Username" class="form-control" id="exampleInputPassword1" />
                    </div>
                    <div class="mb-3 col-lg-6 col-md-6 col-12">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="text" value={inpval.Password} onChange={setdata} name="Password" class="form-control" id="exampleInputPassword1" />
                    </div>
                   
                    
                    
                    

                    <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Dashboard;