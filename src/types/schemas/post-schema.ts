import * as yup from "yup";

export const postSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, "Title is too short")
    .max(50)
    .required("Title is required"),

  content: yup
    .string()
    .min(10, "Content is too short")
    .required("Content is required"),
});
