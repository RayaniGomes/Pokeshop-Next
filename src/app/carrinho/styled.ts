import styled from "styled-components";

export const ContainerCarrinho = styled.main`
    width: 100%;
    min-height: 100vh;
`

export const Subtitle = styled.h3`
    width: 1440px;
    margin: 0 auto;
    padding: 2rem 5rem;

    @media (max-width: 1440px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        padding: 2rem;
    }

    @media (max-width: 650px) {
        padding: 1rem;
    }

`