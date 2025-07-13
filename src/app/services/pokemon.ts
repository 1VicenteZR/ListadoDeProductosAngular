import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  getPokemon(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}${name.toLowerCase()}`);
  }

  getPokemons(limit: number = 20, offset: number = 0): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}?limit=${limit}&offset=${offset}`);
  }
}
