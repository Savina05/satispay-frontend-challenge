import { gql, useQuery } from '@apollo/client';
import { IPokemon } from '../../shared/interfaces';

const POKEMONS_BY_TYPE = gql`
  query Pokemons($type: String!, $limit: Int, $after: ID) {
    pokemonsByType(type: $type, limit: $limit, after: $after) {
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
