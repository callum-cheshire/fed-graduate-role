import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons!: number;

  constructor(
  private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getPokemons()
  }

  getPokemons() {
    const offset = (this.page - 1) * 50;
    this.dataService.getPokemon(offset)
    .subscribe((response: any) => {
      this.totalPokemons = response.count;
      response.results.forEach((result: { name: string; }) => {
        this.dataService.getMoreData(result.name)
        .subscribe((uniqueResponse: any) => {
          this.pokemons.push(uniqueResponse);
          console.log(this.pokemons)
        })
      })
    });
  }
  

}
