import styled from "styled-components";

export const ContainerForms = styled.div`
    width: 100%;
    padding: 2rem 0rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`

export const LinhaOne = styled.div`
    width: 100%;
    display: flex;
    gap: 1rem;
`

export const CampoText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    label {
        color: var(--escuro);
    }

    input, textarea {
        width: 100%;
        background-color: var(--amarelo-claro);
        border: none;
        border-radius: 10px;
        padding: .5rem;
    }

    ::placeholder {
        color: var(--claro);
    }
`