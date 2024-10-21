import styled from "styled-components";

export const FooterSection = styled.footer`
    width: 100%;
    background-color: var(--amarelo-escuro);  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--claro);

    p {
        font-size: 12px;
    }

    @media (max-width: 320px){
        p {
            font-size: 10px;
        }
    }
`

export const FooterContainer = styled.div`
    width: 1440px;
    margin: 0 auto;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 5rem;

    @media (max-width: 1440px){
        width: 100%;
    }

    @media (max-width: 768px) {
        padding: 1rem;
        gap: 1rem;
    }
`

export const Logo = styled.a`
    display: flex;
    @media (max-width: 768px) {
        width: 30%;

        img {
            width: 5rem;
            height: 3.125rem;
            object-fit: cover;
        }
    }
`

export const InfoFooter = styled.div`
    display: flex;
    gap: 5rem;
    color: var(--claro);


    @media (max-width: 1027px) {
        gap: 1rem;
    }

    @media (max-width: 768px) {
        width: 70%;
        flex-wrap: wrap;
        gap: .5rem;
    }
`

export const Display = styled.div`
    display: flex;
    align-items: flex-start;

    i {
        padding-right: .5rem;
    }

    p {
        font-size: 12px;
    }

    @media (max-width: 320px) {
        p {
            font-size: 10px;
        }
    }
`

export const RedesSociais = styled.div`
    display: flex;
    gap: 1rem;

    a {
        color: var(--claro);
    }
`