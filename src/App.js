import { CssBaseline } from '@mui/material';
import { BrowserRouter as Router } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/footer/Footer';
import Navbar from './components/headers/Navbar';


function App() {
  return (
    <Router>
      <CssBaseline />
        <Navbar/>
        <Navigation/>
        <Footer/>
    </Router>
  );
}

export default App;
