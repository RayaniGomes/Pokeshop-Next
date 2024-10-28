import styled from "styled-components";

export const ContainerCarrinho = styled.section`
    width: 1440px;
    min-height: 100vh;
    margin: 0 auto;

    @media (max-width: 1440px) {
        width: 100%;
    }
`

export const SubtitleCarrinho = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
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