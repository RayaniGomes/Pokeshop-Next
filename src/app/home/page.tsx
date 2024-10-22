'use client'
import CarrosselTypes from "@/(components)/carrosselTypes";
import HeaderHome from "@/(components)/headerHome";
import Navbar from "@/(components)/navbar";
import { Container, Formulario, Subtitle, TypesPokemons } from "./styled";
import Contato from "@/(components)/contato";


export default function Home() {
    return (
        <main>
            <Navbar />
            <HeaderHome />
            <TypesPokemons>
                <Container>
                    <Subtitle>Tipos de Pokemons</Subtitle>
                    <CarrosselTypes />
                </Container>
            </TypesPokemons>
            <Formulario>
                <Container>
                    <Subtitle>Fale Conosco</Subtitle>
                    <Contato />
                </Container>
            </Formulario>
        </main>
    )
}