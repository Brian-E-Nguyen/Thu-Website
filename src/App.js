import { Route, Switch } from 'react-router-dom';

import HomeView from './views/HomeView';
import ResumeView from './views/ResumeView';
import ErrorView from './views/ErrorView';
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';

import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <header className='App-header'>
        <Switch>
          <Route path='/' exact component={HomeView} />
          <Route path='/resume' component={ResumeView} />
          <Route path='*' component={ErrorView} />
        </Switch>
      </header>
      <Footer />
    </div>
  );
}

export default App;
