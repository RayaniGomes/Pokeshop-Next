'use client'; 
import Pokemons from "@/(components)/pokemons";
import Title from "@/(components)/title";
import { PokedexPage } from "./styled";
import Navbar from "@/(components)/navbar";

export default function Pokedex() {
    return (
        <PokedexPage>
            <Navbar />
            <Title Children="Pokedex" />
            <Pokemons />
        </PokedexPage>
    );
}
