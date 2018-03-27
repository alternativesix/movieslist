defmodule BackWeb.MoviesResolver do
  alias Back.Movies

  def all_movies(_root, _args, _info) do
    movies = Movies.list_movies
    {:ok, movies}
  end

  def find_movie(_root, args, _info) do
    %{ id: id } = args
    movie = Movies.get_movie!(id)
    {:ok, movie}
  end

  def update_movie(_root, args, _info) do
    %{id: id, movie: attributes} = args
    movie = Movies.get_movie!(id)
    case Movies.update_movie(movie, attributes) do
      {:ok, movie} -> {:ok, movie}
      _error ->
        {:error, "could not update movie"}
    end
  end

  def create_movie(_root, args, _info) do
    case Movies.create_movie(args) do
      {:ok, movie} -> {:ok, movie}
      _error ->
        {:error, "could not create movie"}
    end
  end

  def delete_movie(_root, args, _info) do
    %{id: id} = args
    movie = Movies.get_movie!(id)
    case Movies.delete_movie(movie) do
      {:ok, movie} -> {:ok, movie}
      _error ->
        {:error, "could not create movie"}
    end
  end
end
