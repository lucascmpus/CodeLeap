import { Header } from "components";
import { Post, PostForm } from "modules/post-form/post-form";
import { postSchema } from "types/schemas/post-schema";
import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";
import { ListOfPosts } from "components/posts";

export function Main() {
  const [sendForm, setSendForm] = useState<boolean>();

  function handleSubmitForm(data: Post) {
    // TODO: Get username using redux
    const username = "luc";
    // TODO: Make this http request with promise
    axios
      .post("https://dev.codeleap.co.uk/careers/", {
        username,
        title: data.title,
        content: data.content,
      })
      .then(res => {
        console.log(res.data);
        toast.success("Post created successfully");
      })
      .catch(e => toast.error(e))
      .finally(() => setSendForm(!sendForm));
  }

  return (
    <div className="flex min-h-screen items-center flex-col bg-secondary font-roboto">
      <div className="max-w-[800px] w-full bg-white min-h-screen">
        <Header />
        <div className="p-4">
          <PostForm
            validationSchema={postSchema}
            onSubmit={handleSubmitForm}
            reset={sendForm}
          />
        </div>

        <div className="px-4 pt-2 pb-4">
          <ListOfPosts />
        </div>
      </div>
    </div>
  );
}
