defmodule BackWeb.Schema do
  use Absinthe.Schema

  alias BackWeb.News

  object :movie do
    field :id, non_null(:id)
    import_fields :movie_attributes
  end

  input_object :movie_attributes do
    field :title, non_null(:string)
    field :description, non_null(:string)
  end

  query do
    field :all_movies, non_null(list_of(non_null(:movie))) do
      resolve &BackWeb.MoviesResolver.all_movies/3
    end

    field :movie, non_null(:movie) do
      arg :id, non_null(:id)
      resolve &BackWeb.MoviesResolver.find_movie/3
    end
  end

  mutation do
    field :create_movie, :movie do
      arg :title, non_null(:string)
      arg :description, non_null(:string)

      resolve &BackWeb.MoviesResolver.create_movie/3
    end

    field :update_movie, :movie do
      arg :id, non_null(:id)
      arg :movie, non_null(:movie_attributes)

      resolve &BackWeb.MoviesResolver.update_movie/3
    end

    field :delete_movie, :movie do
      arg :id, non_null(:id)

      resolve &BackWeb.MoviesResolver.delete_movie/3
    end
  end
end
