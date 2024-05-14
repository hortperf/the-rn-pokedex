import {PokemonClient} from 'pokenode-ts';

// ================================================================================
// Branch 1 2
// ================================================================================
export async function listPokemons() {
  const pokemonClient = new PokemonClient();

  // only return the first 151 pokemons...
  return await pokemonClient.listPokemons(0, 151);
}
// ================================================================================
