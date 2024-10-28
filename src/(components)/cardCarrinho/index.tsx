'use client';
import { useState } from "react";
import Image from "next/image";
import { Apagar, ContainerCarrinho, DivCarrinho, DivImage, DivInfo, InfoPreco, InfoTitle, InfoType, Quantidade } from "./styled";
import { types } from "@/data/helps";
import { useCardStore } from "@/Store/CardStore";

export default function CardCarrinho() {
    const [quantidade, setQuantidade] = useState(1);

    const { card, removeFromCard } = useCardStore();

    const aumentarQuantidade = () => {
        setQuantidade(prevQuantidade => prevQuantidade + 1);
    };

    const diminuirQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(prevQuantidade => prevQuantidade - 1);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (!isNaN(value) && value > 0) {
            setQuantidade(value);
        }
    };

    return (
        <ContainerCarrinho>
            {card.map((item) => {
                console.log(item);
                return (
                    <DivCarrinho key={item.id}>
                        <DivImage>
                            <Image
                                src={item.image}
                                width={200}
                                height={200}
                                alt={item.name}
                            />
                        </DivImage>
                        <DivInfo>
                            <InfoTitle>
                                <h3>{item.name}</h3>
                                <button>?</button>
                            </InfoTitle>
                            <InfoType>
                                {item.types.slice(0, 2).map((type: any) => (
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
                                <h3>R${item.valorOriginal}</h3>
                                <div className="quantidade">
                                    <Quantidade>
                                        <button onClick={diminuirQuantidade}>-</button>
                                        <input
                                            type="text"
                                            value={quantidade}
                                            onChange={handleInputChange}
                                            min="1"
                                        />
                                        <button onClick={aumentarQuantidade}>+</button>
                                    </Quantidade>
                                    <Apagar className="bi bi-trash3-fill" onClick={() => removeFromCard(item.id)}/>
                                </div>
                            </InfoPreco>
                        </DivInfo>
                    </DivCarrinho>
                )
            })}
        </ContainerCarrinho>
    )
}
