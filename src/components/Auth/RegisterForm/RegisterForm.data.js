import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
    username: "",
  };
}

export function validationSchame() {
  return Yup.object({
    email: Yup.string().email(true).required("Obligatorio"),
    username: Yup.string().required("Obligatorio"),
    password: Yup.string().required("Obligatorio"),
  });
}
