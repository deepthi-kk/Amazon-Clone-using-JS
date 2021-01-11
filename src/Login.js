import React from 'react';
import "./Login.css";



function Login(props) {

   const {email, setEmail, password,setPassword, handleLogin,
    hasAccount,handleSignup, setHasAccount , passwordError, emailError
   }=props;
    return (
        <section className="login">
            <div className="loginContainer">
            <img alt="visualAI Logo" src="https://store.visualai.io/assets/angular2/controlcenter/demo/assets/images/logo.png" width="200" height="52" />
                <label>Username</label>
                <input type="text" autoFocus required value={email} placeholder="Enter your Email*" onChange={(e)=>setEmail(e.target.value)} />
           <p className="errormessage">{emailError}</p>
           <label>Password</label>
            <input type="password" required value={password} placeholder="Password*" onChange={e=>setPassword(e.target.value)} />
            <p className="errormessage">{passwordError}</p>
    
            <div className="btnContainer">
                {hasAccount ? (
                   <>
                   <button onClick={handleLogin}> Sign In</button>
                   <p> Don't have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p>
                   <p> Forgot Password?</p>
                   </>
                ):(
                    <>
                    <button onClick={handleSignup}>Sign Up</button>
                    <p> Have an account? <span onClick={()=>setHasAccount(!hasAccount)}>Sign In</span></p>
                    
                    
                    </>


                ) }
            </div>
            </div>
               
        </section>
    )
}

export default Login
