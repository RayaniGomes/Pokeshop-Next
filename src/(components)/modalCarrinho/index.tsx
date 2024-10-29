import { ApagarItem, CarrinhoModal, Container, ImageProduto, InfoProduto, QuantidadeProduto } from "./styled";
import Image from "next/image";
import { useCartStore } from "@/Store/CartStore";
import ItemCarrinho from "../itemCarrinho";

export default function ModalCarrinho() {
    const { cart: cart, removeFromCart: removeFromCard, incPrice, decPrice } = useCartStore();

    const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

    return (
        <Container>
            {cart.length === 0 && <h3>Seu carrinho está vazio</h3>}
            {cart.map((item, index) => {
                return (
                    <CarrinhoModal key={item.pokemon.id}>
                        <ImageProduto bgColor={item.pokemon.color}>
                            <Image
                                src={item.pokemon.image}
                                width={100}
                                height={100}
                                alt={item.pokemon.name}
                            />
                        </ImageProduto>
                        <InfoProduto>
                            <h4>{item.pokemon.name}</h4>
                            <h5>{formatter.format(item.price)}</h5>
                            <QuantidadeProduto>
                                <ItemCarrinho quantidade={item.quantity} incQuanty={() => incPrice(index)} decQuanty={ () => decPrice(index)}/>
                                <ApagarItem className="bi bi-trash3-fill" onClick={() => {
                                    removeFromCard(item.id)
                                }} />
                            </QuantidadeProduto>
                        </InfoProduto>
                    </CarrinhoModal>
                )
            })}
        </Container>
    );
}