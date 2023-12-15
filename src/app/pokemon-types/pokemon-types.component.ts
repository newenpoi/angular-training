import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { PokemonTypeDetails } from '../model/pokemon/pokemon-type-details';
import { Type } from '../model/pokemon/pokemon-type';
import { PokemonService } from '../service/pokemon.service';

@Component({
    selector: 'app-pokemon-types',
    templateUrl: './pokemon-types.component.html',
    styleUrls: ['./pokemon-types.component.scss']
})

export class PokemonTypesComponent implements OnInit {
    @Input() types!: Type[];
    details: PokemonTypeDetails[] = [];

    weaknesses = [];
    resistances = [];
    nullified = [];

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

    constructor(private service: PokemonService) {}

    ngOnInit(): void {}

    ngOnChanges(changes: SimpleChanges): void {
        if (changes['types'] && changes['types'].currentValue) {
            this.types.forEach(type => {
                this.service.fetchTypeDetails(type.type.name).subscribe(data => {
                    this.details.push(data);
                });
            });
        }
    }

    getTypeColor(type: string): string {
        // Couleur par défaut si le type est inconnu.
        return this.typeColors[type.toLowerCase()] || 'bg-gray-200';
    }

    calcWeakness(attackingType: string): string {
        let multiplier = 1;
    
        this.details.forEach(detail => {
            if (detail.damage_relations.double_damage_from.some(type => type.name === attackingType)) {
                multiplier *= 2;
            }
            
            if (detail.damage_relations.half_damage_from.some(type => type.name === attackingType)) {
                multiplier *= 0.5;
            }

            if (detail.damage_relations.no_damage_from.some(type => type.name === attackingType)) {
                multiplier = 0;
            }
        });
    
        if (multiplier === 0) return 'X0';
        if (multiplier === 2) return 'X2';
        if (multiplier === 4) return 'X4';
        
        // No particular weakness or resistance.
        return 'X1';
    }
}
