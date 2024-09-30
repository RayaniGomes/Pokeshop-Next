import LitsPokemons from "@/(components)/ListPokemons"
import api from "@/service/api"

interface Pokemon {
    name: string;
    url: string;
}

interface PokemonType {
    type: {
        name: string;
    };
}

interface PokemonDetails {
    name: string;
    types: string[];
    image: string;
}

export default async function Pokemons() {
    const dataPokemon: Pokemon[] = [];

    await api.get<{ results: Pokemon[] }>(`pokemon?limit=10&offset=0`)
        .then(response => {
            dataPokemon.push(...response.data.results);
        })
        .catch(error => console.log(error));

    const pokemonDetails: PokemonDetails[] = [];

    for (const pokemon of dataPokemon) {
        await api.get<{ name: string; types: PokemonType[]; sprites: { other: { dream_world: { front_default: string } } } }>(pokemon.url)
            .then(detailsResponse => {
                const { name, types, sprites } = detailsResponse.data;

                const pokemonTypes = types.map((typeInfo) => typeInfo.type.name);

                pokemonDetails.push({
                    name,
                    types: pokemonTypes,
                    image: sprites.other.dream_world.front_default,
                });
            })
            .catch(error => console.log(error));
    }

    console.log(pokemonDetails);

    return (
        <LitsPokemons pokemons={pokemonDetails} />
    );
}
