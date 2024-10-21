import Image from "next/image";
import { ContainerImage, ContainerText, Header, Redes } from "./styled";

export default function HeaderHome() {
    return (
        <Header>
            <ContainerImage>
                <Image 
                    src={'/img/banner.png'}
                    width={630}
                    height={530}
                    alt="Imagem do Banner"
                    objectFit="cover"
                />
            </ContainerImage>
            <ContainerText>
                <Image 
                    src={'/img/logoBanner.png'}
                    width={640} 
                    height={310} 
                    alt="Logo"
                />
                <h3>Capture seus sonhos! <br></br>
                Pokémon esperando por você aqui!</h3>
                <Redes>
                    <a href='#'><i className="bi bi-instagram"></i></a>
                    <a href='#'><i className="bi bi-facebook"></i></a>
                    <a href='#'><i className="bi bi-youtube"></i></a>
                </Redes>
            </ContainerText>
        </Header>
    )
}