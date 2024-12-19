import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoPlayer from './components/VideoPlayer';
import FormPage from './components/Formpage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={VideoPlayer} />
          <Route path="/form" component={FormPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;