import { Ability } from './ability.model';
import { Move } from './move.model';
import { PokemonCard } from './pokemon.card';
import { Stat } from './stat.model';

export interface PokemonExtended extends PokemonCard {
    // This is where we can have fun and use as many information as we want for our extended information.
    artwork: string;
    base_experience: number; // Will be used for our sub component PokemonExperience.
    height: number;
    weight: number;

    abilities: Ability[];
    stats: Stat[];
    moves: Move[];
}