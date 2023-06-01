import { RootNavigator } from "./navigation";
import { Toaster } from "react-hot-toast";
import Modal from "react-modal";

Modal.setAppElement("#root");

export default function App() {
  return (
    <>
      <RootNavigator />
      <Toaster />
    </>
  );
}
