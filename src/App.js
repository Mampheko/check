import React, { useState, useEffect} from 'react';
import fire from './fire';
import './App.css';

const App=() => {
  const [user, setUer] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAcount, setHasAcount] = useState(false);

  const handleLogin = () => {
     fire
     .auth()
     .signInWithEmailAndPassword(email,password)
     .catch(err => {
      switch(err.code){
        case "auth/invalid-email":
        case "auth/user-disabled":
        case "auth/user-not-found":
          setEmailError(err.message);
          break;
          case "auth/wrong-pasword":
            setPasswordError(err.message);
            break;
            
      }
     })


  }

  return (
    <div className='App'>
    <h1>WELCOME BACK</h1>
    <h2>Manage You Task Checklist Easily</h2>
    </div>
  )
}


export default App;
