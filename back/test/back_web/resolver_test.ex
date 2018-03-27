# test/web/resolver/note_resolver_test.exs
defmodule Back.NoteResolverTest do
  use BackWeb.ConnCase
  alias Back.Movies
  alias Back.AbsintheHelpers

  @movie %{title: "annihilation", description: "its FANTASTIC, yaaay"}

  describe "Movies Resolver" do
    test "all_movies/0 returns a note", context do
      {:ok, movie} = Movies.create_movie(@movie)

      query = """
      {
        all_movies {
          id,
          title,
          description
        }
      }
      """

      res = context.conn
        |> post("/graphiql", AbsintheHelpers.query_skeleton(query, "movies"))

      assert json_response(res, 200) == %{
        "data" => %{
          "all_movies" => [
            %{
              "id" => to_string(movie.id),
              "title" => movie.title,
              "description" => movie.description
            }
          ]
        }
      }
    end
  end
end
