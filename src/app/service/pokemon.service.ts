import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, shareReplay } from 'rxjs';
import { Pokemon } from "../model/pokemon/pokemon.model";
import { PokemonExtended } from "../model/pokemon/pokemon.extended.model";
import { PokemonTypeDetails } from "../model/pokemon/pokemon-type-details";

@Injectable({
    providedIn: 'root'
})

/*
    This service fetches the basic list of Pokemons and detailed information for a specific Pokemon.
    The map operator from RxJS is used to transform the response into the desired format according to our operational model.
    Author : Moi
*/

export class PokemonService {

    private cache = new Map<number | string, Observable<PokemonExtended>>();
    private url!: string;

    constructor(private http: HttpClient) {
        this.url = 'https://pokeapi.co/api/v2/pokemon';
    }

    public findAll(offset: number, limit: number): Observable<Pokemon[]> {
        return this.http.get<any>(`${this.url}/?limit=${limit}&offset=${offset}`).pipe(map(response => response.results as Pokemon[]));
    }

    public findOne(identifier: number | string): Observable<PokemonExtended> {
        if (!this.cache.has(identifier)) {
            const observable = this.http.get<any>(`${this.url}/${identifier}`).pipe(
                map(response => ({
                    name: response.name,
                    url: `${this.url}/${identifier}`,
                    id: response.id,
                    types: response.types,
                    sprite: response.sprites.front_default,
                    artwork: response.sprites.other['official-artwork'].front_default || 'path/to/default/image.png',
                    abilities: response.abilities,
                    stats: response.stats
                } as PokemonExtended)), shareReplay(1)
            );

            this.cache.set(identifier, observable);
        }

        // Fallback to an empty observable (une approche défensive).
        return this.cache.get(identifier) || of({} as PokemonExtended);
    }

    public fetchTypeDetails(name: string): Observable<PokemonTypeDetails> {
        return this.http.get<PokemonTypeDetails>(`https://pokeapi.co/api/v2/type/${name}`);
    }
    
}