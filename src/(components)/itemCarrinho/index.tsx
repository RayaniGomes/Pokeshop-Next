import { useState } from "react";
import { Quantidade } from "../cardCarrinho/styled";

interface PropsQuantidade {
    quantidade: number
    incQuanty: () => void
    decQuanty: () => void
}

export default function ItemCarrinho({quantidade, incQuanty, decQuanty}: PropsQuantidade) {
    const aumentarQuantidade = () => {
        incQuanty();
    };

    const diminuirQuantidade = () => {
        if (quantidade === 1) {
            return;
        }
        decQuanty();
    };

    return (
        <Quantidade>
            <button onClick={diminuirQuantidade} disabled={quantidade === 1}>-</button>
            <input
                type="text"
                value={quantidade}
                readOnly
                min="1"
            />
            <button onClick={aumentarQuantidade}>+</button>
        </Quantidade>
    )
}