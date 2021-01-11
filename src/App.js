import React,{useState,useEffect} from 'react';
import './App.css';

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./Login";
import { auth } from './firebase';
import Hero from "./Home";

function App() {

  const[user,setUser]=useState('');

  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[emailError,setEmailError]=useState('');

  const[passwordError,setPasswordError]=useState('');

  const[hasAccount,setHasAccount]=useState('');

 const  clearInputs=()=>{
     setEmail("");
     setPassword("");
 }
 const  clearErrors=()=>{
  setEmailError("");
  setPasswordError("");
}


  const handleLogin= ()=>{
          clearErrors();
            
           auth
             .signInWithEmailAndPassword(email,password)
             .catch((err)=>{
                 switch(err.code){
                     case "auth/invald-email":
                     case  "auth/user-disabled":
                     case "auth/user-not-found":
                         setEmailError(err.message);
                         break;
                     case "auth/wrong-password":
                         setPasswordError(err.message);
                         break;
                 }
             })
          }

  const handleSignup=()=>{
      clearErrors();
      auth
      .createUserWithEmailAndPassword(email,password)
      .catch((err)=>{
          switch(err.code){
              case "auth/email-already-in-use":
              case  "auth/invalid-email":
                  setEmailError(err.message);
                  break;
              case "auth/weak-password":
                  setPasswordError(err.message);
                  break;
          }
      })

  }

  const handleLogout=() =>{

      auth
      .signOut();

  }

  const authListener =() =>{
      auth
      .onAuthStateChanged(user=>{
          if(user){
              clearInputs();
              setUser(user);
          }
          else{
              setUser("");
          }
      })
  }
  useEffect(() => {
     authListener();
  }, [])
    
   


  return (
    
    
    <div className="App">
      {user ?(
        <Hero handleLogout={handleLogout}/>
      )
      
    :(
    
    <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handleLogin={handleLogin}
    handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount}
    passwordError={passwordError} EmailError={emailError}
    />

    )}
      
      
      </div>
     
 
      

    
  );
}

export default App;
