export interface Pokemon {
    name: string;
    url: string; // This uri will allow us to fetch detailed information.

    id?: number;
    types?: Array<{ type: { name: string } }>;
    sprite?: string;
    species?: { name: string, url: string; };
}