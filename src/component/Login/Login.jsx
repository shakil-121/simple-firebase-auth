import React, { useState } from "react";
import app from "../../firebase/firebase.init";
import { GithubAuthProvider, GoogleAuthProvider, TwitterAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  const googleprovider = new GoogleAuthProvider(); 
  const githubprovider = new GithubAuthProvider(); 
  const twitterprovider=new TwitterAuthProvider();

  const handelGoogleSignin = () => {
    signInWithPopup(auth, googleprovider)
      .then((result) => {
        const loggedInuser = result.user;
        console.log(loggedInuser);
        setUser(loggedInuser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  const handelLogOut=()=>{ 
    signOut(auth)
    .then(result=>{
        console.log(result);
        setUser(null)
    }) 
    .catch((error=>{ 
        console.log(error);
    }))
  } 

//   this is for github login process  
const handleGithubSignin=()=>{ 
    signInWithPopup(auth,githubprovider) 
    .then(result=>{ 
        const loggeduser=result.user 
        console.log(loggeduser); 
        setUser(loggeduser);
    }) 
    .catch(error=>{ 
        console.log(error);
    })
} 


// this is for  twitter login process  
 const handleTwitterSignin=()=>{ 
    signInWithPopup(auth,twitterprovider)
    .then(result=>{ 
        const loggeduser=result.user; 
        setUser(loggeduser);
    }) 
    .catch(error=>{ 
        console.log(error);
    })
 }

  return (
    <div>
    {/* user  ?  log out : sign in */}

      { 
      user ?  <button onClick={handelLogOut}>Log Out</button>:
      <div> 
        <button onClick={handelGoogleSignin}>Login by Google</button> 
        <button onClick={handleGithubSignin}>Github Login</button> 
        <button onClick={handleTwitterSignin}>Twitter Login</button> 
      </div>
      }
     
      
      <div>
        <h2>User Name :{user?.displayName}</h2>
        <h3>Email :{user?.email}</h3>
        <img src={user?.photoURL} alt="" />
      </div>
    </div>
  );
};

export default Login;
