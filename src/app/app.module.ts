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
import { AppRoutingModule } from './app-routing.module';
import { PokemonStatsComponent } from './pokemon-stats/pokemon-stats.component';
import { PokemonTypesComponent } from './pokemon-types/pokemon-types.component';
import { LandingComponent } from './landing/landing.component';
import { ChatComponent } from './messenger/chat/chat.component';
import { ChatGroupComponent } from './messenger/chat-group/chat-group.component';
import { ChatMessageComponent } from './messenger/chat-message/chat-message.component';

@NgModule({
    declarations: [
        AppComponent,
        StatsDisplayComponent,
        NumeralFormatPipe,
        ProgressiveResponseComponent,
        PokedexComponent,
        PokemonComponent,
        PokemonSingleComponent,
        PokemonStatsComponent,
        PokemonTypesComponent,
        LandingComponent,
        ChatComponent,
        ChatGroupComponent,
        ChatMessageComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [HttpClient],
    bootstrap: [AppComponent]
})

export class AppModule { }
