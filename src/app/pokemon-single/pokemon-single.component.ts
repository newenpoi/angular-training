import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonExtended } from '../model/pokemon/pokemon.extended.model';
import { PokemonService } from '../service/pokemon.service';

@Component({
    selector: 'app-pokemon-single',
    templateUrl: './pokemon-single.component.html',
    styleUrls: ['./pokemon-single.component.scss']
})

export class PokemonSingleComponent implements OnInit {
    pokemon: PokemonExtended = {} as PokemonExtended;

    // Avec une technique clé valeur pour obtenir correctement une classe tailwind.
    typeColors: { [key: string]: string } = {
        'normal': 'bg-gray-400',
        'fire': 'bg-red-500',
        'water': 'bg-blue-500',
        'electric': 'bg-yellow-300',
        'grass': 'bg-green-500',
        'ice': 'bg-blue-200',
        'fighting': 'bg-red-700',
        'poison': 'bg-purple-600',
        'ground': 'bg-yellow-600',
        'flying': 'bg-indigo-300',
        'psychic': 'bg-pink-500',
        'bug': 'bg-lime-500',
        'rock': 'bg-yellow-800',
        'ghost': 'bg-purple-800',
        'dark': 'bg-gray-800',
        'dragon': 'bg-indigo-700',
        'steel': 'bg-gray-500',
        'fairy': 'bg-pink-300'
    };

    constructor(private service: PokemonService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit() {
        const id = +this.route.snapshot.params['id'];
        this.service.findOne(id).subscribe(data => { this.pokemon = data });
    }

    getTypeColor(type: string): string {
        // Couleur par défaut si le type est inconnu.
        return this.typeColors[type.toLowerCase()] || 'bg-gray-200';
    }
}
