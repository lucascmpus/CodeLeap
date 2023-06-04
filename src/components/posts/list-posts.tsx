import axios from "axios";
import { useQuery } from "react-query";
import { PostsFetchData } from "types/data";
import { Posts } from "./posts";

export function ListOfPosts() {
  const { data, isLoading } = useQuery<PostsFetchData[]>(
    "posts",
    () => {
      return axios
        .get("https://dev.codeleap.co.uk/careers/")
        .then(res => res.data.results);
    },
    { refetchInterval: 10000 },
  );

  if (isLoading) return <p className="text-center">Loading...</p>;

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
