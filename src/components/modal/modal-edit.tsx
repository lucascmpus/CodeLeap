import axios from "axios";
import { EditPost, EditPostForm } from "modules/edit-post-form/edit-post-form";
import { toast } from "react-hot-toast";
import Modal from "react-modal";
import { useMutation, useQuery } from "react-query";
import { postSchema } from "types/schemas/post-schema";

interface ModalEditPostProps {
  isOpen: boolean;
  onReqClose: (open: boolean) => void;
  id: number;
}

const customStyles = {
  content: {
    width: "660px",
    minHeigth: "334px",
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
  const { refetch } = useQuery("posts", {});

  const mutation = useMutation({
    mutationFn: (data: EditPost) => {
      return axios.patch(`https://dev.codeleap.co.uk/careers/${id}/`, {
        title: data.title,
        content: data.content,
      });
    },
    onSuccess: () => {
      toast.success("Post updated successfully");
      onReqClose(false);
      refetch();
    },
    onError: () => {
      toast.error("Post delete was failed");
      onReqClose(false);
    },
  });

  function handleSubmitEditForm(data: EditPost) {
    mutation.mutate(data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onReqClose(false)}
      style={customStyles}
    >
      <EditPostForm
        onSubmit={handleSubmitEditForm}
        onReqClose={onReqClose}
        validationSchema={postSchema}
      />
    </Modal>
  );
}
