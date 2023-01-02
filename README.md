# React Typescript PokéPedia App!

This app consumes the excellent [PokéAPI](https://pokeapi.co/), a REST API for all things Pokémon. The app allows the user to browse through all 1154 Pokémon available in the API database. Unfortunately, at the time of writing, new Pokémon from Scralet and Violet have yet to be added but the team behind PokéAPI is amazing and I'm sure it will be added at some point.

The app also shows each individual Pokémon's stats, movesets, abilities and flavor texts.

Some key things about the project:

-   React and Typescript are the key building blocks
-   Tailwind CSS for styling. I did add some extra colors found in `src/colors/customColors.js` which was taken from this excellent [color set](https://davidpiesse.github.io/tailwind-md-colours/) made by David Piesse. The color set was added because I wanted a specific color background for each pokemon type (e.g. fire, water) and the additional colors helped significantly.
-   I used [@tanstack/react-query](https://react-query-v3.tanstack.com/) with [axios](https://axios-http.com/docs/intro) for handling network requests with **caching**, **staleness verification** and **infinite scroll**. Request specific code can be found under `src/requests`.
-   Accessible search bar which lets users search for any Pokemon. A locally cached indexed list of Pokémon is used to filter through when the user types a search query (the filtering is done after a debounce period). In a real world application, this list would likely be provided by a API endpoint or a microservice like Algolia Elasticsearch.
-   Individual Pokémon view details useful information about each Pokémon, such as types, abilities, evolution details, type weaknesses, movesets, and Pokédex entries

## Demo

The project is hosted on Netlify (using the production branch) which you can view [here](https://magnificent-starlight-61efc9.netlify.app).

To run the project locally, clone the repository and run:

```bash
npm install
npm start
```
