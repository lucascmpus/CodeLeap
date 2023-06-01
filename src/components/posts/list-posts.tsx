import { useFetch } from "hooks/useFetch";
import { Posts } from "./posts";
import { PostsFetchData } from "types/data";

export function ListOfPosts() {
  const { data, isLoading, error } = useFetch<PostsFetchData[]>({
    method: "get",
    url: "https://dev.codeleap.co.uk/careers/",
  });

  if (isLoading) return <p>isloading..</p>;

  return (
    <div className="flex flex-col gap-4">
      {data?.map(({ content, username, id, title, created_datetime }) => (
        <Posts
          key={id}
          id={id}
          content={content}
          title={title}
          username={username}
          created_datetime={created_datetime}
        />
      ))}
    </div>
  );
}
