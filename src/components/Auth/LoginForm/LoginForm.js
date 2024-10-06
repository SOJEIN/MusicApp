import React, { useState } from "react";
import { Form, Icon } from "semantic-ui-react";
import "./LoginForm.scss";
import { useFormik } from "formik";
import { initialValues, validationSchame } from "./LoginForm.data.js";
import { Auth } from "../../../api/index.js";

const auth = new Auth();

export function LoginForm(pros) {
  const { openRegister, goBack } = pros;
  const [showPassaword, setShowPassaword] = useState(false);

  const onShowHidenPassword = () => {
    setShowPassaword((prevState) => !prevState);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchame(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await auth.login(formValue.email, formValue.password);
      } catch (error) {
        throw error;
      }
    },
  });
  return (
    <div className="loginForm">
      <h1>Ingresa a tu cuenta</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input
          name="email"
          placeholder="Correo Electronico"
          type="email"
          icon="mail outline"
          onChange={formik.handleChange}
          values={formik.values.email}
          error={formik.errors.email}
        />
        <Form.Input
          name="password"
          placeholder="Contraseña"
          type={showPassaword ? "text" : "password"}
          onChange={formik.handleChange}
          values={formik.values.password}
          error={formik.errors.password}
          icon={
            <Icon
              name={showPassaword ? "eye slash" : "eye"}
              onClick={onShowHidenPassword}
              link
            />
          }
        />
        <Form.Button primary fluid loading={formik.isSubmitting}>
          Iniciar Sesión
        </Form.Button>
      </Form>
      <div className="loginFormOptions">
        <p onClick={goBack}>Volver</p>
        <p>
          ¿No tienes cuenta?{" "}
          <span onClick={openRegister}>Resgitrate aqui </span>
        </p>
      </div>
    </div>
  );
}
