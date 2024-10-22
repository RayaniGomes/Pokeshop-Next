import styled from "styled-components";

export const TypesPokemons = styled.div`
    background: linear-gradient(360deg, var(--claro) 0%, var(--amarelo-escuro) 100%);
`

export const Container = styled.div`
    width: 1440px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;

    @media (max-width: 1440px) {
        width: 100%;
    }

    @media (min-width: 1024px) {
        width: 100%;
    }
`

export const Subtitle = styled.h2`
    width: 100%;
    font-size: 48px;
    font-weight: 700;
    color: var(--escuro);
    text-transform: capitalize;
    padding: 0 5rem;
    margin: 0 auto;
`