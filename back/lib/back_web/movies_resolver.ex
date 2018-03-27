defmodule BackWeb.MoviesResolver do
  alias Back.Movies

  def all_movies(_root, _args, _info) do
    movies = Movies.list_movies
    {:ok, movies}
  end

  def find_movie(_root, %{id: id}, _info) do
    {:ok, fetch_movie(id)}
  end

  def update_movie(_root, args, _info) do
    %{id: id, movie: attributes} = args
    process fn() -> id |> fetch_movie |> Movies.update_movie(attributes) end
  end

  def create_movie(_root, args, _info) do
    process fn() -> Movies.create_movie(args) end
  end

  def delete_movie(_root, %{id: id}, _info) do
    process fn() -> id |> fetch_movie |> Movies.delete_movie end
  end

  defp process(func) do
    case func.() do
      {:ok, movie} -> {:ok, movie}
      error ->
        {:error, error}
    end
  end

  defp fetch_movie(id) do
    Movies.get_movie!(id)
  end
end
