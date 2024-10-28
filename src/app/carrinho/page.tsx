import CardCarrinho from "@/(components)/cardCarrinho";
import Footer from "@/(components)/footer";
import Navbar from "@/(components)/navbar";
import Title from "@/(components)/title";
import { ContainerCarrinho, SubtitleCarrinho } from "./styled";
import TotalPagar from "@/(components)/TotalPagar";

export default function Carrinho() {
    return (
        <main>
            <Navbar />
            <Title Children="Carrinho" />
            <ContainerCarrinho>

                <SubtitleCarrinho>
                    <h3>
                        Detalhes do Carrinho
                    </h3>
                </SubtitleCarrinho>
                <CardCarrinho />
                <TotalPagar />
            </ContainerCarrinho >
            <Footer />
        </main>
    );
}