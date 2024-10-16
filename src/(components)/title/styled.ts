import styled from "styled-components";

export const ContainerTitle = styled.div`
    width: 100%;
    height: 15rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(360deg, var(--claro) 0%, var(--amarelo-escuro) 100%);
    margin-top: 5rem;
    
    h1 {
        font-size: 64px;
        text-align: center;
    }


    @media (min-width: 1024px) {
        h1 {
            font-size: 50px;
        }
    }
`