import { Route, Switch } from 'react-router-dom';

import Home from './views/Home';
import ResumeView from './views/ResumeView';

import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <header className='App-header'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/resume' component={ResumeView} />
        </Switch>
      </header>
    </div>
  );
}

export default App;
