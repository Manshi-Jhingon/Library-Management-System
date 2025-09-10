import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AllBooks from './components/AllBooks';



// ✅ import from react-router-dom
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TopPicks from './components/TopPicks';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<AllBooks />} />
        <Route path="/toppicks" element={<TopPicks/>}/>

      </Routes>
    </Router>
  );
}

export default App;
