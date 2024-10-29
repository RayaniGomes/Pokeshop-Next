'use client';
import { useState } from "react";
import Image from "next/image";
import { ButtonCarrinho, ButtonMenuHamburger, Buttons, Contador, ContainerModalCarrinho, Finalizar, Logo, Menu, NavbarBody, NavbarContainer, Total } from "./styled";
import ModalCarrinho from "../modalCarrinho";
import Link from "next/link";
import { useCartStore } from "@/Store/CartStore";

interface PropPesquisa {
    pokemonPesquisa: (namePokemon: string) => void;
}

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCarrinho, setIsCarrinho] = useState(false);
    const { count, price } = useCartStore();

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

    const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    });

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
                    <Link href="/contato">Contato</Link>
                </Menu>
                <Buttons>
                    <div>
                        <ButtonCarrinho className={isCarrinho ? 'bi bi-x' : 'bi bi-cart'} onClick={openCarrinho}>
                            <Contador>{count}</Contador>
                        </ButtonCarrinho>
                    </div>

                    <ButtonMenuHamburger className={isMenuOpen ? 'bi bi-x' : 'bi bi-list'} onClick={toggleMenu} />
                </Buttons>
                <ContainerModalCarrinho className={isCarrinho ? 'open' : ''}>
                    <ModalCarrinho />
                    <Total>
                        <h4>Total:</h4>
                        <h5>{formatter.format(price)}</h5>
                    </Total>
                    <Finalizar>
                        <Link href='/carrinho'>Finalizar compra</Link>
                    </Finalizar>

                </ContainerModalCarrinho>
            </NavbarBody>
        </NavbarContainer>
    );
}
