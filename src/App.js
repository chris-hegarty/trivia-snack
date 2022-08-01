
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"

import ProtectedRoute from "./shared/ProtectedRoute";
import Menu from "./components/Menu"
import RegisterPage from "./components/RegisterPage";
import LoginPage from "./components/LoginPage";
import GamePage from "./components/GamePage"


function App() {
  return (
    <Router>

      <Menu />

      <Routes>

        <Route path="/login" element={<ProtectedRoute requiresLogin={false} component={<LoginPage />} />} />

        <Route path="/register" element={<ProtectedRoute requiresLogin={false} component={<RegisterPage />} />} />

        <Route path="/game" element={<ProtectedRoute requiresLogin={false} component={<GamePage />} />} />

        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>

    </Router>
  );
}

export default App;
