export interface Pokemon {
    name: string;
    url: string;
}

export interface PokemonDetails {
    id: number;
    name: string;
    types: string[];
    image: string;
    color: string;
    evolutions: string[];
    imageEvolutions: string[];
    moves: string[];
    valorOriginal: number;
}

export interface PokemonType {
    type: {
        name: string;
    };
}

export interface PokemonMoves {
    move: {
        name: string;
    };
}
export interface EvolutionImages {
    [evolution: string]: string;
}

export interface LitsPokemonsProps {
    pokemons: PokemonDetails[];
}