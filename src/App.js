import { Route, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';

import Navbar from './components/UI/Navbar';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <header className='App-header'>
        <Switch>
          <Route path='/' exact component={HomeView} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
