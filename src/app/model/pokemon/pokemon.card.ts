import { Pokemon } from "./pokemon.model";

export interface PokemonCard extends Pokemon {
    id: number;
    types: Array<{ type: { name: string } }>;
    sprite: string;
    
	// Contains infos like evolutions, descriptions, ...
	// The url is the following for example : https://pokeapi.co/api/v2/pokemon-species/5
    species: { name: string, url: string; };
}