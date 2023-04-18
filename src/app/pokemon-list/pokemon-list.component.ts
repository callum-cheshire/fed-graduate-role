import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})

export class PokemonListComponent implements OnInit {
  pokemons: any[] = [];
  totalPokemons!: number;
  pokemonID = "";
  page = 1;
  fontPath = "../../../fonts/Pokemon Solid.ttf"

  constructor(
  private dataService: DataService,
  private route: ActivatedRoute,
  private router: Router
  ) {}
  
  onPokemonClick(id: number): void {
    this.router.navigate(['/pokemon', id]);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.page = +params['page'] || 1;
      this.getPokemons();
    });
  }

  onPageChange(newPage: number): void {
    this.router.navigate(['/pokemon'], { queryParams: { page: newPage } });
  }

  getPokemons() {
    const offset = (this.page - 1) * 50;
    this.pokemons = []; // Clear the existing pokemons array
    this.dataService.getPokemon(offset)
    .subscribe((response: any) => {
      this.totalPokemons = response.count;
      response.results.forEach((result: { name: string; }) => {
        this.dataService.getMoreData(result.name)
        .subscribe((uniqueResponse: any) => {
          this.pokemons.push(uniqueResponse);
        })
      })
    });
  }

}
