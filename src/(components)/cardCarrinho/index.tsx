'use client';
import Image from "next/image";
import { Apagar, ContainerCarrinho, DivCarrinho, DivImage, DivInfo, InfoPreco, InfoTitle, InfoType } from "./styled";
import { useCartStore } from "@/Store/CartStore";
import ItemCarrinho from "../itemCarrinho";
import ModalCard from "../modalPokemon";
import { useState } from "react";

export default function CardCarrinho() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { cart, removeFromCart, incPrice, decPrice } = useCartStore();

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <ContainerCarrinho>
            {cart.map((item, index) => {
                return (
                    <DivCarrinho key={item.pokemon.id}>
                        <DivImage bgColor={item.pokemon.color}>
                            <Image
                                src={item.pokemon.image}
                                width={200}
                                height={200}
                                alt={item.pokemon.name}
                            />
                        </DivImage>
                        <DivInfo>
                            <InfoTitle>
                                <h3>{item.pokemon.name}</h3>
                                <button onClick={handleOpenModal}>?</button>
                                {isModalOpen && <ModalCard pokemon={item.pokemon} handleClose={handleCloseModal} showModal={isModalOpen} />}
                            </InfoTitle>
                            <InfoType>
                                {item.pokemon.types.slice(0, 2).map((type: any) => (
                                    <div key={type.id}>
                                        <Image
                                            src={'/img/iconTipos/' + type + '.png'}
                                            alt={type.name}
                                            width={20}
                                            height={20}
                                            objectFit="cover"
                                        />
                                        <p>{type}</p>
                                    </div>
                                ))}
                            </InfoType>
                            <InfoPreco>
                                <h3>R${item.price}</h3>
                                <div className="quantidade">
                                    <ItemCarrinho quantidade={item.quantity} incQuanty={() => incPrice(index)} decQuanty={() => decPrice(index)} />
                                    <Apagar className="bi bi-trash3-fill" onClick={() => {
                                        removeFromCart(item.pokemon.id)
                                    }} />
                                </div>
                            </InfoPreco>
                        </DivInfo>
                    </DivCarrinho>
                )
            })}
        </ContainerCarrinho>
    )
}
