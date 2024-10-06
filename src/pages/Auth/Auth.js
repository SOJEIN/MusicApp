import React, { useState } from "react";
import "./Auth.scss";
import {
  LoginForm,
  RegisterForm,
  AuthOptions,
} from "../../components/Auth/index.js";
import { logoNameGreen, logoNameWhite } from "../../assets/index.js";
import { Image } from "semantic-ui-react";

export function Auth() {
  const [typeForm, setTypeForm] = useState(null);

  const openlogin = () => setTypeForm("login");
  const openRegister = () => setTypeForm("register");
  const goBack = () => setTypeForm(null);

  const renderForm = () => {
    if (typeForm === "login") {
      return <LoginForm openRegister={openRegister} goBack={goBack} />;
    } else if (typeForm === "register") {
      return <RegisterForm openlogin={openlogin} goBack={goBack} />;
    } else {
      return <AuthOptions openlogin={openlogin} openRegister={openRegister} />;
    }
  };

  return (
    <div className="auth">
      <div className="auth_content">
        <Image
          src={logoNameWhite}
          alt="MusicApp"
          className="auth_content-logo"
        />

        {renderForm()}
      </div>
    </div>
  );
}
