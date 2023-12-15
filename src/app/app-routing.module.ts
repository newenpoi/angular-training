import { NgModule } from '@angular/core';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonSingleComponent } from './pokemon-single/pokemon-single.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { StatsDisplayComponent } from './stats-display/stats-display.component';
import { ChatComponent } from './chat-bot/chat/chat.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'pokedex', component: PokedexComponent },
    { path: 'pokemon/:id', component: PokemonSingleComponent },
    { path: 'dhana', component: ChatComponent },
    { path: 'stats', component: StatsDisplayComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
