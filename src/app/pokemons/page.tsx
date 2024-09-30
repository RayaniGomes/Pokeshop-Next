import LitsPokemons from "@/(components)/ListPokemons"
import { Pokemon, PokemonDetails, PokemonType } from "@/interfaces/interface";
import api from "@/service/api"

export default async function Pokemons() {
    const dataPokemon: Pokemon[] = [];

    await api.get<{ results: Pokemon[] }>(`pokemon?limit=10&offset=0`)
        .then(response => {
            dataPokemon.push(...response.data.results);
        })
        .catch(error => console.log(error));

    const pokemonDetails: PokemonDetails[] = [];

    for (const pokemon of dataPokemon) {
        await api.get<{ id: number; name: string; types: PokemonType[]; sprites: { other: { dream_world: { front_default: string } } } }>(pokemon.url)
            .then(detailsResponse => {
                const { id, name, types, sprites } = detailsResponse.data;

                const pokemonTypes = types.map((typeInfo) => typeInfo.type.name);
                
                const valorOriginal = Math.floor(Math.random() * 400) + 100;

                pokemonDetails.push({
                    id,
                    name,
                    types: pokemonTypes,
                    image: sprites.other.dream_world.front_default,
                    valorOriginal
                });
            })
            .catch(error => console.log(error));
    }

    console.log(pokemonDetails);

    return (
        <LitsPokemons pokemons={pokemonDetails} />
    );
}
