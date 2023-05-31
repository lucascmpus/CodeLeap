import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Main } from "screens";
import { Formik, Form } from "formik";

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
