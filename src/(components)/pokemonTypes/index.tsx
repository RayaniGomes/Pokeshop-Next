import api from "@/service/api";
import Image from "next/image";
import { useState } from "react";
import Card from "../card";
import { Container, Icones } from "./styled";
import { BodyInfo, CardPokemon, FooterInfo, ImagemCard, InfoCard, TitleCard, Typo } from "../card/styled";
import { PokemonDetails } from "@/interfaces";
import ModalCard from "../modal";
import { types } from "@/data/helps";

interface PokemonTypesProps {
    func: (value : string) => void
    limpeza: (value : string) => void
}

export default function PokemonTypes({ func, limpeza }: PokemonTypesProps) {

    // const cilcksFilter = (type: string) => {
    //     func('');
    //     limpeza('')
    // }

    return (
        < Container>
            <Icones>
                {types.map((type) => (
                    <button key={type.id} onClick={() => cilcksFilter(type.name)}>
                        <Image
                            src={type.image}
                            alt={type.name}
                            width={50}
                            height={50}
                        />
                    </button>
                ))}
            </Icones>
        </Container>
    );
}
