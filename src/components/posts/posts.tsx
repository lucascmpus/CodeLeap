import { PostsFetchData } from "types/data";
import edit from "assets/bx-edit.svg";
import trash from "assets/trash.svg";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { ModalEditPost } from "components/modal";

export function Posts({
  content,
  title,
  username,
  id,
  created_datetime,
}: PostsFetchData) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal(id: number) {
    setIsOpenModal(true);
  }

  function handleDeletePost(id: number) {
    // TODO: review this headers
    axios
      .delete("https://dev.codeleap.co.uk/careers/" + id, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
      })
      .then(() => toast.success("Post deleted successfully"))
      .catch(e => toast.error(e));
  }

  function changeDate(date: string) {
    const currentDate = new Date();
    console.log(Math.abs(currentDate.getTime() - new Date(date).getTime()));
    const result = Math.abs(currentDate.getTime() - new Date(date).getTime());
    return result;
  }

  return (
    <>
      <div className="w-full rounded-lg border-b border-x">
        {/* Header of post */}
        <div className="bg-primary p-4 flex justify-between text-white rounded-t-lg">
          <h1 className="font-bold text-xl tracking-wide">{title}</h1>
          <div className="flex gap-2">
            <img
              src={trash}
              alt="trash button"
              className="w-6 cursor-pointer"
              onClick={() => handleDeletePost(id)}
            />
            <img
              src={edit}
              alt="edit button"
              className="w-6 cursor-pointer"
              onClick={() => handleOpenModal(id)}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-2">
          {/* Username */}
          <div className="flex justify-between">
            <h1 className="text-gray-500 text-sm font-bold">@{username}</h1>
            {/* TODO: comparing current time
          ex: 20minutes ago
        */}
            <p className="text-gray-500 text-sm">
              {changeDate(created_datetime)}
            </p>
          </div>

          <div className="">{content}</div>
        </div>
      </div>

      <ModalEditPost
        isOpen={isOpenModal}
        onReqClose={() => setIsOpenModal(false)}
      />
    </>
  );
}
