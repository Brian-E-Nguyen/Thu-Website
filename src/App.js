import { Route } from 'react-router-dom';

import Home from './views/Home';
import Resume from './views/Resume';

import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Navbar />
        <Route path='/home'>
          <Home />
        </Route>
        <Route path='/resume'>
          <Resume />
        </Route>
      </header>
    </div>
  );
}

export default App;
