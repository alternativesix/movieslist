import * as React from 'react';
import './App.css';
import MoviesList from './components/Movies/MoviesList';
import MovieForm from './components/Movies/MovieForm/container';
import { withCreateMovie } from '../src/components/Movies/GraphQL/wrapper';

const CreateMovieForm = withCreateMovie(MovieForm);

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="Wrapper">
          <MoviesList />
          <CreateMovieForm />
        </div>
      </div>
    );
  }
}

export default App;
