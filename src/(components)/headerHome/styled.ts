import styled from "styled-components";

export const Header = styled.header`
    width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5rem auto;
    padding:  1rem 5rem;    
`

export const ContainerImage = styled.div`
    width: 50%;
`

export const ContainerText = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
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
`