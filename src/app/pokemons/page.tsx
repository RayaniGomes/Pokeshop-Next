import LitsPokemons from "@/(components)/ListPokemons"
import { EvolutionImages, Pokemon, PokemonDetails, PokemonMoves, PokemonType } from "@/interfaces";
import api from "@/service/api"
import { error } from "console";

export default async function Pokemons() {
    const dataPokemon: Pokemon[] = [];

    const extractEvolutions = async(chain: any) => {
        const evolutions = [];
        let current = chain;
        let imageEvolutions = [];

        while (current) {
            const speciesName = current.species.name;
            evolutions.push(speciesName);

            if (current.evolves_to.length >= 0) {
                current = current.evolves_to[0];
                imageEvolutions.push(await api.get(`pokemon/${speciesName}`).then((response) => {return response.data.sprites.other.dream_world.front_default}).catch(error => {console.log(error); return error})); 
            } else {
                current = null;
            }
        }

        return {evolutions, imageEvolutions} ;
    };

    await api.get<{ results: Pokemon[] }>(`pokemon?limit=9&offset=0`)
        .then(response => {
            dataPokemon.push(...response.data.results);
        })
        .catch(error => console.log(error));

    const pokemonDetails: PokemonDetails[] = [];

    for (const pokemon of dataPokemon) {
        await api.get<{
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
        }>(pokemon.url)
            .then(async(detailsResponse) => {
                const { id, name, types, sprites, moves} = detailsResponse.data;
                console.log(moves);
                const pokemonTypes = types.map((typeInfo) => typeInfo.type.name);

                const species = await api.get(`pokemon-species/${id}`);
                const color = species.data.color.name;

                const evolutionChain = species.data.evolution_chain.url;
                const evolutionChainResponse = (await api.get(evolutionChain)).data.chain;
                const { evolutions, imageEvolutions } = await extractEvolutions(evolutionChainResponse);
                
                const pokemonMoves = moves.slice(0, 10).map((moveInfo) => moveInfo.move.name);

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
                    valorOriginal,
                });
            })
            .catch(error => console.log(error));
    }

    console.log(pokemonDetails);

    return (
        <LitsPokemons pokemons={pokemonDetails} />
    );
}
