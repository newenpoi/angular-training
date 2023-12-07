import { Type } from "./pokemon-type";

export interface Pokemon {
    name: string;
    url: string; // This uri will allow us to fetch detailed information.

    id?: number;
    types?: Array<Type>;
    sprite?: string;
    artwork?: string;
    
	// Contains infos like evolutions, descriptions, ...
	// The url is the following for example : https://pokeapi.co/api/v2/pokemon-species/5
    species: { name: string, url: string; };
}