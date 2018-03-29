import * as React from 'react';
import './App.css';
import MoviesList from './components/Movies/MoviesList';
import MovieForm from './components/Movies/MovieForm/container';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <MoviesList />
          <MovieForm />
        </div>
      </div>
    );
  }
}

export default App;
