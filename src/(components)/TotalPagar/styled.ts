import styled from "styled-components";

export const ContainerTotal = styled.div`
    width: 1250px;
    background-color: var(--amarelo-escuro);
    border-radius: .625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin: 5rem auto;
    padding: 1rem;

    @media (max-width: 1440px) {
        width: 85%;
    }
`

export const Total = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
        font-weight: 700;
    }
`

export const ButtonTotal = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: right;

    button {
        padding: .5rem;
        border-radius: .625rem;
        text-transform: uppercase;
        font-size: 14px;
    }

    @media (max-width: 768px) {
        button {
            font-size: 12px;
        }
    }
`

