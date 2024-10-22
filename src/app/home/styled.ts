import styled from "styled-components";

export const TypesPokemons = styled.div`
    background: linear-gradient(360deg, var(--claro) 0%, var(--amarelo-escuro) 100%);
    padding-top: 1rem;
`

export const Container = styled.div`
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem 5rem;
    margin: 0 auto;

    @media (max-width: 1440px) {
        width: 100%;
    }

    @media (min-width: 1024px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        padding: 2rem;
    }
`

export const Subtitle = styled.h2`
    width: 100%;
    font-size: 48px;
    font-weight: 700;
    color: var(--escuro);
    text-transform: capitalize;
    margin: 0 auto;

    @media (max-width: 768px) {
        font-size: 38px;
    }

    @media (max-width: 320px) {
        font-size: 28px;
    }
`