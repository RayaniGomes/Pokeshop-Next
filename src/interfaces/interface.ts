export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonType {
    type: {
        name: string;
    };
}

export interface PokemonDetails {
    id: number;
    name: string;
    types: string[];
    image: string;
    valorOriginal: number;
}

export interface LitsPokemonsProps {
    pokemons: PokemonDetails[];
}