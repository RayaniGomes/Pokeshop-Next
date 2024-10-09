"use client"
import LitsPokemons from "@/(components)/ListPokemons"
import { Pagination } from "@/(components)/pagination";
import { Pokemon, PokemonDetails, PokemonMoves, PokemonStats, PokemonType, RequestPokemon } from "@/interfaces";
import api from "@/service/api"
import { useEffect, useState } from "react";

interface ApiPokemon {
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
}

export default function Pokemons() {
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([]);
    const [pokemon, setPokemon] = useState<RequestPokemon>({} as RequestPokemon);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const itemsPorPage = 9;

    const handlePageClick = (direction: string) => {
        setCurrentPage(prevPage => {
            if (direction === 'next' && prevPage < totalPages) {
                return prevPage + 1;
            } else if (direction === 'prev' && prevPage > 1) {
                return prevPage - 1;
            }
            return prevPage;
        });
    };

    const getPagination = (page: number = 1) => {
        api.get<RequestPokemon>(`pokemon?limit=${itemsPorPage}&offset=${(page - 1) * itemsPorPage}`)
            .then(response => {
                console.log(response.data.results)
                setPokemon(response.data);
                setTotalPages(Math.ceil(response.data.count / itemsPorPage));
            })
            .catch(error => console.log(error));

    }

    useEffect(() => {
        getPagination(currentPage);
    }, [currentPage]);

    const extractEvolutions = async (chain: any) => {
        const evolutions = [];
        let current = chain;
        let imageEvolutions: any = [];

        while (current) {
            const speciesName = current.species.name;
            evolutions.push(speciesName);

            if (current.evolves_to.length >= 0) {
                current = current.evolves_to[0];
                const getImageEvolutions = await api.get(`pokemon/${speciesName}`)
                .then((response) => {
                    return response.data.sprites.other.dream_world.front_default 
                })
                .catch(error => { console.log(error); return error });
                imageEvolutions.push(getImageEvolutions);
            } else {
                current = null;
            }
        }

        return { evolutions, imageEvolutions };
    };

    const extractPokemonDetails = async (pokemons: Pokemon[]) => {

        const newPokenmonDetails: PokemonDetails[] = [];
        for (const pokemon of pokemons) {
            api.get<ApiPokemon>(pokemon.url)
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

                    newPokenmonDetails.push({
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
                    if (newPokenmonDetails.length === pokemons.length) {
                        setPokemonDetails(newPokenmonDetails);
                    }
                })
                .catch(error => console.log(error));
        }
    }

    useEffect(() => {
        if (pokemon && pokemon?.results?.length > 0) {
            extractPokemonDetails(pokemon.results);
        }
    }, [pokemon]);

    return (
        <>
            <LitsPokemons pokemons={pokemonDetails.sort((a, b) => a.id - b.id)} />
            <Pagination currentPage={currentPage} totalPages={totalPages} pageClick={handlePageClick} />
        </>
    );
}
