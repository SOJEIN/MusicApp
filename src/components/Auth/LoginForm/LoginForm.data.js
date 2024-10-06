import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
  };
}

export function validationSchame() {
  return Yup.object({
    email: Yup.string().email(true).required("Obligatorio"),
    password: Yup.string().required("Obligatorio"),
  });
}
