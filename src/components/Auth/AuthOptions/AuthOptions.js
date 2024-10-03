import React from "react";
import { Button } from "semantic-ui-react";

export function AuthOptions(props) {
  const { openlogin, openRegister } = props;
  return (
    <div style={{ backgroundColor: "#f0f" }}>
      <h1>Autentificacion</h1>
      <Button primary onClick={openRegister}>
        Registro
      </Button>
      <Button secondary onClick={openlogin}>
        Login
      </Button>
    </div>
  );
}
