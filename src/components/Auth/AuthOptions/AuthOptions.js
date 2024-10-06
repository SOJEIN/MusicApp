import React from "react";
import { Button } from "semantic-ui-react";
import "./AuthOptions.scss";

export function AuthOptions(props) {
  const { openlogin, openRegister } = props;
  return (
    <div className="auth-options">
      <h1>Millones de canciones, Gratis en MusicApp</h1>
      <Button className="register" onClick={openRegister}>
        Registrate gratis
      </Button>
      <Button className="login" onClick={openlogin}>
        Iniciar sesión
      </Button>
    </div>
  );
}
