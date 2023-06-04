import edit from "assets/bx-edit.svg";
import trash from "assets/trash.svg";
import { ModalDeletePost, ModalEditPost } from "components/modal";
import { useState } from "react";
import { PostsFetchData } from "types/data";

export function Posts({
  content,
  title,
  username,
  id,
  created_datetime,
}: PostsFetchData) {
  const [isOpenEditModal, setIsOpenEditModal] = useState(false);

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  function changeDate(date: string) {
    const result = Math.floor(
      (new Date().getTime() - new Date(date).getTime()) / 60000,
    );
    if (result < 60) {
      return result + " minutes ago...";
    } else {
      const diffHours = Math.floor(result / 60);
      const remainingMinutes = result % 60;

      if (diffHours === 1) {
        return "1 hora atrás...";
      } else if (remainingMinutes === 0) {
        return diffHours + " horas atrás...";
      } else {
        return diffHours + " horas e " + remainingMinutes + " minutos atrás...";
      }
    }
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
              onClick={() => setIsOpenEditModal(true)}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col gap-2">
          {/* Username */}
          <div className="flex justify-between">
            <h1 className="text-gray-500 text-sm font-bold">@{username}</h1>
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
        id={id}
      />

      <ModalDeletePost
        isOpen={isOpenDeleteModal}
        onReqClose={() => setIsOpenDeleteModal(false)}
        id={id}
      />
    </>
  );
}
