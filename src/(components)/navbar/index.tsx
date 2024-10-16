import Image from "next/image";
import { Buttons, FormPesquisar, Link, Logo, Menu, NavbarBody, NavbarContainer } from "./styled";

export default function Navbar() {
    return (
        <NavbarContainer>
            <NavbarBody>
                <Logo>
                    <Image
                        src='/img/logoNav.png'
                        alt="Logo"
                        width={100} height={60}
                    />
                </Logo>
                <Menu>
                    <Link>Home</Link>
                    <Link>Mais Vendidos</Link>
                    <Link>Pokédex</Link>
                    <Link>Contato</Link>
                </Menu>
                <FormPesquisar>
                    <input type="search" placeholder='O que você procura?' />
                    <button className="bi bi-search" />
                </FormPesquisar>
                <Buttons>
                    <a className="bi bi-cart" />
                    <button className="bi bi-list" />
                </Buttons>
            </NavbarBody>
        </NavbarContainer>
    );
}