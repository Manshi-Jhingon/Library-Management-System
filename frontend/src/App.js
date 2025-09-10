import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AllBooks from './components/AllBooks';



// ✅ import from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopPicks from './components/TopPicks';

import LoginPage from './components/Login';
import AboutLibrary from './components/AboutLibrary';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/toppicks" element={<TopPicks/>}/>

        <Route path="/Login" element={<LoginPage/>}/>
        <Route path="/about" element={<AboutLibrary/>}/>

        
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
