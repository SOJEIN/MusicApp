import React from "react";
import { Button } from "semantic-ui-react";
import { Auth } from "../../api/index.js";

const auth = new Auth();

export function Home() {
  return (
    <div>
      <h1>Home screem</h1>

      <Button color="red" onClick={auth.logout}>
        Cerrar sesion
      </Button>
    </div>
  );
}
