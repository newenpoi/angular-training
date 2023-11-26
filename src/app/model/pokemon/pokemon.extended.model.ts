import { Ability } from './ability.model';
import { Move } from './move.model';
import { Pokemon } from './pokemon.model';
import { Stat } from './stat.model';

export interface PokemonExtended extends Pokemon {
    id: number;
    types: Array<{ type: { name: string } }>;
    artwork: string;

    // More properties used for PokemonSingleComponent.
    base_experience: number; // Will be used for our sub component PokemonExperience.
    height: number;
    weight: number;

    abilities: Ability[];
    stats: Stat[];
    moves: Move[];
}