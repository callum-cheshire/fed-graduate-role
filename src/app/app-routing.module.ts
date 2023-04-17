import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';

const routes: Routes = [
  { 
    path: '',
    component: PokemonListComponent,
    children: [
      { path: ':id', component: PokemonDetailComponent }
    ] 
  },
  { 
    path: 'pokemon-detail', 
    component: PokemonDetailComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
