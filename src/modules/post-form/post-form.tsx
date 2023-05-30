import { useFormik } from "formik";
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
  const { handleSubmit, touched, errors, dirty, isValid, getFieldProps } =
    useFormik({
      initialValues: data || new Post(),
      onSubmit,
      validationSchema,
    });

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
          <input
            className="border rounded-md p-1 pb-16 placeholder:text-sm text-sm"
            type="text"
            placeholder="Content here"
            {...getFieldProps("content")}
          />
          {errors.content && touched.content && (
            <p className="text-red-400">{errors.content}</p>
          )}
        </div>

        <div className="text-end mt-3 ">
          <button
            type="submit"
            className={`${
              !(isValid && dirty) && "bg-gray-200"
            } bg-primary text-white px-7 rounded-md`}
            disabled={!isValid && !dirty}
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
