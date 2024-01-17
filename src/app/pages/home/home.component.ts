import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PokemonCardComponent } from '../../pokemon-card/pokemon-card.component';
import { SearchBarComponent } from '../../search-bar/search-bar.component';
import { Pokemon } from '../../app.interface';
import { Router } from '@angular/router';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PokemonCardComponent, SearchBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  title = 'pokedex de los reyes 2008';
  pokemons: Pokemon[] = [];

  constructor(private readonly httpClient: HttpClient, private readonly router: Router) {}

  ngOnInit(): void {
    for (let i = 0; i < 20; i++) {
      this.httpClient.get<Pokemon>(API_URL + (i+1)).subscribe((item) => {
        this.pokemons[i] = item;
      });
    }
  }

  search(name: string): void {
    this.router.navigate([name]);
  }
}
