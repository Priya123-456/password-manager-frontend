import React ,{useEffect,useState} from 'react';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {NavLink} from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import {useParams,useNavigate} from 'react-router-dom'

const Details = () => {
    const [getuserdata, setUserdata] = useState([]);
    console.log(getuserdata);

    const { id } = useParams("");
    console.log(id);

    const navigate = useNavigate();




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
            setUserdata(data)
            console.log("getdata");
        }
    }

    useEffect(() => {
        getdata();
    }, [])

    const deleteuser = async (id) => {

        const res2 = await fetch(`http://localhost:4002/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const deletedata = await res2.json();
        console.log(deletedata);

        if (res2.status === 400 || !deletedata) {
            console.log("error");
        } else {
            navigate("/home")
            console.log("user deleted");
           
        }

    }



   
  return (
    <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}>Your Password</h1>

            <Card sx={{ maxWidth: 600 }}>
                <CardContent>
                    <div className="add_btn">
                    
                        <NavLink to={`/edit/${getuserdata._id}`}>  <button className="btn btn-primary mx-2"><CreateIcon /></button></NavLink>
                        <button className="btn btn-danger" onClick={() => deleteuser(getuserdata._id)}><DeleteOutlineIcon /></button>
                   
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                           
                            <h3 className="mt-3">Website: <span >{getuserdata.Website}</span></h3>
                            <h3 className="mt-3">Username: <span >{getuserdata.Username}</span></h3>
                            <h3 className="mt-3">Password: <span>{getuserdata.Password}</span></h3>
                        
                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
  )
}

export default Details

