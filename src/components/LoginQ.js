import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import '../styles/App.css';
import quoralogo from '../images/quora_logo1.png'

function LoginQ(){
    let initialData = {
        username : '',
        password : ''
    }

    const[loginformdata , setformdata] = useState(initialData)
    
    const navigate = useNavigate();

   const updatedata =(e) =>{
       let tempObj = {}
       tempObj[e.target.id] = e.target.value.trim();
       setformdata({
        ...loginformdata , ...tempObj
       });
   }

   const handleSubmit = (event) =>{
    event.preventDefault();
    let temp = JSON.parse(localStorage.getItem('users'));

    // const userMatch = temp.find((u) => u.username === loginformdata.username && u.password === loginformdata.password);
    for(let i=0 ; i<temp.length ; i++) {

        if(temp[i].username === loginformdata.username) {
           
            if(temp[i].password === loginformdata.password) {
                navigate("/home"); 

            }else{
                
                window.alert("Invalid username or password.");
                navigate("/login");
            }
        }
    }

          setformdata(initialData);
   }

    return(
        <>
            <div className="home">
            <img src={quoralogo}/>
            </div>

            <div className="form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">username</label>
                <input type="text" id = "username" onChange={updatedata}  required autoComplete="off"/> <br/>
                <label htmlFor="password">password</label>
                <input type="password" id = "password" onChange={updatedata} required autoComplete="off" />
                <button type="submit" >Login</button> <br/><br/>
                
             
            


                <div className="loginnew">
                <span>don't have any account </span><span > <Link to="/rag"><button type="submit">Register</button></Link></span>
                </div>
                </form>
            </div>
        </>
    )
}

export default LoginQ