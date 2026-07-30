import { Navigate, Route, Routes } from "react-router-dom";

import ButtonPage from "./pages/Button";
import TextPage from "./pages/TextPage";
import InputPage from "./pages/InputPage";
import NotFound from "./pages/NotFound";
import AppLayout from "./layout/AppLayout";
import TextAreaPage from "./pages/TextArea";
import CardPage from "./pages/CardPage";
import LabelPage from "./pages/LabelPage";
import SelectPage from "./pages/SelectPage";
import CheckboxPage from "./pages/CheckboxPage";
import RadioPage from "./pages/RadioPage";
import SwitchPage from "./pages/SwitchPage";
import BadgePage from "./pages/BadgePage";
import AvatarPage from "./pages/AvatarPage";
import DividerPage from "./pages/DividerPage";
import SpinnerPage from "./pages/Spinnerpage";
import ModalPage from "./pages/ModalPage";
import AlertPage from "./pages/AlertPage";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/button" replace />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/text" element={<TextPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/text-area" element={<TextAreaPage />} />
        <Route path="/card-page" element={<CardPage />} />
        <Route path="/label-page" element={<LabelPage />} />
        <Route path="/select-page" element={<SelectPage />} />
        <Route path="/checkbox-page" element={<CheckboxPage />} />
        <Route path="/radio-page" element={<RadioPage />} />
        <Route path="/switch-page" element={<SwitchPage />} />
        <Route path="/badge-page" element={<BadgePage />} />
        <Route path="/avatar-page" element={<AvatarPage />} />
        <Route path="/divider-page" element={<DividerPage />} />
        <Route path="/spinner-page" element={<SpinnerPage />} />
        <Route path="/modal-page" element={<ModalPage />} />
        <Route path="/alert-page" element={<AlertPage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
