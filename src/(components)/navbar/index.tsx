import { useState } from "react";
import Image from "next/image";
import { Buttons, FormPesquisar, Link, Logo, Menu, NavbarBody, NavbarContainer } from "./styled";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
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
                    <Link>Home</Link>
                    <Link>Mais Vendidos</Link>
                    <Link>Pokédex</Link>
                    <Link>Contato</Link>
                    <FormPesquisar>
                        <input type="search" placeholder='Pesquisar por pokemon...' />
                        <button className="bi bi-search" />
                    </FormPesquisar>
                </Menu>
                <Buttons>
                    <a className="bi bi-cart" />
                    <button className={isMenuOpen ? 'bi bi-x' : 'bi bi-list'} onClick={toggleMenu} />
                </Buttons>
            </NavbarBody>
        </NavbarContainer>
    );
}
