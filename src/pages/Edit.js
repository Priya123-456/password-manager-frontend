import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useParams,useNavigate } from 'react-router-dom'
import { updatedata } from '../context/ContextProvider'


const Edit = () => {

    // const [getuserdata, setUserdata] = useState([]);
    // console.log(getuserdata);

   const {updata, setUPdata} = useContext(updatedata)

   const navigate=useNavigate("");
    

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


    const { id } = useParams("");
    console.log(id);



    const getdata = async () => {

        const res = await fetch(`http://localhost:4002/getuser/${id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json();
        console.log(data);

        if (res.status === 400 || !data) {
            console.log("error ");

        } else {
            setINP(data)
            console.log("get data");

        }
    }

    useEffect(() => {
        getdata();
    }, []);


    const updateuser = async(e)=>{
        e.preventDefault();

        const {Website,Username,Password} = inpval;

        const res2 = await fetch(`http://localhost:4002/updateuser/${id}`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                Website,Username,Password
            })
        });

        const data2 = await res2.json();
        console.log(data2);

        if(res2.status === 400 || !data2){
            alert("fill the data");
        }else{
          
            setUPdata(data2);
        }

    }

    return (
        <div className="container">
            <NavLink to="/">home2</NavLink>
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
                        <input type="Password" value={inpval.Password} onChange={setdata} name="Password" class="form-control" id="exampleInputPassword1" />
                    </div>
                   
                    
                    

                    <button type="submit" onClick={updateuser} class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Edit;