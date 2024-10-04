import { LitsPokemonsProps, PokemonDetails } from "@/interfaces";
import { BodyInfo, CardPokemon, FooterInfo, ImagemCard, InfoCard, TitleCard, Typo } from "./styled";
import Image from "next/image";
import Modal from "../modal";
import { useState } from "react";
import ModalCard from "../modal";

interface PropsCard {
    pokemon: PokemonDetails
}

export default function Card({ pokemon }: PropsCard) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }; 

    return (
        <CardPokemon bgColor={pokemon.color}>
            <ImagemCard>
                {pokemon.image ? (
                    <Image
                        src={pokemon.image}
                        alt={pokemon.name}
                        width={180}
                        height={180}
                    />
                ) : (
                    <p>Imagem não disponível</p>
                )}
            </ImagemCard>
            <InfoCard>
                <BodyInfo>
                    <TitleCard>
                        <h3>{pokemon.name}</h3>
                        <button onClick={handleOpenModal}>?</button>

                        {isModalOpen && <ModalCard pokemon={pokemon} handleClose={handleCloseModal} showModal={isModalOpen} />}
                    </TitleCard>
                    <Typo>
                        {pokemon.types.map((type) => (
                            <div key={pokemon.name}>
                                <Image
                                    src={`/img/iconTipos/${type}.png`}
                                    alt={type}
                                    width={20}
                                    height={20}
                                />
                                <p>{type}</p>
                            </div>
                        ))}
                    </Typo>

                </BodyInfo>
                <FooterInfo>
                    <h4>Por: R${pokemon.valorOriginal}</h4>
                    <button>COMPRAR</button>
                </FooterInfo>
            </InfoCard>
        </CardPokemon>
    )
}