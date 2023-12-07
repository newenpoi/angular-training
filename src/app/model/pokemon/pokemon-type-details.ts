export interface PokemonTypeDetails {
    damage_relations: {
        double_damage_from: Array<{ name: string, url: string }>;
        double_damage_to: Array<{ name: string, url: string }>;
        half_damage_from: Array<{ name: string, url: string }>;
        half_damage_to: Array<{ name: string, url: string }>;
        no_damage_from: Array<{ name: string, url: string }>;
        no_damage_to: Array<{ name: string, url: string }>;
    };
    id: number;
    name: string;
}
