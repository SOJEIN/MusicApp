import React, { useState } from "react";
import { Form, FormButton, FormInput, Icon } from "semantic-ui-react";
import { useFormik } from "formik";
import { initialValues, validationSchame } from "./RegisterForm.data.js";
import { Auth } from "../../../api/index.js";
import "./RegisterForm.scss";

const auth = new Auth();

export function RegisterForm(props) {
  const { openlogin, goBack } = props;
  const [showPassword, setShowPassword] = useState(false);
  const onShowHidenPassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    validationSchema: validationSchame(),
    initialValues: initialValues(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await auth.register(formValue.email, formValue.password);
      } catch (error) {
        console.log("error registro", error);
      }
    },
  });
  return (
    <div className="registerForm">
      <h1>Registrate Gratis</h1>
      <Form onSubmit={formik.handleSubmit}>
        <FormInput
          name="username"
          type="text"
          placeholder="Nombre de usuario"
          icon="user circle outline"
          onChange={formik.handleChange}
          value={formik.values.username}
          error={formik.errors.username}
        />
        <FormInput
          name="email"
          type="email"
          placeholder="Correo Electronico"
          icon="mail uotline"
          onChange={formik.handleChange}
          value={formik.values.email}
          error={formik.errors.email}
        />

        <FormInput
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder="Contraseña"
          onChange={formik.handleChange}
          value={formik.values.password}
          error={formik.errors.password}
          icon={
            <Icon
              name={showPassword ? "eye slash" : "eye"}
              link
              onClick={onShowHidenPassword}
            />
          }
        />
        <FormButton type="submit" primary fluid loading={formik.isSubmitting}>
          Continuar
        </FormButton>
      </Form>
      <div className="registerFormOptions">
        <p onClick={goBack}>Volver</p>
        <p>
          ¿Ya tienes cuenta? <span onClick={openlogin}>Iniciar sesion</span>
        </p>
      </div>
    </div>
  );
}
