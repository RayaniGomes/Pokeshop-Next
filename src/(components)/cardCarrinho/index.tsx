import { useState } from "react";
import Image from "next/image";
import { Apagar, ContainerCarrinho, DivCarrinho, DivImage, DivInfo, InfoPreco, InfoTitle, InfoType, Quantidade } from "./styled";
import { types } from "@/data/helps";

export default function CardCarrinho() {
    const [quantidade, setQuantidade] = useState(1);

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
            <DivCarrinho>
                <DivImage>
                    <Image
                        src='/img/image 6.png'
                        width={200}
                        height={200}
                        alt="pokemon"
                    />
                </DivImage>
                <DivInfo>
                    <InfoTitle>
                        <h3>name</h3>
                        <button>?</button>
                    </InfoTitle>
                    <InfoType>
                        {types.slice(0, 2).map((type) => (
                            <div key={type.name}>
                                <Image
                                    src={type.image}
                                    alt={type.name}
                                    width={20}
                                    height={20}
                                    objectFit="cover"
                                />
                                <p>{type.name}</p>
                            </div>
                        ))}
                    </InfoType>
                    <InfoPreco>
                        <h3>R$ 0,00</h3>
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
                            <Apagar className="bi bi-trash3-fill" />
                        </div>
                    </InfoPreco>
                </DivInfo>
            </DivCarrinho>
        </ContainerCarrinho>
    )
}
