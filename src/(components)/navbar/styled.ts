import styled from "styled-components";

export const NavbarContainer = styled.nav`
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: var(--amarelo-escuro);
    box-shadow: 0px 5px 10px 0px #00000040;
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
        padding: 0rem 2rem;
    }
`

export const Logo = styled.a `
    
`

export const Menu = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`

export const Link = styled.a`
    color: var(--claro);
    text-decoration: none;
`

export const FormPesquisar = styled.form`
    display: flex;

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
        background-color: var(--claro);
        color: var(--escuro);
        padding: .15rem .3rem;
        border-top-right-radius: .625rem;
        border-bottom-right-radius: .625rem;
    }
`

export const Buttons = styled.div`
    a {
        color: var(--claro);
        font-size: 30px;
    }

    button {
        display: none;
    }
`


