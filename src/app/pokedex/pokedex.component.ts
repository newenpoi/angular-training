import { Component, HostListener, OnInit } from '@angular/core';
import { PokemonService } from '../service/pokemon.service';
import { Pokemon } from '../model/pokemon/pokemon.model';

@Component({
    selector: 'app-pokedex',
    templateUrl: './pokedex.component.html',
    styleUrls: ['./pokedex.component.scss']
})

export class PokedexComponent implements OnInit {
    pokemons: Pokemon[] = [];
    
    isLoading = false;
    allDataLoaded = false;
    offset = 0;
    limit = 24;

    constructor(private service: PokemonService) { }

    ngOnInit() {
        // On utilise loadMore() désormais.
        // this.service.findAll(this.offset, this.limit).subscribe(data => { this.pokemons = data });

        this.loadMore();
    }

    loadMore() {
        if (this.isLoading || this.allDataLoaded) return;

        this.isLoading = true;
        this.service.findAll(this.offset, this.limit).subscribe(data => {
            this.pokemons = [...this.pokemons, ...data];
            this.offset += this.limit;

            this.isLoading = false;
            if (data.length < this.limit) this.allDataLoaded = true;
        });
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(): void {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
            this.loadMore();
        }
    }
}