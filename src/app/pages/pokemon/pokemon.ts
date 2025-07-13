import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonService } from '../../services/pokemon';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './pokemon.html',
  styleUrls: ['./pokemon.css'],
  providers: [PokemonService]
})
export class PokemonComponent {
  pokemonName: string = '';
  pokemonData: any = null;
  pokemons: any[] = [];
  errorMessage: string = '';
  isEditing: boolean = false;
  editIndex: number = -1;

  constructor(private pokemonService: PokemonService) {}

  buscarPokemon() {
    this.errorMessage = '';
    if (!this.pokemonName.trim()) return;

    this.pokemonService.getPokemon(this.pokemonName.trim().toLowerCase()).subscribe({
      next: (data) => {
        this.pokemonData = {
          name: data.name,
          image: data.sprites.front_default,
          types: data.types.map((t: any) => t.type.name).join(', '),
          experience: data.base_experience,
          height: data.height,
          weight: data.weight
        };
        this.pokemons.push(this.pokemonData);
        this.pokemonName = '';
      },
      error: () => {
        this.errorMessage = 'Pokémon no encontrado.';
        this.pokemonData = null;
      }
    });
  }

  eliminar(index: number) {
    this.pokemons.splice(index, 1);
  }

  editar(index: number) {
    this.isEditing = true;
    this.editIndex = index;
    this.pokemonData = { ...this.pokemons[index] };
  }

  guardarEdicion() {
    if (this.editIndex >= 0) {
      this.pokemons[this.editIndex] = { ...this.pokemonData };
      this.cancelarEdicion();
    }
  }

  cancelarEdicion() {
    this.isEditing = false;
    this.editIndex = -1;
    this.pokemonData = null;
  }
}
