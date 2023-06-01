import { useFormik } from "formik";
import { FormProps } from "types/form";

export class User {
  username!: string;
  constructor() {
    this.username = "";
  }
}

type UserProps = FormProps<User>;

export function LoginForm({ onSubmit, data, validationSchema }: UserProps) {
  const { errors, touched, handleSubmit, getFieldProps, dirty, isValid } =
    useFormik({
      initialValues: data || new User(),
      validationSchema,
      onSubmit,
    });

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <p>Please enter your username</p>
      <input
        type="text"
        placeholder="John Doe"
        className="w-full border pl-2 rounded-md mt-1"
        {...getFieldProps("username")}
      />
      {errors.username && touched.username && (
        <p className="text-red-400">{errors.username}</p>
      )}

      <div className="text-end mt-3">
        <button
          type="submit"
          className={`${
            !(isValid && dirty) ? "bg-gray-200 " : "bg-primary "
          }  text-white px-7 rounded-md`}
          disabled={!isValid && !dirty}
        >
          ENTER
        </button>
      </div>
    </form>
  );
}
