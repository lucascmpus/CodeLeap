import { RootNavigator } from "./navigation";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <RootNavigator />
      <Toaster />
    </>
  );
}
