import React from "react";
import { TextField, Button } from "@material-ui/core";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

function Login() {
  return (
    <>
      <Navbar />
      <form
        action=""
        align="center"
        style={{
          height: "291px",
          marginTop: "5%",
          marginLeft: "35%",
          marginRight: "35%",
        }}
      >
        <TextField
          id="outlined-textarea"
          label="E-mail"
          placeholder="Digite seu e-mail"
          multiline
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
        />
        <Button variant="contained" color="primary" fullWidth>
          Enviar
        </Button>
      </form>
      <Footer />
    </>
  );
}

export default Login;
