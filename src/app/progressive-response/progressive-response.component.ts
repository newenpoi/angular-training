import { Component, Input } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';

@Component({
    selector: 'app-progressive-response',
    templateUrl: './progressive-response.component.html',
    styleUrls: ['./progressive-response.component.scss']
})

export class ProgressiveResponseComponent {

    // @Input() responseObservable!: Observable<any>;
    @Input() characterDelay = 50;

    displayed: string = "";
    message = { content: "This message should be displayed progressively." };
    private intervalId: any;

    constructor() { }

    ngOnInit(): void {
        const dummy: Observable<any> = of(this.message).pipe(delay(1000));

        dummy.subscribe(response => {
            let currentIndex = 0;
            this.intervalId = setInterval(() => {
                if (currentIndex < response.content.length) {
                    this.displayed += response.content[currentIndex++];
                } else {
                    clearInterval(this.intervalId);
                }
            }, this.characterDelay);
        });
    }

    send(): void { }

    ngOnDestroy(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}
