'use client'

import { PokemonDetails } from "@/interfaces";
import Card from "../card";
import { CardsPokemon } from "../card/styled";

interface LitsPokemonsProps {
    pokemons: PokemonDetails[];
}
export default function LitsPokemons({ pokemons }: LitsPokemonsProps) {
    return (
        <CardsPokemon>

            {pokemons.map((pokemon) => (
                <Card pokemon={pokemon} key={pokemon.id} />
            ))}
        </CardsPokemon>
    );
}
