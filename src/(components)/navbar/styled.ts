import styled from "styled-components";

export const NavbarContainer = styled.nav`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: var(--amarelo-escuro);
    box-shadow: 0px 5px 10px 0px #00000040;
    z-index: 999;
`

export const NavbarBody = styled.div`
    width: 1440px;
    height: 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0rem 5rem;

    @media (max-width: 1440px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        width: 100%;
        justify-content: space-between;
        padding: 0rem 2em;
    }

    @media (max-width: 480px) {
        padding: 0rem 1rem;
    }
`

export const Logo = styled.a`
    width: 100px;
    height: 60px;
    display: flex;
    align-items: center;

    @media (max-width: 480px) {
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;

    @media (max-width: 768px) {
        position: absolute;
        width: 50%;
        height: 100vh;
        top: 5rem;
        left: 50%;
        right: 0;
        background-color: var(--amarelo-escuro);
        box-shadow: -5px 10px 10px 0px #00000040;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        padding: 2rem 0;
        transition: all 0.8s ease-in-out;
        transform: translateX(100%);
        opacity: 0;
        pointer-events: none;
        
        &.open {
            transform: translateX(0);
            opacity: 1;
            pointer-events: all;
        }
    }

    a {
        color: var(--claro);
        text-decoration: none;

        @media (max-width: 768px) {
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding-bottom: 1rem;
            border-bottom: 1px solid var(--claro);
        }   
    }
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 480px) {
        margin-left: .5rem;
        gap: .5rem;
    }
    
`

export const ButtonMenuHamburger = styled.button`
    background: none;
    border: none;
    color: var(--claro);
    font-size: 40px;
    display: none;

    @media (max-width: 768px) {
        display: block;
    }
    
    &:hover {
        opacity: 0.85;
    }
`

export const ButtonCarrinho = styled.button`
    background: none;
    border: none;
    color: var(--claro);
    font-size: 35px;
    display: block;

    &:hover {
        opacity: 0.8;
    }
`

export const Contador = styled.span`
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--escuro);
    color: var(--claro);
    font-size: 12px;
    font-weight: 700;
`


export const ContainerModalCarrinho = styled.div`
    position: absolute;
    width: 450px;
    height: 100vh;
    top: 5rem;
    right: 0;
    right: 0;
    background-color: var(--amarelo-escuro);
    box-shadow: -5px 10px 10px 0px #00000040;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    padding: 2rem;
    transition: all 0.8s ease-in-out;
    transform: translateX(100%);
    opacity: 0;
    pointer-events: none;
    
    &.open {
        transform: translateX(0);
        opacity: 1;
        pointer-events: all;
    }

    @media (max-width: 480px) {
        width: 80%;
    }
`

export const Total = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid var(--escuro);
    margin-top: 2rem;
    padding-top: 1rem;
`

export const Finalizar = styled.div`
    width: 100%;
    margin: 5rem 0;
    padding: .5rem;
    border-radius: .625rem;
    background-color: var(--escuro);

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        color: var(--claro);
        text-decoration: none;

    }
    &:hover {
        opacity: 0.85;
    }
`