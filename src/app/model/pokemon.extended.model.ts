import { Pokemon } from './pokemon.model';

export interface PokemonExtended extends Pokemon {
    id: number;
    types: Array<{ type: { name: string } }>;
    sprite: string;

    // More properties.
}