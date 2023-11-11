import { Component } from '@angular/core';
import { Stat } from '../model/stat.model';

@Component({
    selector: 'app-stats-display',
    templateUrl: './stats-display.component.html',
    styleUrls: ['./stats-display.component.scss']
})

export class StatsDisplayComponent {
    stars: number = 1; // Default Hanamaru.
    totalStars: number = 8; // Max stars possible.
    level: number = 1; // Default level (multiplier).
    
    // Property to keep track of the currently hovered star index.
    hoveredStarIndex: number | null = null;
    
    // Those are the base stats (you can also get them from a database, slight adjustements needed, see rxjs's observer documentation).
    stats: Stat[] = [
        { name: 'Attack', baseValue: 300 },
        { name: 'Defense', baseValue: 39 },
        { name: 'HP', baseValue: 600 },
        { name: 'Accuracy', baseValue: 11 },
        { name: 'Evasion', baseValue: 21 },
        { name: 'Critical Rate', baseValue: 16 },
        { name: 'Stability', baseValue: 150 },
        { name: 'Firing Range', baseValue: 80 },
        { name: 'CC Strength', baseValue: 22 },
        { name: 'Attack Speed', baseValue: 10000, immutable: true },
        { name: 'Movement Speed', baseValue: 200, immutable: true  },
        { name: 'Cost Recovery', baseValue: 100, immutable: true  }
    ]

    constructor() {}

    get starsArray() { return new Array(this.totalStars); }

    ngOnInit(): void {
        this.calculateStats(1);
    }

    calculateStats(index: number) {
        // The star multiplier (5% stonk per star above 1).
        const multiplier = 1 + (0.05 * index);

        // The level multiplier (2% stonk per level above 1).
        const levelMultiplier = 1 + (0.02 * (this.level - 1));

        this.stats.forEach(stat => {
            if (!stat.immutable) stat.value = (stat.baseValue * multiplier * levelMultiplier);
            else {
                // Immutable stat remains unchanged (not using the keyword continue since characters might have different immutable stats (anticipation)).
                stat.value = stat.baseValue;
            }
        });
    }

    // Updating the hovered star index.
    updateHoveredStarIndex(index: number): void {
        this.hoveredStarIndex = index;
        this.stars = index + 1;

        // Recalculates.
        this.calculateStats(index + 1);
    }

    // Logic to determine if a star should be highlighted.
    isStarActive(index: number): boolean {
        // If we are not hovering, use the current active stars.
        if (this.hoveredStarIndex === null) return index < this.stars;
        
        // If we are hovering, highlight stars up to and including the hovered index.
        return index <= this.hoveredStarIndex;
    }

    // Providing a trackBy (when using ngfor) can improve performance by helping Angular to keep track of items in the array and prevent unnecessary DOM manipulations.
    trackByIndex(index: number, item: any): any { return index; }
}
