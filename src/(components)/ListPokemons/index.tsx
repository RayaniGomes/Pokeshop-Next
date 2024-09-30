'use client'

import { LitsPokemonsProps } from "@/interfaces/interface";
import Card from "../card/page";

export default function LitsPokemons({ pokemons }: LitsPokemonsProps) {
    return (
        <Card pokemons={pokemons} />
    );
}
