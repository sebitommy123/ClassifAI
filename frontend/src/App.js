import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';
import SignLanguage from './pages/signLanguage';
import Fungi from './pages/fungi';
import Pneumonia from './pages/pneumonia';
import Berkeley from './pages/berkeley';
import Heart from './pages/heart';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signLanguage" element={<SignLanguage />}></Route>
        <Route path="/fungi" element={<Fungi />}></Route>
        <Route path="/pneumonia" element={<Pneumonia />}></Route>
        <Route path="/berkeley" element={<Berkeley />}></Route>
        <Route path="/heart" element={<Heart />}></Route>
      </Routes>
    </div>
  );
}

export default App;
