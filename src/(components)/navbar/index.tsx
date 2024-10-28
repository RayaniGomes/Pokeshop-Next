import { useState } from "react";
import Image from "next/image";
import { ButtonCarrinho, ButtonMenuHamburger, Buttons, ContainerModalCarrinho, Link, Logo, Menu, NavbarBody, NavbarContainer } from "./styled";
import ModalCarrinho from "../modalCarrinho";

interface PropPesquisa {
    pokemonPesquisa: (namePokemon: string) => void;
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCarrinho, setIsCarrinho] = useState(false);

    const toggleMenu = () => {
        if (isCarrinho) {
            setIsCarrinho(false);
        }
        setIsMenuOpen(!isMenuOpen);
        
    };

    const openCarrinho = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
        setIsCarrinho(!isCarrinho);
    };

    return (
        <NavbarContainer>
            <NavbarBody>
                <Logo>
                    <Image
                        src='/img/logoNav.png'
                        alt="Logo"
                        width={100}
                        height={60}
                        objectFit="cover"
                    />
                </Logo>
                <Menu className={isMenuOpen ? 'open' : ''}>
                    <Link href="/">Home</Link>
                    {/* <Link>Mais Vendidos</Link> */}
                    <Link href="/pokedex">Pokédex</Link>
                    <Link>Contato</Link>
                </Menu>
                <Buttons>
                    <ButtonCarrinho className={isCarrinho ? 'bi bi-x' : 'bi bi-cart'} onClick={openCarrinho} />

                    <ButtonMenuHamburger className={isMenuOpen ? 'bi bi-x' : 'bi bi-list'} onClick={toggleMenu} />
                </Buttons>
                <ContainerModalCarrinho className={isCarrinho ? 'open' : ''}>
                    <ModalCarrinho />
                </ContainerModalCarrinho>
            </NavbarBody>
        </NavbarContainer>
    );
}
