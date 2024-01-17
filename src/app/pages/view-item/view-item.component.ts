import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../app.interface';
import { PokemonCardComponent } from '../../pokemon-card/pokemon-card.component';
import { switchMap } from 'rxjs';
import { PokemonInfoComponent } from '../../pokemon-info/pokemon-info.component';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

@Component({
  selector: 'app-view-item',
  standalone: true,
  imports: [PokemonInfoComponent],
  templateUrl: './view-item.component.html',
  styleUrl: './view-item.component.scss',
})
export class ViewItemComponent implements OnInit {
  id: string | null = null;
  pokemon!: Pokemon;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params) => {
          this.id = params.get('id');
          return this.httpClient.get<Pokemon>(
            (API_URL + this.id).toLowerCase()
          );
        })
      )
      .subscribe((item) => (this.pokemon = item));
  }
}
