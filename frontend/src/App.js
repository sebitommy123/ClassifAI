import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import SignLanguage from './pages/signLanguage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signLanguage" element={<SignLanguage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
