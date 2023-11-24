import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable, map, of, shareReplay } from 'rxjs';
import { Pokemon } from "../model/pokemon.model";
import { PokemonExtended } from "../model/pokemon.extended.model";

@Injectable({
    providedIn: 'root'
})

/*
    This service fetches the basic list of Pokemons and detailed information for a specific Pokemon.
    The map operator from RxJS is used to transform the response into the desired format according to our operational model.
    Author : Moi
*/

export class PokemonService {
    private cache = new Map<string, Observable<PokemonExtended>>();
    
    private url!: string;

    constructor(private http: HttpClient) {
        this.url = 'https://pokeapi.co/api/v2/pokemon';
    }

    public findAll(offset: number, limit: number): Observable<Pokemon[]> {
        return this.http.get<any>(`${this.url}/?limit=${limit}&offset=${offset}`).pipe(map(response => response.results as Pokemon[]));
    }

    public findOne(name: string): Observable<PokemonExtended> {
        if (!this.cache.has(name)) {
            const observable = this.http.get<any>(`${this.url}/${name}`).pipe(
                map(response => ({
                    name: response.name,
                    url: `${this.url}/${name}`,
                    id: response.id,
                    types: response.types,
                    sprite: response.sprites.front_default
                } as PokemonExtended)), shareReplay(1)
            );

            this.cache.set(name, observable);
        }

        // Fallback to an empty observable (une approche défensive).
        return this.cache.get(name) || of({} as PokemonExtended);
    }
}