import { useState } from "react";
import { ApagarItem, CarrinhoModal, Container, ImageProduto, InfoProduto, QuantidadeProduto } from "./styled";
import Image from "next/image";
import { useCardStore } from "@/Store/CardStore";

export default function ModalCarrinho() {
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

    const { card, removeFromCard } = useCardStore();

    return (
        <Container>
            {card.map((item) => {
                return (
                    <CarrinhoModal key={item.id}>
                        <ImageProduto>
                            <Image
                                src={item.image}
                                width={100}
                                height={100}
                                alt={item.name}
                            />
                        </ImageProduto>
                        <InfoProduto>
                            <h3>{item.name}</h3>
                            <QuantidadeProduto>
                                <h4>R${item.valorOriginal}</h4>
                                <div className="quantidade">
                                    <button onClick={diminuirQuantidade}>-</button>
                                    <input
                                        type="text"
                                        value={quantidade}
                                        onChange={handleInputChange}
                                        min="1"
                                    />
                                    <button onClick={aumentarQuantidade}>+</button>
                                </div>
                                <ApagarItem className="bi bi-trash3-fill" onClick={() => removeFromCard(item.id)}/>
                            </QuantidadeProduto>
                        </InfoProduto>
                    </CarrinhoModal>
                )
            })}
        </Container>
        // 
    );
}