import { PostsFetchData } from "types/data";
import edit from "assets/bx-edit.svg";
import trash from "assets/trash.svg";

export function Posts({
  content,
  title,
  username,
  id,
  created_datetime,
}: PostsFetchData) {
  return (
    <div className="w-full rounded-lg border-b border-x">
      {/* Header of post */}
      <div className="bg-primary p-4 flex justify-between text-white rounded-t-lg">
        <h1 className="font-bold text-xl tracking-wide">{title}</h1>
        <div className="flex gap-2">
          <img
            src={trash}
            alt="trash button"
            className="w-6 cursor-pointer"
            onClick={() => console.log(id)}
          />
          <img
            src={edit}
            alt="edit button"
            className="w-6 cursor-pointer"
            onClick={() => console.log(id)}
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-2">
        {/* Username */}
        <div className="flex justify-between">
          <h1>@{username}</h1>
          {/* TODO: comparing current time
          ex: 20minutes ago
        */}
          <p>{created_datetime}</p>
        </div>

        <div className="">{content}</div>
      </div>
    </div>
  );
}
