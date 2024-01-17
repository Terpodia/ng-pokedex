import { Component, Input } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { Pokemon } from '../app.interface';
import { mapType2Color } from '../utils/constants';

@Component({
  selector: 'app-pokemon-info',
  standalone: true,
  imports: [CommonModule, JsonPipe],
  templateUrl: './pokemon-info.component.html',
  styleUrl: './pokemon-info.component.scss',
})
export class PokemonInfoComponent {
  readonly mapType2Color = mapType2Color;
  @Input() pokemon!: Pokemon;
}
