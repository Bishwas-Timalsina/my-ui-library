import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../layout/AppLayout";
import ButtonPage from "../Pages/Button";
import TextPage from "../Pages/TextPage";
import TextAreaPage from "../Pages/TextArea";
import InputPage from "../Pages/InputPage";
import CardPage from "../Pages/CardPage";
import LabelPage from "../Pages/LabelPage";
import SelectPage from "../Pages/SelectPage";
import CheckboxPage from "../Pages/CheckboxPage";
import RadioPage from "../Pages/RadioPage";
import SwitchPage from "../Pages/SwitchPage";
import BadgePage from "../Pages/BadgePage";
import AvatarPage from "../Pages/AvatarPage";
import DividerPage from "../Pages/DividerPage";
import SpinnerPage from "../Pages/Spinnerpage";
import ModalPage from "../Pages/ModalPage";
import AlertPage from "../Pages/AlertPage";
import TabsPage from "../Pages/TabsPage";
import PaginationPage from "../Pages/PaginationPage";
import TablePage from "../Pages/TablePage";
import NotFound from "../Pages/NotFound";

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
        <Route path="/tab-page" element={<TabsPage />} />
        <Route path="/pagination-page" element={<PaginationPage />} />
        <Route path="/table-page" element={<TablePage />} />

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
