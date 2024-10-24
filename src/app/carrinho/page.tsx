import CardCarrinho from "@/(components)/cardCarrinho";
import Footer from "@/(components)/footer";
import Navbar from "@/(components)/navbar";
import Title from "@/(components)/title";
import { ContainerCarrinho, Subtitle } from "./styled";

export default function Carrinho() {
    return (
        <ContainerCarrinho>
            <Navbar />
            <Title Children="Carrinho" />

            <Subtitle>
                <h3>
                    Detalhes do Carrinho
                </h3>
            </Subtitle>
            <CardCarrinho />
            <Footer />
        </ContainerCarrinho >
    );
}