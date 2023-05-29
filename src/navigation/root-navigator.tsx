import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Main } from "screens";

export function RootNavigator() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/network" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}
