'use client'

import { LitsPokemonsProps } from "@/interfaces";
import Card from "../card/page";
import { CardsPokemon } from "../card/styled";

export default function LitsPokemons({ pokemons }: LitsPokemonsProps) {
    return (
        <CardsPokemon>
            {pokemons.map((pokemon) => (
                <Card pokemon={pokemon} key={pokemon.id} />
            ))}
        </CardsPokemon>
    );
}
