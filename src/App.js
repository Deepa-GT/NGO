import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import VolunteerForm from './components/VolunteerForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <VolunteerForm />
      <About />
      <Footer />
    </div>
  );
}

export default App;
