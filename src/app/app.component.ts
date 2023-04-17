import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  // readonly ROOT_URL = 'https://pokeapi.co/api/v2/pokemon';

  // constructor(private http: HttpClient) {}

  // pokemonList: any;

  // getAllPokemon() {
  //   this.pokemonList = this.http.get(`${this.ROOT_URL}/?limit=151`);
  //   console.log(this.pokemonList.results)
  // }
}
