// modules
import { BrowserRouter, Route, Routes } from "react-router-dom";

// views
import MainPage from "./views/main";
import EditPage from "./views/edit-task";
import NotFound from "./views/not-found";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
