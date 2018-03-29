import * as React from 'react';
import './App.css';
import MoviesList from './components/Movies/MoviesList';
import MovieForm from './components/Movies/MovieForm/container';
import withCreateMovie from '../src/components/Movies/GraphQL/wrappers/withCreateMovie';

class App extends React.Component {

  CreateMovieForm = () => withCreateMovie(MovieForm);

  render() {
    const { CreateMovieForm } = this;
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
