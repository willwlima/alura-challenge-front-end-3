import React from "react";
import { useNavigate } from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";

import "./Footer.css";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "560px",
      background: "#FFFFFF",
    },
  },
  button: {
    flex: "none",
    order: 2,
    flexGrow: 0,
    margin: " 8px 10px",
  },
}));

function Footer() {
  const navigate = useNavigate();
  const classes = useStyles();
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
 
    <footer>
      <div className="container-footer">
        <img 
        src="image/aluraGeekFooter.png" 
        alt="Logo AluraGeek"
        onClick={() => navigate("/")}
         />
        <div className="links-footer">
          <a href="#" className="link-footer one">
            Quem somos nós
          </a>
          <a href="#" className="link-footer two">
            Polítca de privacidade
          </a>
          <a href="#" className="link-footer three">
            Programa fidelidade
          </a>
          <a href="#" className="link-footer four">
            Nossas Lojas
          </a>
          <a href="#" className="link-footer five">
            Queo ser franquedo
          </a>
         
          <a href="#" className="link-footer six">
            Anuncie aqui
          </a>
        </div>
        <div className="form-contact">
          <h2 className="form-h2">Fale conosco</h2>
          <div className="fields">
            <form className={classes.root} noValidate autoComplete="off">
              <div>
                <TextField
                  id="outlined-textarea"
                  label="Nome"
                  placeholder="André Lisboa"
                  multiline
                  variant="outlined"
                />
              </div>
              <div>
                <TextField
                  id="outlined-multiline-static"
                  label="Mensagem"
                  multiline
                  rows={4}
                  defaultValue="Escreva sua mensagem"
                  variant="outlined"
                />
              </div>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                {"Enviar mensagem"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>
      <div className="developer">
        <p>Desnvolvido por William Lima 2022</p>
      </div>
      </>
  );
}

export default Footer;
