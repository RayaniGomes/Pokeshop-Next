'use client'; 
import Pokemons from "@/(components)/pokemons";
import Title from "@/(components)/title";
import { PokedexPage } from "./styled";
import Navbar from "@/(components)/navbar";
import Footer from "@/(components)/footer";

export default function Pokedex() {
    return (
        <PokedexPage>
            <Navbar />
            <Title Children="Pokedex" />
            <Pokemons />
            <Footer />
        </PokedexPage>
    );
}
