import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon/pokemon.model';
import { PokemonService } from '../service/pokemon.service';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.scss']
})

export class PokemonComponent implements OnInit {
    
    @Input() pokemon!: Pokemon;

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

    constructor(private service: PokemonService) { }

    ngOnInit(): void {
        // Avec cette approche on utilise le `spread operator` qui nous permet d'étendre les propriétés d'un objet vers un autre (on combine les propriétés).
        this.service.findOne(this.pokemon.name).subscribe(data => { this.pokemon = {...this.pokemon, ...data}; });
    }

    getTypeColor(type: string): string {
        // Couleur par défaut si le type est inconnu.
        return this.typeColors[type.toLowerCase()] || 'bg-gray-200';
    }
}
