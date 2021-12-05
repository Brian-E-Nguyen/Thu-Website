import { Route } from 'react-router-dom';

import Home from './views/Home';
import Resume from './views/Resume';

import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <header className='App-header'>
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
