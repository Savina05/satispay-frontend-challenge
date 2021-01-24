import { gql, useQuery } from '@apollo/client';
import { IPokemonQuery } from '../../shared/interfaces';

const GET_POKEMONS = gql`
  query Pokemons($limit: Int, $after: ID) {
    pokemons(limit: $limit, after: $after) {
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
  const { data } = useQuery(GET_POKEMONS, {
    variables: { limit: 151 },
  });
  return data;
};
