import React, { useState , useEffect} from "react";
import { Link , useNavigate } from "react-router-dom";
import '../styles/App.css';
import quoralogo from '../images/quora_logo1.png'
function LoginQ(){
    let initialData = {
        username : '',
        password : ''
    }

    const[loginformdata , setformdata] = useState(initialData)
    
     //state variable to check form submission status
     const [loginstatus, setStatus] = useState(false);

     const [loginApiFailStatus, setLoginApiFailStatus] = useState(false);
    
    
    //  const localContext = useContext(DataAppContext);
     const navigate = useNavigate();
 
    const updateData =(e) =>{
        let tempObj = {}
        tempObj[e.target.id] = e.target.value.trim();
        setformdata({
         ...loginformdata , ...tempObj
        });
    }
 
    const loginFn = () =>{
     
     let temp = JSON.parse(localStorage.getItem('users'));
 
     // const userMatch = temp.find((u) => u.username === loginformdata.username && u.password === loginformdata.password);
 
    if(temp){
        if(loginformdata.username == "" && loginformdata.password == ""){
         alert(" please fill neccesory detail")
         return
        }
 
 
     for(let i=0 ; i<temp.length ; i++) {
 
         if(temp[i].username === loginformdata.username) {
            
             if(temp[i].password === loginformdata.password) {
              
                        //set context varibale
                      

                      navigate("/home");
                   
                    }    else {
                     setLoginApiFailStatus(true);
                 }
               }
             else {
                 setLoginApiFailStatus(true);
             }
         }
     }
     else {
         setLoginApiFailStatus(true);
     }
   
           setformdata(initialData); 
    }
 
    useEffect(() => {
     let temp = localStorage.getItem('users');
     console.log(JSON.parse(temp));
 }, [loginstatus])
 
     return(

         <>

          <div className="home">
                <img src={quoralogo} />
            </div>

             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <br></br>
             <div className="form">
            
             Username: <input type="text" id="username" onChange={updateData} value={loginformdata.username} required autoComplete="off"/><br></br>
 
           Password: <input type="password" id="password" onChange={updateData} value={loginformdata.password}  required  /><br></br><br></br>
                     <button type='submit'  onClick={loginFn}>Login</button>
              
                     {loginstatus && <div class="alert alert-success" role="alert">
                 <h2>Successfully Logged In</h2>
                 </div>
             }
 
             {loginApiFailStatus && <div class="alert alert-danger" role="alert">
                 <h2>Login Failed</h2>
                 </div>
             }
 
 
                 <div className="loginnew">
                 <span>don't have any account </span><span > <Link to="/rag"><button type="submit">Register</button></Link></span>
                 </div>
                
             </div>
         </>
     )
 }
 

export default LoginQ