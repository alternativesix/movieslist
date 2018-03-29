import gql from 'graphql-tag';

export const CREATE_MOVIE = gql`
  mutation createMovie($id: String!, $title: String!, $description: String!) {
    createMovie(id: $id, movie: { title: $title, description: $description }) {
      id
      title
    }
  }
`;

export const UPDATE_MOVIE = gql`
  mutation updateMovie($id: String!, $title: String!, $description: String!) {
    updateMovie(id: $id, movie: { title: $title, description: $description }) {
      id
      title
    }
  }
`;

export const GET_MOVIES = gql`
  {
    allMovies {
      id
      title
      description
    }
  }
`;
