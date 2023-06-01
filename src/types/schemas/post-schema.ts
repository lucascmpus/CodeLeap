import * as yup from "yup";

export const postSchema = yup.object().shape({
  title: yup
    .string()
    .min(2, "Title must be longer than 2 characters")
    .max(50)
    .required("Title is required"),

  content: yup
    .string()
    .min(10, "Content must be longer than 10 characters")
    .required("Content is required"),
});
