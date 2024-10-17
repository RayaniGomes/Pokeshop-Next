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
    justify-content: space-around;
    margin: 0 auto;

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
        height: 100dvh;
        top: 5rem;
        right: 0;
        background-color: var(--amarelo-escuro);
        box-shadow: -5px 10px 10px 0px #00000040;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        gap: 1.5rem;
        padding: 2rem 0;
        transition: all 0.8s ease-in-out;
        transform: translateX(100%);       
        opacity: 0;

        &.open {
            opacity: 1;
            transform: translateX(0);
        }
    }

    @media (max-width: 480px) {
        width: 80%;
    }
`

export const Link = styled.a`
    color: var(--claro);
    text-decoration: none;
`

export const FormPesquisar = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;

    input {
        background-color: var(--claro);
        border: none;
        border-bottom-left-radius: .625rem;
        border-top-left-radius: .625rem;
        padding: .25rem .5rem;
        font-size: 14px;
        color: var(--escuro);
    }

    button {
        font-size: 14px;
        background-color: var(--claro);
        color: var(--escuro);
        padding: .25rem .5rem;
        border-top-right-radius: .625rem;
        border-bottom-right-radius: .625rem;
    }

    @media (max-width: 480px) {
        width: 100%;
        padding: .5rem;

        input {
            width: 70%;
        }
    }
`

export const Buttons = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
        color: var(--claro);
        font-size: 30px;
    }

    button {
        background: none;
        border: none;
        color: var(--claro);
        font-size: 40px;
        display: none;
    }

    @media (max-width: 768px) {
        button {
            display: block;
        }
    }

    @media (max-width: 480px) {
        margin-left: .5rem;
        gap: .5rem;
    }
    
`
