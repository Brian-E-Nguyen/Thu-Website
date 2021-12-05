import { Route } from 'react-router-dom';

import Home from './views/Home';
import Resume from './views/Resume';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Route path=''>
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
