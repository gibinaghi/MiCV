import './App.css';
//import Nav from './components/Nav/Nav';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
//import ContactMe from './components/ContactMe/ContactMe';
import About from './components/About/About';
import Navbar from './components/Navbar';
import Contacto from './components/ContactMe/Contacto';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Contacto />
      <Footer />
    </div>
  );
}

// eslint-disable-next-line no-restricted-globals
addEventListener('DOMContentLoaded', () => {
  const btnMenu = document.querySelector('.btn-menu')
  if (btnMenu) {
    btnMenu.addEventListener('click', () => {
      const menuItems = document.querySelector('.menu-items')
      menuItems.classList.toggle('show')
    })
  }
});

export default App;
