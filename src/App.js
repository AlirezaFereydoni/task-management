// modules
import { BrowserRouter, Route, Routes } from "react-router-dom";

// views
import MainPage from "./views/main";
import EditPage from "./views/edit-task";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route exact path="/edit/:id" element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
