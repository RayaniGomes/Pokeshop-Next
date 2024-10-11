import { PokemonDetails } from "@/interfaces";
import Image from "next/image";

interface PokemonNamesProps {
    pokemons: PokemonDetails[];
}

export default function PokemonTypes({ pokemons }: PokemonNamesProps) {

    const types = [
        {
            id: 1,
            name: 'normal', 
            image: '/img/iconTipos/normal.png'
        },
        {
            id: 2,
            name: 'fighting', 
            image: '/img/iconTipos/fighting.png'
        },
        {
            id: 3,
            name: 'flying', 
            image: '/img/iconTipos/flying.png'
        },
        {
            id: 4,
            name: 'poison', 
            image: '/img/iconTipos/poison.png'
        },
        {
            id: 5,
            name: 'ground', 
            image: '/img/iconTipos/ground.png'
        },
        {
            id: 7,
            name: 'bug', 
            image: '/img/iconTipos/bug.png'
        },
        {
            id: 17,
            name: 'dark', 
            image: '/img/iconTipos/dark.png'
        },
        {
            id: 16,
            name: 'dragon',
            image: '/img/iconTipos/dragon.png'
        },
        {
            id:13,
            name: 'electric',
            image: '/img/iconTipos/electric.png'
        },
        {
            id: 18,
            name: 'fairy', 
            image: '/img/iconTipos/fairy.png'
        },
        
        {
            id: 10,
            name: 'fire',
            image: '/img/iconTipos/fire.png'
        },
        
        {
            id: 8,
            name: 'ghost', 
            image: '/img/iconTipos/ghost.png'
        },
        {
            id: 12,
            name: 'grass', 
            image: '/img/iconTipos/grass.png'
        },
        
        {   
            id: 15,
            name: 'ice', 
            image: '/img/iconTipos/ice.png'
        },
        
        {
            id: 14,
            name: 'psychic', 
            image: '/img/iconTipos/psychic.png'
        },
        {
            id: 6,
            name: 'rock', 
            image: '/img/iconTipos/rock.png'
        },
        {
            id: 9,
            name: 'steel', 
            image: '/img/iconTipos/steel.png'
        },
        { 
            id: 11,
            name: 'water', 
            image: '/img/iconTipos/water.png'
        },
    ];

    return (
        <section>
            <ul>
                {pokemons.map((pokemon) => (
                    <button key={pokemon.id}>
                        <Image
                            src={`/img/iconTipos/${pokemon.types[0]}.png`}
                            alt={pokemon.types[0]}
                            width={50}
                            height={50}
                        />
                    </button>
                ))}
            </ul>
        </section>
    );
}
