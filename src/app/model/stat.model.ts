export interface Stat {
    name: string;
    baseValue: number;
    value?: number; // This will be computed based on the base value along with the level and star multiplier.
    immutable?: boolean; // Indicates whether the stat moves according to a multiplier.
}