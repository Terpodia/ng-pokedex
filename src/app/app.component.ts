import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Pokemon } from './app.interface';
import { Observable } from 'rxjs';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, PokemonCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'pokedex de los reyes 2008';
  pokemons: Pokemon[] = [];

  constructor(private readonly httpClient: HttpClient) {}

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.httpClient.get<Pokemon>(API_URL + (i+1)).subscribe((item) => {
        this.pokemons[i] = item;
      });
    }
  }
}
