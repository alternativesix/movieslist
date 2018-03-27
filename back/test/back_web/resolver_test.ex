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

    test "createMovie with invalid data returns errors", context do
      query = """
      mutation {
        createMovie(title: "new title") {
          title,
          description
        }
      }
      """

      res = context.conn
        |> post("/graphiql", AbsintheHelpers.mutation_skeleton(query))

      assert json_response(res, 400) == %{"errors" =>
        [
          %{"message" => "In argument \"description\": Expected type \"String!\", found null.",
          "locations" => [%{"column" => 0, "line" => 2}]}
        ]
      }
    end

    test "createMovie with valid data returns movie", context do
      query = """
      mutation {
        createMovie(title: "new title", description: "new description") {
          title,
          description
        }
      }
      """

      res = context.conn
        |> post("/graphiql", AbsintheHelpers.mutation_skeleton(query))

      assert json_response(res, 200) == %{"data" =>
        %{"createMovie" => %{
          "title" => "new title",
          "description" =>"new description"
          }
          }
        }
    end

    test "find/2 with id returns movie", context do
      {:ok, movie} = Movies.create_movie(@movie)

      query = """
      {
        movie(id: #{movie.id}) {
          id
        }
      }
      """

      res = context.conn
        |> post("/graphiql", AbsintheHelpers.query_skeleton(query, "movies"))

      assert json_response(res, 200)["data"]["movie"]["id"] == to_string(movie.id)
    end

    test "update/2 with valid params returns movie", context do
      {:ok, movie} = Movies.create_movie(@movie)
      query = """
      mutation {
        updateMovie(id: #{movie.id}, movie: { title: "new title", description: "new description" }) {
          title,
          description
        }
      }
      """

      res = context.conn
        |> post("/graphiql", AbsintheHelpers.mutation_skeleton(query))

      assert json_response(res, 200) == %{"data" =>
        %{"updateMovie" => %{
          "title" => "new title",
          "description" =>"new description"
          }
          }
        }
    end
  end
end
