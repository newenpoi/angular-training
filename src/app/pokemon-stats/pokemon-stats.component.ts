import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Stat } from '../model/pokemon/stat.model';

@Component({
    selector: 'app-pokemon-stats',
    templateUrl: './pokemon-stats.component.html',
    styleUrls: ['./pokemon-stats.component.scss']
})

export class PokemonStatsComponent implements OnChanges {
    @Input() stats!: Stat[];
    maxStat: number = 255;

    // Convention de nommage pour le projet.
    naming: { [key: string]: string } = {
        'hp': 'HP',
        'attack': 'ATT',
        'defense': 'DEF',
        'special-attack': 'SPE ATT',
        'special-defense': 'SPE DEF',
        'speed': 'SPD'
    };

    constructor() { }

    ngOnChanges(changes: SimpleChanges): void {
        // Si des changements apparaissent et qu'une valeur existe.
        if (changes['stats'] && changes['stats'].currentValue) {
            // Et c'est là qu'on peut faire ce qu'on veut des stats si nécessaire.
        }
    }

    getStatHeight(baseStat: number): string {
        return (baseStat / (this.maxStat * 100)) + '%';
    }

    getStatWidth(baseStat: number): string {
        return (baseStat / this.maxStat * 100) + '%';
    }

    getStatNaming(stat: string): string {
        // Couleur par défaut si le type est inconnu.
        return this.naming[stat] || 'UNKNOWN';
    }
}
