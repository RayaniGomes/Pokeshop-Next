import styled from "styled-components";

export const FooterSection = styled.footer`
    width: 100%;
    background-color: var(--amarelo-escuro);  
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: var(--claro);
`

export const FooterContainer = styled.div`
    width: 1440px;
    margin: 0 auto;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 5rem;
`

export const InfoFooter = styled.div`
    display: flex;
    gap: 5rem;
    color: var(--claro);
`

export const RedesSociais = styled.div`
    display: flex;
    gap: 1rem;

    a {
        color: var(--claro);
    }
`