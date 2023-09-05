import { Route, Routes } from "react-router-dom";
import "./App.css";
import Weather from "./components/Weather";
import ProtectedRoute from "./components/ProtectedRoute";
import Signup from "./components/Signup.Jsx";

function App() {
  return (
    <>
      <div className="Nav">
        <div>WeatherApp</div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Weather />
            </ProtectedRoute>
          }
        />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
