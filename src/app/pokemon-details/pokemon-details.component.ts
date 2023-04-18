import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
 
@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.scss']
})

export class PokemonDetailsComponent implements OnInit, OnDestroy {
  pokemon: any;
  id: number;
  private routeSubscription: Subscription;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.id = 0;
    this.routeSubscription = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.fetchPokemonDetails();
  }

  ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }

  fetchPokemonDetails(): void {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`).subscribe((response: any) => {
      this.pokemon = response;
    });
  }
}

