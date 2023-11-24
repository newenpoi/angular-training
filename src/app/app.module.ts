import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StatsDisplayComponent } from './stats-display/stats-display.component';

import { FormsModule } from '@angular/forms';
import { NumeralFormatPipe } from './pipes/numeral-format.pipe';
import { ProgressiveResponseComponent } from './progressive-response/progressive-response.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonSingleComponent } from './pokemon-single/pokemon-single.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        StatsDisplayComponent,
        NumeralFormatPipe,
        ProgressiveResponseComponent,
        PokedexComponent,
        PokemonComponent,
        PokemonSingleComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent]
})

export class AppModule { }
