Hi! This is test task for Heathmont

For the convenience purposes I've made it in single repo instead of splitting up back and front part.

In order to set project up you have to add `config/dev.secret.exs` with your postgres username/password.
Same goes for running tests. Server side is running with postgres as a database layer.

Client side doesn't require additional setup, just `yarn && yarn run start`


Task description asked to describe which part took most of the time.
On server side there wasn't any struggle with designing API. Tests required some time to implement because elixir testing framework is quite basic.

On client side I've had some fight with Typescript as sometimes typings for apollo are confusing. Other than that the biggest amount of time I've spent with designing layer connecting GQL client with application logic. Because queries are very simmilar and Apollo's wrapping components take large amount of code to set up I wanted to make this layer to work without additional configuration from within other parts of the app. This thing took a couple of iterations before I ended up with final solution.
