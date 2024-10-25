import { ButtonTotal, ContainerTotal, Total } from "./styled";

export default function TotalPagar() {
    return (
        <ContainerTotal>
            <Total>
                <h4>Total:</h4>
                <h4>R$ 0,00</h4>
            </Total>
            <ButtonTotal>
                <button>Finalizar compra</button>
            </ButtonTotal>
        </ContainerTotal>
    )
}