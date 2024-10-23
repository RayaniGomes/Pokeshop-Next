import styled from "styled-components";

export const ContainerForms = styled.form`
    width: 80%;
    padding: 2rem 0rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    button {
        margin: 1rem auto;
        padding: .75rem 6rem;
        border-radius: .625rem;
        font-weight: 700;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 1rem;
    }
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
        font-weight: 500;
    }

    input {
        width: 100%;
        background-color: var(--amarelo-claro);
        color: var(--claro);
        border: none;
        border-radius: 10px;
        padding: 1rem;
    }

    textarea {
        width: 100%;
        height: 10rem;
        background-color: var(--amarelo-claro);
        border: none;
        color: var(--claro);
        border-radius: 10px;
        padding: 1rem;
    }

    ::placeholder {
        color: var(--claro);
    }

    @media (max-width: 768px) {
        input, textarea {
            padding: .5rem;
        }
    }
`