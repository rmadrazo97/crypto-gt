import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import KYC from './pages/kyc';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<KYC />} />
      </Routes>
    </div>
  );
}

export default App;
