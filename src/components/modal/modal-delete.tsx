import Modal from "react-modal";
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

interface ModalDeleteProps {
  isOpen: boolean;
  onReqClose: (open: boolean) => void;
}

export function ModalDeletePost({ isOpen, onReqClose }: ModalDeleteProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onReqClose(false)}
      style={customStyles}
    >
      <div className="">ok ok ok</div>
    </Modal>
  );
}
