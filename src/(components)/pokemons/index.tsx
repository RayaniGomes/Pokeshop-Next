import LitsPokemons from "@/(components)/listPokemons"
import { Pagination } from "@/(components)/pagination";
import { ApiPokemon, Pokemon, PokemonDetails, RequestPokemon } from "@/interfaces";
import api from "@/service/api"
import { useEffect, useState } from "react";
import PokemonTypes from "../pokemonTypes";
import { FormPesquisar, Mensagem, Voltar } from "./styled";
import Navbar from "../navbar";

export default function Pokemons() {
    const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([]);
    const [pokemon, setPokemon] = useState<RequestPokemon>({} as RequestPokemon);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [typePokemon, setTypePokemon] = useState('');
    const [namePokemon, setNamePokemon] = useState('');
    const itemsPorPage = 12;

    // Função para lidar com a pesquisa pelo nome do Pokémon
    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchValue = event.target.value.toLowerCase();
        setNamePokemon(searchValue);

        // Filtrar os Pokémons pelo nome
        const filteredPokemons = pokemonDetails.filter(pokemon =>
            pokemon.name.toLowerCase().includes(searchValue)
        );

        // Atualizar o estado com os Pokémons filtrados
        setPokemonDetails(filteredPokemons);
    };

    const handleFilter = (typeName: string) => {
        setTypePokemon(typeName);
        const filterPokemon = pokemonDetails.filter(pokemon => pokemon.types.some(type => type === typeName));
        setPokemonDetails(filterPokemon);
    };

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
                console.log(response.data)
                setPokemon(response.data);
                setTotalPages(Math.ceil(response.data.count / itemsPorPage));
            })
            .catch(error => console.log(error));

    };

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
        const newPokemonDetails: PokemonDetails[] = [];
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

                    newPokemonDetails.push({
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
                    if (newPokemonDetails.length === pokemons.length) {
                        setPokemonDetails(newPokemonDetails);
                    }
                })
                .catch(error => console.log(error));
        }
    };

    useEffect(() => {
        if (pokemon && pokemon?.results?.length > 0) {
            extractPokemonDetails(pokemon.results);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemon]);

    return (
        <section>
            <FormPesquisar>
                <input type="text"
                placeholder="Pesquisar Pokémon"
                value={namePokemon}
                onChange={handleSearch} />
                <button className="bi bi-search" />
            </FormPesquisar>
            <PokemonTypes func={handleFilter} />
            {pokemonDetails.length > 0
                ? <section>
                    <LitsPokemons pokemons={pokemonDetails.sort((a, b) => (a.id ?? 0) - (b.id ?? 0))} />
                    {pokemonDetails.length < 9
                        && <Voltar onClick={() => getPagination(currentPage)}>
                            <button>Voltar</button>
                        </Voltar>}
                </section>
                :
                <Mensagem>
                    <button onClick={() => getPagination(currentPage)}>
                        Nessa página não existe pokemon do tipo {typePokemon}
                    </button>
                </Mensagem>
            }
            <Pagination currentPage={currentPage} totalPages={totalPages} pageClick={handlePageClick} />
        </section>
    );
}
