defmodule BackWeb.MoviesResolver do
  alias Back.Movies

  def all_movies(_root, _args, _info) do
    movies = Movies.list_movies
    {:ok, movies}
  end

  def create_movie(_root, args, _info) do
    case Movies.create_movie(args) do
      {:ok, movie} -> {:ok, movie}
      _error ->
        {:error, "could not create movie"}
    end
  end
end
