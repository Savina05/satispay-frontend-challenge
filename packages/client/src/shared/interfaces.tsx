export interface IButtonType {
  text: string;
  endpoint: string;
}

export interface IPokemon {
  cursor: string;
  node: {
    cursor: string;
    name: string;
    classification: string;
    types: [string];
  };
}

export interface IPokemonQuery {
  pokemons: {
    edges: IPokemon[];
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
    };
  };
}
