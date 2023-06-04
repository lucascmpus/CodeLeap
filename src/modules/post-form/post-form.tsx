import { useFormik } from "formik";
import { useEffect } from "react";
import { FormProps } from "types/form";

export class Post {
  title!: string;
  content!: string;

  constructor() {
    this.title = "";
    this.content = "";
  }
}

type PostProps = FormProps<Post>;

export function PostForm({ onSubmit, data, validationSchema }: PostProps) {
  const {
    handleSubmit,
    touched,
    errors,
    dirty,
    isValid,
    getFieldProps,
    resetForm,
  } = useFormik({
    initialValues: data || new Post(),
    onSubmit,
    validationSchema,
  });

  useEffect(() => {
    resetForm();
  }, [onSubmit]);

  return (
    <div className="p-4 border rounded-md flex flex-col w-full ">
      <h1 className="text-xl font-bold tracking-wide">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        What's on your mind?
      </h1>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col mt-3">
          <label htmlFor="">Title</label>
          <input
            className="border rounded-md pl-3 py-1 placeholder:text-sm text-sm"
            type="text"
            placeholder="Hello World"
            {...getFieldProps("title")}
          />
          {errors.title && touched.title && (
            <p className="text-red-400">{errors.title}</p>
          )}
        </div>

        <div className="flex flex-col mt-3">
          <label htmlFor="">Content</label>
          <textarea
            className="border rounded-md p-1 pl-2 placeholder:text-sm text-sm resize-none"
            placeholder="Content here"
            cols={30}
            rows={5}
            {...getFieldProps("content")}
          ></textarea>
          {errors.content && touched.content && (
            <p className="text-red-400">{errors.content}</p>
          )}
        </div>

        <div className="text-end mt-3 ">
          <button
            type="submit"
            className={`${
              !(isValid && dirty) ? "bg-gray-200 " : "bg-primary"
            }  text-white px-8 py-1 rounded-md`}
            disabled={!isValid && !dirty}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
