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
        font-size: 14px;
    }

    @media (max-width: 768px){
        p {
            font-size: 12px;
        }
    }

    @media (max-width: 375px){
        justify-content: space-between;
        
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
        img {
            width: 10rem;
            height: 6rem;
            object-fit: cover;
        }
    }

    @media (max-width: 375px) {
        img {
            width: 6rem;
            height: 4rem;
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
        flex-wrap: wrap;
        gap: .5rem;
    }

    @media (max-width: 375px) {
        gap: 0;    
    }
`

export const Display = styled.div`
    display: flex;
    align-items: flex-start;

    i {
        padding-right: .5rem;
    }

    p {
        font-size: 14px;
    }

    @media (max-width: 768px) {
        p {
            font-size: 12px;
        }
    }

    @media (max-width: 375px){
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