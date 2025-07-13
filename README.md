# 📦 Angular Pokédex App

Aplicación web desarrollada con **Angular 20**, que permite buscar Pokémon por nombre utilizando la [PokeAPI](https://pokeapi.co/), visualizarlos en una tarjeta, y gestionarlos en una tabla interactiva con opciones de editar y eliminar.

### 🌐 Demo

> ✅ Interfaz moderna con fondo personalizado y animaciones.  
> 🧠 Datos obtenidos en tiempo real desde una API pública.  
> 💾 Gestión de múltiples Pokémon en una tabla editable.

---

## 🚀 Tecnologías usadas

- [Angular 20](https://angular.io/)
- HTML, CSS moderno (con `backdrop-filter`)
- Consumo de APIs REST con `HttpClient`
- Bootstrap (solo en diseño base opcional)

---

## 📸 Capturas

<img width="800" alt="image1" src="https://github.com/user-attachments/assets/89806e30-7d72-462e-89dc-5966d5a8bddf" />
<img width="800" alt="image2" src="https://github.com/user-attachments/assets/4abbdfd6-01eb-45f3-8a0c-7212772332cb" />
<img width="800" alt="image3" src="https://github.com/user-attachments/assets/9a45bdbf-93b9-4a30-a5a5-6ca1625f6895" />
<img width="800" alt="image4" src="https://github.com/user-attachments/assets/3b37dcec-ec0b-4b38-966c-11cc559e73fc" />
<img width="800" alt="image5" src="https://github.com/user-attachments/assets/5a4b97c7-ee6f-4924-8ced-7abb0573c88d" />

---

## 🛠 Instalación

```bash
git clone https://github.com/tuusuario/angular-pokedex-app.git
cd angular-pokedex-app
npm install
ng serve
```

> Abre en tu navegador: [http://localhost:4200](http://localhost:4200)

---

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── pages/
│   │   ├── login/
│   │   ├── pokemon/
│   │   │   ├── pokemon.component.ts
│   │   │   ├── pokemon.component.html
│   │   │   ├── pokemon.component.css
│   ├── services/
│   │   └── pokemon.ts
├── assets/
│   └── fondo.jpg
```

---

## 🔍 Funcionalidades

### 🔎 Búsqueda de Pokémon

```ts
buscarPokemon() {
  this.pokemonService.getPokemonByName(this.pokemonName.toLowerCase())
    .subscribe(data => {
      this.pokemonData = data;
      this.pokemons.push(data);
      this.pokemonName = '';
    });
}
```

### 🧾 Edición in-place en formulario

```html
<div class="field-group">
  <label for="name">Nombre</label>
  <input id="name" [(ngModel)]="pokemonData.name" />
</div>
```

### 🧹 Eliminación instantánea

```ts
eliminar(index: number) {
  this.pokemons.splice(index, 1);
}
```

---

## 🎨 Estilo

Incluye efectos como:

```css
.thumbnail:hover {
  transform: scale(1.6);
  z-index: 10;
  box-shadow: 0 4px 12px rgba(0,0,0,0.3);
}
```

Fondo con blur:

```css
.pokemon-container {
  background: rgba(255, 255, 255, 0.30);
  backdrop-filter: blur(16px) saturate(160%);
}
```

---

## 📌 Notas

- Los datos no se guardan en un backend, solo existen mientras la app está abierta.
- Las imágenes de los Pokémon se muestran tanto en la tarjeta como en miniatura dentro de la tabla.

---

## 👤 Autor

**Vicente de Jesús Zenón Regalado**  
**Eric Aaron Juarez Fernandez**  
Estudiantes de Ingeniería en Sistemas Computacionales - Instituto Tecnológico de Oaxaca  
Equipo 9  
📧 [vicenteregalado11@hotmail.com](mailto:vicenteregalado11@hotmail.com)  
📸 [Instagram: @vicentevx7](https://instagram.com/vicentevx7)  
📧 [eric.aaron.jf@gmail.com](mailto:eric.aaron.jf@gmail.com)  
📸 [Instagram: @erico](https://instagram.com/_eric_juarezz)

---

## ⭐ Créditos

- [PokeAPI](https://pokeapi.co/) por los datos abiertos de Pokémon.
```

---
