import { Route } from 'react-router-dom';

import Home from './components/Home';
import Resume from './components/Resume';

import './App.css';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Route path='/home'>
          <Home />
        </Route>
      </header>
    </div>
  );
}

export default App;
