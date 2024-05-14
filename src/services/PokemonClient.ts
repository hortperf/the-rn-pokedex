import {PokemonClient} from 'pokenode-ts';

export async function listPokemons() {
  const pokemonClient = new PokemonClient();

  // only return the first 151 pokemons...
  return await pokemonClient.listPokemons(0, 151);
}
