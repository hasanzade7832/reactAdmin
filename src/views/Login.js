import React, { useState } from "react";
import { Button, FormControl, Input, InputLabel, Paper } from "@material-ui/core";
import projectServices from "../services/project.services";
import CryptoJS from "crypto-js";
import { useNavigate } from "react-router-dom";
import CustomSnackbar from "../../src/services/messageShow";
import { red } from "@mui/material/colors";
import Person3Icon from "@mui/icons-material/Person3";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { SyncLoader } from "react-spinners";


const LoginForm = () => {
  const navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const [message, setMessage] = useState("ورود موفقیت آمیز بود");
  const [severity, setSeverity] = useState("success");
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const HandleSubmit = () => {
    setOpen(false);
    setLoading(true)

    event.preventDefault();
    const weekDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    const year = d.getUTCFullYear();
    const month = d.getUTCMonth() + 1;
    const dayOfMonth = d.getUTCDate();
    const hour = d.getUTCHours();
    const dow = d.getUTCDay();
    // const dayOfWeek = dow.getUTCDay();

    const myKeyConst = year + "-" + month + "-" + dayOfMonth + "-" + hour + "-" + weekDay[dow];
    console.log("keeeey", dow);
    console.log("weeekday", weekDay[dow]);

    const seqKeyConst = CryptoJS.SHA512(CryptoJS.enc.Utf8.parse(myKeyConst)).toString(
      CryptoJS.enc.Hex
    );

    const passwordConst = CryptoJS.SHA512(CryptoJS.enc.Utf8.parse(password)).toString(
      CryptoJS.enc.Hex
    );

    projectServices
      .webLogin({
        userName: userName,
        password: passwordConst,
        SeqKey: seqKeyConst,
      })
      .then((res) => {
        setMessage("login success");
        setSeverity("success");
        setTimeout(() => {
          setLoading(false);
          navigate("/home");
        }, 3000);
        setOpen(true);
      })
      .catch((err) => {
        setMessage(err.request.responseText);
        setSeverity("error");
        setOpen(true);
        setLoading(false);
      });
  };

  return (
    <>
    <div className="rootLogin">
      <Paper className="paperLogin" style={{ borderRadius: "30px" }}>
        <div style={{ position: "relative" }}>
          <h1>Login</h1>
          <img
            src="./logoNeco.jpg"
            alt="Neco"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              position: "absolute",
              left: 150,
              top: -10,
            }}
          />
        </div>
        <div style={{ position: "relative" }}>
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
              }}
            >
              <SyncLoader size={10} />
            </div>
          ) : (
            <>
              <FormControl
                style={{ marginTop: "50px", position: "relative", marginLeft: "50px" }}
              >
                <InputLabel
                  className="requiredLabel"
                  htmlFor="userName"
                  style={{ marginTop: "-20px" }}
                >
                  UserName
                </InputLabel>
                <Person3Icon sx={{ fontSize: 30 }} style={{ position: "absolute", left: -60 }} />
                <Input id="userName" value={userName} onChange={handleUserNameChange} required />
              </FormControl>
              <FormControl
                style={{ marginTop: "40px", position: "relative", marginLeft: "50px" }}
              >
                <InputLabel
                  className="requiredLabel"
                  htmlFor="password"
                  style={{ marginTop: "-20px" }}
                >
                  Password
                </InputLabel>
                <VpnKeyIcon sx={{ fontSize: 30 }} style={{ position: "absolute", left: -60 }} />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  required
                />
                {showPassword ? (
                  <VisibilityOffIcon
                    sx={{ fontSize: 30 }}
                    style={{ position: "absolute", right: -40, cursor: "pointer" }}
                    onClick={handleTogglePasswordVisibility}
                  />
                ) : (
                  <VisibilityIcon
                    sx={{ fontSize: 30 }}
                    style={{ position: "absolute", right: -40, cursor: "pointer" }}
                    onClick={handleTogglePasswordVisibility}
                  />
                )}
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginTop: "60px", backgroundColor: "#dc143c", marginLeft: "40px" }}
                onClick={HandleSubmit}
                container="variant"
              >
                Login
              </Button>
            </>
          )}
        </div>
      </Paper>
      <div>
        <CustomSnackbar
          open={open}
          handleClose={handleClose}
          message={message}
          severity={severity}
        />
      </div>
    </div>
  </>
  );
};

export default LoginForm;
