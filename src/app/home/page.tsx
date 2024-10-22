'use client'
import CarrosselTypes from "@/(components)/carrosselTypes";
import HeaderHome from "@/(components)/headerHome";
import Navbar from "@/(components)/navbar";
import { Container, Subtitle, TypesPokemons } from "./styled";

export default function Home() {
    return (
        <>
            <Navbar />
            <HeaderHome />
            <TypesPokemons>
                <Container>
                    <Subtitle>Tipos de Pokemons</Subtitle>
                    <CarrosselTypes />
                </Container>
            </TypesPokemons>
        </>
    )
}