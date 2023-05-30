import { Header } from "components";
import { PostForm } from "modules/post-form/post-form";
import { postSchema } from "types/schemas/post-schema";
import toast from "react-hot-toast";
import { useFormikContext } from "formik";

export function Main() {
  const { resetForm } = useFormikContext() ?? {};
  function handleSubmitForm() {
    console.log("");
    // TODO: Make this http request with promise
    // TODO: Reset form after successful submission
    toast.success("Post created successfully");
    resetForm();
  }

  return (
    <div className="flex min-h-screen items-center flex-col bg-secondary font-roboto">
      <div className="max-w-[800px] w-full bg-white min-h-screen">
        <Header />
        <div className="p-4">
          <PostForm validationSchema={postSchema} onSubmit={handleSubmitForm} />

          
        </div>
      </div>
    </div>
  );
}
