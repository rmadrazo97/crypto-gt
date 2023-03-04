import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import KYC from './pages/kyc';
import TermsAndConditions from './pages/termsAndConditions';
import Header from './components/header';
import Footer from './components/footer';
import Posts from './pages/posts';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/formulario" element={<KYC />} />
        <Route path="/términos-y-políticas" element={<TermsAndConditions />} />
        <Route path="/comunidad" element={<Posts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
