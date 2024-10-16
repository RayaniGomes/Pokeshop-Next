import { PokemonDetails } from "@/interfaces";
import Card from "../card";
import { ListCards } from "./styled";


interface LitsPokemonsProps {
    pokemons: PokemonDetails[];
}
export default function LitsPokemons({ pokemons }: LitsPokemonsProps) {
    return (
        <ListCards>
            {pokemons.map((pokemon) => (
                <Card pokemon={pokemon} key={pokemon.id} />
            ))}
        </ListCards>
    );
}
