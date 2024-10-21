import Image from "next/image";
import { Display, FooterContainer, FooterSection, InfoFooter, Logo, RedesSociais } from "./styled";

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
                    <Display>
                        <i className="bi bi-geo-alt-fill" />
                        <p>Rua Ali Perto, 35<br /> Rio de Janeiro - RJ<br /> Brasil - Terra - Via Láctea</p>
                    </Display>
                    <Display>
                        <i className="bi bi-envelope-fill" />
                        <p>contato@pokeshop.com<br /> assistencia@pokeshop.com</p>
                    </Display>
                    <div>
                        <Display>
                            <i className="bi bi-telephone-fill" /> <p>+55 21 99999-9999
                            </p>
                        </Display>
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