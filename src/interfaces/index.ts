export interface Pokemon {
    name: string;
    url: string;
}

export interface RequestPokemon {
    count: number;
    next: string;
    previous: string;
    results: Pokemon[];
}

export interface ApiPokemon {
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

export interface PokemonDetails {
    id: number;
    name: string;
    types: string[];
    image: string;
    color: string;
    evolutions: string[];
    imageEvolutions: string[];
    moves: string[];
    stats: {
        name: string;
        base_stat: number
    }[];
    weaknesses: string[];
    valorOriginal: number;
}

export interface PokemonType {
    type: {
        name: string;
        url: string;
    };
}

export interface PokemonMoves {
    move: {
        name: string;
    };
}

export interface PokemonStats {
    stat: {
        name: string;
        base_stat: number;
    }

    name: string;
    base_stat: number;
}

export interface EvolutionImages {
    [evolution: string]: string;
}


export interface TypesProps {
    id: number;
    name: string;
    image: string;
}