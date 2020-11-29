import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Components
import MyProfile from './app/pages/MyProfile';
import Header from './app/layouts/Header';


function App() {
  return (
    <Router>
        <div className="App">
          <Header />
          <Route exact path="/" component={MyProfile} />
        </div>
      </Router>
  );
}

export default App;
