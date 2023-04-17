import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemon(offset: number) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`);
  }
  

  getMoreData(name: string) {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
  }
}
