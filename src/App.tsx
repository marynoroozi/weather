import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./pages/weather";
import NotFoundPage from "./pages/NotFound";

import "./app.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
