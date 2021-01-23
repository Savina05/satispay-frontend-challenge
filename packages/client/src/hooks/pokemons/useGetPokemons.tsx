import { gql, useQuery } from '@apollo/client';
import { IPokemonQuery } from '../../shared/interfaces';

const GET_POKEMONS = gql`
  query Pokemons($name: String, $limit: Int, $after: ID) {
    pokemons(q: $name, limit: $limit, after: $after) {
      edges {
        cursor
        node {
          name
          classification
          types
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const useGetPokemons = (): IPokemonQuery => {
  const { data } = useQuery(GET_POKEMONS);
  return data;
};
