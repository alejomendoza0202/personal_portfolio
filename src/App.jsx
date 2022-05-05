import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LandingLayout from "./layouts/LandingLayout";
import Pdf from "./pages/Pdf";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={<LandingLayout />}>
          <Route index element={<LandingPage/>} />
          <Route path="/CV_alejandroMendoza" element={<Pdf/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
