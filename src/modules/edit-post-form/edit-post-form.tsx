import { useFormik } from "formik";
import { useEffect } from "react";
import { FormProps } from "types/form";

export class EditPost {
  title!: string;
  content!: string;

  constructor() {
    this.title = "";
    this.content = "";
  }
}

interface EditPostForm extends FormProps<EditPost> {
  onReqClose: (open: boolean) => void;
}

export function EditPostForm({
  onSubmit,
  data,
  validationSchema,
  onReqClose,
}: EditPostForm) {
  const {
    handleSubmit,
    touched,
    errors,
    dirty,
    isValid,
    getFieldProps,
    resetForm,
  } = useFormik({
    initialValues: data || new EditPost(),
    onSubmit,
    validationSchema,
  });

  useEffect(() => {
    resetForm();
  }, [onSubmit]);

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col w-full gap-3">
        <h1 className="text-xl font-bold tracking-wide">Edit Item</h1>

        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            className="border rounded-md pl-3 py-1 placeholder:text-sm text-sm"
            placeholder="Hello World"
            {...getFieldProps("title")}
          />
          {errors.title && touched.title && (
            <p className="text-red-400">{errors.title}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            cols={30}
            rows={5}
            className="border rounded-md p-1 pl-2 placeholder:text-sm text-sm resize-none"
            placeholder="Content Here"
            {...getFieldProps("content")}
          ></textarea>
          {errors.content && touched.content && (
            <p className="text-red-400">{errors.content}</p>
          )}
        </div>

        <div className="flex justify-end mt-2 font-bold">
          <button
            className="mr-3 px-8 py-1 border bg-white rounded-lg"
            onClick={() => onReqClose(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`${
              !(isValid && dirty) ? "bg-gray-200 " : "bg-success"
            }  px-9 py-1  text-white rounded-lg`}
          >
            Save
          </button>
        </div>
      </form>
    </>
  );
}
