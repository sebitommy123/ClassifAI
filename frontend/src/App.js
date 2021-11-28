import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
