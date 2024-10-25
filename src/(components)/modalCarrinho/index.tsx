import { useState } from "react";
import { ApagarItem, CarrinhoModal, ImageProduto, InfoProduto, QuantidadeProduto } from "./styled";
import Image from "next/image";

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

    return (
        <CarrinhoModal >
            <ImageProduto>
                <Image
                    src='/img/image 6.png'
                    width={100}
                    height={100}
                    alt="pokemon"
                />
            </ImageProduto>

            <InfoProduto>
                <h3>Nome</h3>
                <QuantidadeProduto>
                    <h4>R$ 0,00</h4>
                    <div className="quantidade">
                        <button onClick={diminuirQuantidade}>-</button>
                        <input
                            type="number"
                            value={quantidade}
                            onChange={handleInputChange}
                            min="1"
                        />
                        <button onClick={aumentarQuantidade}>+</button>
                        <ApagarItem className="bi bi-trash3-fill" />
                    </div>

                </QuantidadeProduto>
            </InfoProduto>
        </CarrinhoModal>
    );
}