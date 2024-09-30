'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

interface PokemonDetails {
    name: string;
    types: string[];
    image: string;
}

interface LitsPokemonsProps {
    pokemons: PokemonDetails[];
}

export default function LitsPokemons({ pokemons }: LitsPokemonsProps) {
    const [types, setTypes] = useState<string>("");

    useEffect(() => {
        setTypes('');
    }, []);

    console.log(pokemons);

    return (
        <div>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.name}>
                        <h3>{pokemon.name}</h3>
                        <Image 
                            src={pokemon.image} 
                            alt={pokemon.name} 
                            width={100}
                            height={100}
                        />
                        <p>Types: {pokemon.types.join(', ')}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
