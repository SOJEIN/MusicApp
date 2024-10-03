import React from "react";
import { Button } from "semantic-ui-react";

export function RegisterForm(props) {
  const { openlogin, goBack } = props;
  return (
    <div style={{ backgroundColor: "#f0f" }}>
      <h1>Registro</h1>
      <Button primary onClick={openlogin}>
        Iniciar secion
      </Button>
      <Button secondary onClick={goBack}>
        Atras
      </Button>
    </div>
  );
}
