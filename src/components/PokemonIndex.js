import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import { Search } from "semantic-ui-react";
import _ from "lodash";

class PokemonPage extends React.Component {
  state = {
    pokemonCollection: [],
    searchTerm: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/pokemon")
      .then(res => res.json())
      .then(pokemonCollection =>
        this.setState({ pokemonCollection: pokemonCollection })
      )
      .catch(e => console.error(e));
  }

  handleSearchChange = (e, data) => {
    this.setState({
      searchTerm: data.value
    });
  };

  addPokemon = pokemon => {
    this.setState({
      pokemonCollection: [...this.state.pokemonCollection, pokemon]
    });
  };

  render() {
    const newArr = this.state.pokemonCollection.filter(pokemon => {
      return pokemon.name.includes(this.state.searchTerm);
    });

    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search
          onSearchChange={this.handleSearchChange}
          showNoResults={false}
        />
        <br />
        <PokemonForm addPokemon={this.addPokemon} />
        <br />
        <PokemonCollection collection={newArr} />
        <br />
      </div>
    );
  }
}

export default PokemonPage;
