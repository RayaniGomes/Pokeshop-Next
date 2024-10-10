'use client';
import Pokemons from "@/(components)/pokemons";
import PokemonTypes from "@/(components)/pokemonTypes";

export default function Pokedex() {
    return (
        <main>
            <h1>Pokedex</h1>

            <PokemonTypes />

            <Pokemons />
        </main>
    );
}
