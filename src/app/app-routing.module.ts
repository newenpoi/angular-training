import { NgModule } from '@angular/core';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonSingleComponent } from './pokemon-single/pokemon-single.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', component: PokedexComponent },
    { path: 'pokemon/:id', component: PokemonSingleComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
