import axios from "axios";
import toast from "react-hot-toast";
import { ListOfPosts, Header } from "components";
import { Post, PostForm } from "modules/post-form/post-form";
import { useEffect } from "react";
import { useMutation, useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, selectUser } from "redux/actions/user";
import { postSchema } from "types/schemas/post-schema";

export function Main() {
  const navigate = useNavigate();
  const username = useSelector(selectUser);
  const dispatch = useDispatch();

  const { refetch } = useQuery("posts", {});

  const mutation = useMutation({
    mutationFn: (data: Post) => {
      return axios.post("https://dev.codeleap.co.uk/careers/", {
        username,
        title: data.title,
        content: data.content,
      });
    },
    onSuccess: () => {
      toast.success("Post created successfully");
      refetch();
    },
  });

  function handleSubmitForm(data: Post) {
    mutation.mutate(data);
  }

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (user) {
      dispatch(login(JSON.parse(user)));
    }

    if (!username) {
      navigate("/");
    }
  }, []);

  return (
    <div className="flex min-h-screen items-center flex-col bg-secondary font-roboto">
      <div className="max-w-[800px] w-full bg-white min-h-screen">
        <Header />
        <div className="p-4">
          <PostForm
            validationSchema={postSchema}
            onSubmit={handleSubmitForm}
            // reset={sendForm}
          />
        </div>

        <div className="px-4 pt-2 pb-4">
          <ListOfPosts />
        </div>
      </div>
    </div>
  );
}
