import * as React from 'react';
import './App.css';
import MoviesList from './components/Movies/MoviesList';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Wrapper"><MoviesList /></div>
      </div>
    );
  }
}

export default App;
