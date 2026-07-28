import { Navigate, Route, Routes } from "react-router-dom";

import ButtonPage from "./pages/Button";
import TextPage from "./pages/TextPage";
import InputPage from "./pages/InputPage";
import NotFound from "./pages/NotFound";
import AppLayout from "./layout/AppLayout";
import TextAreaPage from "./pages/TextArea";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/button" replace />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/text" element={<TextPage />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/text-area" element={<TextAreaPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
