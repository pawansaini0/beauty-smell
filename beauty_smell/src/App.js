import "./App.css";
import Navbar from "./Components/Navbar";
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./Components/AllRoutes";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AllRoutes />
        {/* <LandingPage /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
