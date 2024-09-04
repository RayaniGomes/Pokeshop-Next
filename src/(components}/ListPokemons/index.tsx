'use client'
import { ReactNode, useEffect, useState } from "react"

interface LitsPokemonsProps {
    pokemons: string[];
    image?: ReactNode;
}

export default function LitsPokemons({pokemons}: LitsPokemonsProps) {
    const [types, setTypes] = useState<string>("")
    useEffect(() => {
        setTypes('FOI TIOPADO')
    }, [])

    console.log(pokemons)
    return (
        <div>
            <ul>
            {pokemons.map((pokemon: any) => (
                <li key={pokemon}>{pokemon}</li>
            ))}
            </ul>
        </div>
        // <div className="flex flex-row gap-2">
        //     <ul>
        //         {pokemons.map((pokemon: any) => (
        //             <li key={pokemon.name}>{pokemon.name}</li>
        //         ))}
        //     </ul>

        //     <ul>
        //         {types.map((typo: any) => (
        //             <li key={typo.name}>{typo.name}</li>
        //         ))}
        //     </ul>
            
        //     <ul>
        //         {imagens.map((imgPokemon: string, index: number) => (
        //             <li key={index}>
        //                 <Image src={imgPokemon} alt={`Pokemon ${index}`} width={100} height={100} />
        //             </li>
        //         ))}
        //     </ul>
        // </div>
    )
}