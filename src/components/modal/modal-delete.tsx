import axios from "axios";
import { toast } from "react-hot-toast";
import Modal from "react-modal";
import { useMutation, useQuery } from "react-query";

const customStyles = {
  content: {
    width: "660px",
    height: "auto",
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

interface ModalDeleteProps {
  isOpen: boolean;
  onReqClose: (open: boolean) => void;
  id: number;
}

export function ModalDeletePost({ isOpen, onReqClose, id }: ModalDeleteProps) {
  const { refetch } = useQuery("posts", {});

  const mutation = useMutation({
    mutationFn: () => {
      return axios.delete(`https://dev.codeleap.co.uk/careers/${id}/`);
    },
    onSuccess: () => {
      toast.success("Post deleted successfully");
      onReqClose(false);
      refetch();
    },
    onError: () => {
      toast.error("Post delete was failed");
      onReqClose(false);
    },
  });

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onReqClose(false)}
      style={customStyles}
    >
      <div className="text-xl font-bold">
        Are you sure you want to delete this item?
      </div>
      <div className="text-end mt-6 font-bold">
        <button
          className="mr-3 px-8 py-1 border bg-white rounded-lg"
          onClick={() => onReqClose(false)}
        >
          Cancel
        </button>
        <button
          className="px-8 py-1 border bg-red-500 text-white rounded-lg"
          onClick={() => mutation.mutate()}
        >
          Delete
        </button>
      </div>
    </Modal>
  );
}
