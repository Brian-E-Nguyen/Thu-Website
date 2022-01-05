import HomeView from './views/HomeView';
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <header className='App-header'>
        <ScrollToTop />
        <HomeView />
      </header>
      <Footer />
    </div>
  );
}

export default App;
