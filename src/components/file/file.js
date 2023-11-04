import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel, Paper } from "@material-ui/core";
import projectServices from "../../services/project.services";
import CryptoJS from "crypto-js";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

   const HandleSubmit = () =>{
    const weekDay = [ "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
   
    const d = new Date();
    const year = d.getUTCFullYear();
    const month = d.getUTCMonth() + 1;
    const dayOfMonth = d.getUTCDate();
    const hour = d.getUTCHours();
    const dow = d.getUTCDay();
    // const dayOfWeek = dow.getUTCDay();

    const myKeyConst = year + "-" + month + "-" + dayOfMonth + "-" + hour + "-" + weekDay[dow];
    console.log("keeeey",dow)
    console.log("weeekday",weekDay[dow])
      
    const seqKeyConst = CryptoJS.SHA512(CryptoJS.enc.Utf8.parse(myKeyConst)).toString(CryptoJS.enc.Hex);
      
    const passwordConst = CryptoJS.SHA512(CryptoJS.enc.Utf8.parse(password)).toString(CryptoJS.enc.Hex);
    
    projectServices
    .webLogin({
      userName: userName,
      password: passwordConst,
      SeqKey: seqKeyConst,
    }).then((res)=>{
      console.log("dataaaaaaaaa",res.data)
    })
    .catch((err) => {
      console.log("errr",err);
    });
  }

  return (
    <div className="rootLogin" >
      <Paper className="paperLogin">
          <FormControl>
            <InputLabel className="requiredLabel" htmlFor="email">
              UserName
            </InputLabel>
            <Input id="email" value={userName} onChange={handleEmailChange} required />
          </FormControl>
          <FormControl style={{ marginTop: "20px" }}>
            <InputLabel className="requiredLabel" htmlFor="password">
              Password
            </InputLabel>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </FormControl>
          <Button type="submit" variant="contained" color="primary" style={{ marginTop: "30px" }} onClick={HandleSubmit}>
            Login
          </Button>
      </Paper>
    </div>
  );
};

export default LoginForm;
