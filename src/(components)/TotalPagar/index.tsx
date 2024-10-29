import { useCartStore } from "@/Store/CartStore";
import { ButtonTotal, ContainerTotal, Total } from "./styled";

export default function TotalPagar() {
    const { price } = useCartStore();

    return (
        <ContainerTotal>
            <Total>
                <h4>Total:</h4>
                <h4>R$ {price}</h4>
            </Total>
            <ButtonTotal>
                <button>Finalizar compra</button>
            </ButtonTotal>
        </ContainerTotal>
    )
}