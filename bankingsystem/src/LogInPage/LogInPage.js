import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router";
import './Login.css'


const LogInPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [token, setAccessToken] = useState({
//     accessToken:"",
//     refreshToken:"",
// });


  const navigate=useNavigate()
  const handleLogin = (event) => {
    event.preventDefault()
    //console.log("name:" + email+" :password:"+password);
     // Login action
     getToken();
     //console.log(token.accessToken);
     navigate("/")
  };
  const loginData = {
    email: email,
    password: password 
  };
  // const alertOnClick = () => {
  //   alert("Successful Login: "+token.accessToken);
  // };

  let getToken= ()=>{
     
    axios.post("http://localhost:8080/api/v1/authenticate", loginData)
    .then(res=>{
     // console.log(res.data.accessToken)
     // setAccessToken(res.data)
     // alertOnClick()
      window.sessionStorage.setItem('token', JSON.stringify(res.data.accessToken));
      console.log('lll', sessionStorage.getItem('token'))
        
}).catch(()=>{
  console.error();
//sessionStorage.setItem('token', JSON.stringify("notfound"));
});
}

  // const handleRegister = (event) => {
  //   event.preventDefault();
  //   // register action// };
   // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);// };
  // const handlePasswordChange = (event) => {
  // };

  return (
    <div>
      <form id="login" onSubmit={handleLogin}>
        
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)} /><br/><br/>
        

        
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)} /><br/><br/>

        <button id="loginbtn" type="submit"> LogIn </button> 
       
      </form>
    </div>
  );
};

export default LogInPage;