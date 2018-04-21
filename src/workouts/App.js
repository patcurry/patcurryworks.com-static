// patcurryworks.com-static/src/workouts/App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import ExerciseList from './components/ExerciseList';

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const App = () => (
  <Router basename="/workouts/react" >
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/exercises">Exercises</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/exercises" component={ExerciseList}/>
    </div>
  </Router>
);

export default App;
