import Image from "next/image";
import { Logo } from "../navbar/styled";
import { FooterContainer, FooterSection, InfoFooter, RedesSociais } from "./styled";
import { Container } from "react-bootstrap";

export default function Footer() {
    return (
        <FooterSection>
            <FooterContainer>
                <Logo>
                    <Image
                        src='/img/logoNav.png'
                        alt="Logo"
                        width={180}
                        height={100}
                        objectFit="cover"
                    />
                </Logo>
                <InfoFooter>
                    <div>
                        <i className="bi bi-geo-alt-fill p-2" />
                        <p>Rua Ali Perto, 35<br /> Rio de Janeiro - RJ<br /> Brasil - Terra - Via Láctea</p>
                    </div>
                    <div>
                        <i className="bi bi-envelope-fill p-2" />
                        <p>contato@pokeshop.com<br /> assistencia@pokeshop.com</p>
                    </div>
                    <div>
                        <p><i className="bi bi-telephone-fill" /> +55 21 99999-9999</p>
                        <RedesSociais>
                            <a href='#' className="bi bi-instagram" />
                            <a href='#' className="bi bi-facebook" />
                            <a href='#' className="bi bi-youtube" />
                        </RedesSociais>
                    </div>
                </InfoFooter>
            </FooterContainer>
            <p>PokéShop © Direitos Reservados a Rayani Gomes</p>
        </FooterSection >
    );
}