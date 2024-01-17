import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import {
  map,
  debounceTime,
  distinctUntilChanged,
  filter,
} from 'rxjs/operators';
import { Pokemon } from '../app.interface';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent implements AfterViewInit {
  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(private readonly httpClient: HttpClient, private readonly router: Router) {}

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter((event: any) => event.key === 'Enter'),
        map((event: any) => event.target.value),
        debounceTime(300)
      )
      .subscribe((text: string) => {
        this.router.navigate([text.toLowerCase()]);
      });
  }
}
