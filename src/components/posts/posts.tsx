import { PostsFetchData } from "types/data";
import edit from "assets/bx-edit.svg";
import trash from "assets/trash.svg";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";
import { ModalDeletePost, ModalEditPost } from "components/modal";

export function Posts({
  content,
  title,
  username,
  id,
  created_datetime,
}: PostsFetchData) {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  function handleOpenModalEdit(id: number) {
    setIsOpenEditModal(true);
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
    // console.log(Math.abs(currentDate.getTime() - new Date(date).getTime()));
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
              onClick={() => setIsOpenDeleteModal(true)}
            />
            <img
              src={edit}
              alt="edit button"
              className="w-6 cursor-pointer"
              onClick={() => handleOpenModalEdit(id)}
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
        isOpen={isOpenEditModal}
        onReqClose={() => setIsOpenEditModal(false)}
      />

      <ModalDeletePost
        isOpen={isOpenDeleteModal}
        onReqClose={() => setIsOpenDeleteModal(false)}
      />
    </>
  );
}
