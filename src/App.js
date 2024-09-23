import React from "react";
import { Button } from "semantic-ui-react";
import app from "./utils/firebase.js";
import { getAuth } from "firebase/auth";

export default function App() {
  console.log("fire base", getAuth(app));
  return (
    <div>
      <Button primary>Primary</Button>
    </div>
  );
}
