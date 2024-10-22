import styled from "styled-components";

export const Header = styled.header`
    width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0rem auto;
    margin-top: 5rem;
    padding: 2rem 5rem;  

    @media (max-width: 1440px) {
        width: 100%;
    }

    @media (max-width: 768px) {
        padding: 2rem;
    }

    @media (max-width: 320px) {
        padding: 1rem;
    }
`

export const ContainerImage = styled.div`
    width: 50%;

    @media (max-width: 1024px) {
        img {
            width: 100%;
            height: 100%;
        }
    }
`

export const ContainerText = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;

    @media (max-width: 1024px) {
        img {
            width: 100%;
            height: 100%;
        }
    }

    @media (max-width: 768px) {
        h3 {
            font-size: 18px;
        }
    }

    @media (max-width: 320px) {
        h3 {
            font-size: 12px;
        }
    }
`

export const Redes = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    a {
        text-decoration: none;
        color: var(--escuro);
        font-size: 2rem;

        :hover {
            color: var(--amarelo-escuro);
            transition: all 0.3s ease-in-out;
        }
    }

    @media (max-width: 768px) {
        gap: 1rem;

        a{
            font-size: 1.2rem;
        }
    }

    @media (max-width: 320px) {
        a{
            font-size: 1rem;
        }
    }
`