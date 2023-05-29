import * as yup from "yup";

export const loginSchema = yup.object().shape({
  username: yup
    .string()
    .max(20, "Username too long")
    .required("Username is required"),
});
