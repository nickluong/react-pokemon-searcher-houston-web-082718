import React from "react";
import { Card } from "semantic-ui-react";

class PokemonCard extends React.Component {
  state = {
    clicked: false
  };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    let pokemon = this.props.pokemon;
    return (
      <Card>
        <div>
          <div className="image">
            <img
              src={
                this.state.clicked
                  ? pokemon.sprites.back
                  : pokemon.sprites.front
              }
              alt="oh no!"
              onClick={this.handleClick}
            />
          </div>
          <div className="content">
            <div className="header">{pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.stats[5].value}
            </span>
          </div>
        </div>
      </Card>
    );
  }
}

export default PokemonCard;
