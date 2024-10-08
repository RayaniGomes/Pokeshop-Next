"use client"
import LitsPokemons from "@/(components)/ListPokemons"
import { Pagination } from "@/(components)/pagination";
import { Pokemon, PokemonDetails, PokemonMoves, PokemonStats, PokemonType } from "@/interfaces";
import api from "@/service/api"
import { useEffect, useState } from "react";

export default function Pokemons() {
    const [dataPokemon, setDataPokemon] = useState<Pokemon[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPorPage = 9;

    const handlePageClick = (direction: string) => {
        setCurrentPage(prevPage => {
            if (direction === 'next' && prevPage < totalPages) {
                return prevPage + 1;
            } else if (direction === 'prev' && prevPage > 1) {
                return prevPage - 1;
            } else {
                return prevPage;
            }
        });
    };

    const getPagination = () => {
        api.get<{ results: Pokemon[] }>(`pokemon?limit=${itemsPorPage}&offset=${(currentPage - 1) * itemsPorPage}`)
            .then(response => {
                console.log(response.data.results)
                setDataPokemon(response.data.results);

            })
            .catch(error => console.log(error));
        
    }

    useEffect(() => {
        getPagination();
    }, [currentPage]);

    const extractEvolutions = (chain: any) => {
        const evolutions = [];
        let current = chain;
        let imageEvolutions:any = [];

        while (current) {
            const speciesName = current.species.name;
            evolutions.push(speciesName);

            if (current.evolves_to.length >= 0) {
                current = current.evolves_to[0];
                const getImageEvolutions = api.get(`pokemon/${speciesName}`).then((response) => { return response.data.sprites.other.dream_world.front_default }).catch(error => { console.log(error); return error });
                imageEvolutions.push(getImageEvolutions);
            } else {
                current = null;
            }
        }

        return { evolutions, imageEvolutions };
    };

    const pokemonDetails: PokemonDetails[] = [];

    for (const pokemon of dataPokemon) {
        api.get<{
            id: number;
            name: string;
            types: PokemonType[];
            sprites: {
                other: {
                    dream_world: {
                        front_default: string
                    }
                }
            };
            moves: PokemonMoves[];
            stats: PokemonStats[];
        }>(pokemon.url)
            .then(async (detailsResponse) => {
                const { id, name, types, sprites, moves, stats } = detailsResponse.data;
                console.log(moves);
                const pokemonTypes = types.map((typeInfo) => typeInfo.type.name);

                const species = await api.get(`pokemon-species/${id}`);
                const color = species.data.color.name;

                const evolutionChain = species.data.evolution_chain.url;
                const evolutionChainResponse = (await api.get(evolutionChain)).data.chain;
                const { evolutions, imageEvolutions } = await extractEvolutions(evolutionChainResponse);

                const pokemonMoves = moves.slice(0, 10).map((moveInfo) => moveInfo.move.name);

                const pokemonStats = stats.map(statInfo => ({
                    name: statInfo.stat.name,
                    base_stat: statInfo.base_stat
                }));

                let weaknesses: string[] = [];
                for (const typeInfo of types) {
                    const typeResponse = await api.get(typeInfo.type.url);
                    const damageRelations = typeResponse.data.damage_relations;

                    weaknesses.push(...damageRelations.double_damage_from.map((typeWeakness: any) => typeWeakness.name));
                }


                const valorOriginal = Math.floor(Math.random() * 400) + 100;

                pokemonDetails.push({
                    id,
                    name,
                    types: pokemonTypes,
                    image: sprites.other.dream_world.front_default,
                    color,
                    evolutions,
                    imageEvolutions,
                    moves: pokemonMoves,
                    stats: pokemonStats,
                    weaknesses,
                    valorOriginal,
                });
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <LitsPokemons pokemons={pokemonDetails} />
            <Pagination currentPage={currentPage} totalPages={totalPages} pageClick={handlePageClick} />
        </>
    );
}
