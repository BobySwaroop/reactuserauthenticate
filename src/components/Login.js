import React, { useState } from 'react';
import Inputcontrol from './Inputcontrol';

import { Link, useNavigate  } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "./Firebase";
function Login() {
    const navigate = useNavigate();
    const [values, setValues] = useState({
    
        email:"",
        password:"",
    });
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
    const handleSubmission = () =>{
        if(!values.email || !values.password){
            setErrorMsg("Fill all the fields");
            return;
        }
        
            setErrorMsg("");
            setSubmitButtonDisabled(true);

            signInWithEmailAndPassword(auth, values.email, values.password).then(
                (res) => {
                    setSubmitButtonDisabled(false);
                
                    navigate("/");
                    
                }
            ).catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            
            })

            }
  return (
    <div>
      <h1>login page</h1>
      <Inputcontrol label="Email"   placeholder="Enter Your Email" onChange={(event) => setValues((prev) => ({...prev, email:event.target.value})) } /><br />
      <Inputcontrol label="password"   placeholder="Enter Your Password" onChange={(event) => setValues((prev) => ({...prev, password:event.target.value})) } /><br />
      <b>{errorMsg}</b>
      <button type='button' onClick={handleSubmission} disabled={submitButtonDisabled}>Login</button>
      <p>Already have an account?{" "}
      <span>
        <Link to="/signup">Signup</Link>
      </span>
      </p>

    </div>
  )
}
export default Login;
