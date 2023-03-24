import React, { useState } from 'react';
import Inputcontrol from './Inputcontrol';
import { Link, useNavigate  } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from "./Firebase";

function Signup() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name:"",
        email:"",
        password:"",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const handleSubmission = () =>{
        if(!values.name || !values.email || !values.password){
            setErrorMsg("Fill all the fields");
            return;
        }
        
            setErrorMsg("");
            setSubmitButtonDisabled(true);

            createUserWithEmailAndPassword(auth, values.email, values.password).then(
                (res) => {
                    setSubmitButtonDisabled(false);
                    const user =res.user;
                    updateProfile(user, {displayName: values.name,});
                    navigate("/");
                    
                }
            ).catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            
            })

            }
            
            return (
                <div>
                  <h1>signup page</h1>
                  <Inputcontrol label="Username"   placeholder="Enter Your Name" onChange={(event) => setValues((prev) => ({...prev, name:event.target.value})) }/><br />
                  <Inputcontrol label="Email"   placeholder="Enter Your Email" onChange={(event) => setValues((prev) => ({...prev, email:event.target.value})) } /><br />
                  <Inputcontrol label="password"   placeholder="Enter Your Password" onChange={(event) => setValues((prev) => ({...prev, password:event.target.value})) } /><br />
                  <b>{errorMsg}</b>
                  <button type='button' onClick={handleSubmission} disabled={submitButtonDisabled}>Signup</button>
                  <p>Already have an account?{" "}
                  <span>
                    <Link to="/Login">Login</Link>
                  </span>
                  </p>
                </div>
              )

        

    };
 
  export default Signup;
