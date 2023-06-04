import axios from "axios";
import { toast } from "react-hot-toast";
import Modal from "react-modal";
import { useMutation } from "react-query";

interface ModalEditPostProps {
  isOpen: boolean;
  onReqClose: (open: boolean) => void;
  id: number;
}

const customStyles = {
  content: {
    width: "660px",
    height: "334px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "1.2rem",
    borderRadius: "0.5rem",
  },
};

export function ModalEditPost({ isOpen, onReqClose, id }: ModalEditPostProps) {
  const mutation = useMutation({
    mutationFn: () => {
      return axios.delete(`https://dev.codeleap.co.uk/careers/${id}`);
    },
    onSuccess: () => {
      toast.success("Post updated successfully");
    },
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onReqClose(false)}
      style={customStyles}
    >
      <div className="flex flex-col w-full gap-3">
        <h1 className="text-xl font-bold tracking-wide">Edit Item</h1>

        <div className="flex flex-col">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="border rounded-md pl-3 py-1 placeholder:text-sm text-sm"
            placeholder="Hello World"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="">Content</label>
          <textarea
            name=""
            id=""
            cols={30}
            rows={5}
            className="border rounded-md p-1 pl-2 placeholder:text-sm text-sm resize-none"
            placeholder="Content Here"
          ></textarea>
        </div>

        <div className="flex justify-end mt-2 font-bold">
          <button
            className="mr-3 px-8 py-1 border bg-white rounded-lg"
            onClick={() => onReqClose(false)}
          >
            Cancel
          </button>
          <button className="px-9 py-1 bg-success text-white rounded-lg">
            Save
          </button>
        </div>
      </div>
    </Modal>
  );
}
