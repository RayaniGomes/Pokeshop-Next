import { ButtonTotal, ContainerTotal, Total } from "./styled";

export default function TotalPagar() {
    return (
        <ContainerTotal>
            <Total>
                <h2>Total:</h2>
                <h3>R$ 0,00</h3>
            </Total>
            <ButtonTotal>
                <button>Finalizar compra</button>
            </ButtonTotal>
        </ContainerTotal>
    )
}