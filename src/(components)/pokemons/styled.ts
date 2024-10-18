import styled from "styled-components";

export const FormPesquisar = styled.form`
    width: 1300px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: .625rem;
    border: 1px solid rgba(0, 0, 0, 0.25);
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: .5rem;
    
    input {
        width: 100%;
        border: none;
        padding: .5rem;
        font-size: 14px;
        color: var(--escuro);
    }

    button {
        opacity: 0.5;
        padding: .5rem;
        background-color: transparent;
        color: var(--escuro);
    }

    @media (max-width: 1440px) {
        width: 90%;
    }
`

export const Mensagem = styled.h3`
    display: flex;
    justify-content: center;
    padding: 4rem 0rem;

    button {
        padding: .5rem;
        border-radius: 0.5rem;
        margin: 0rem 1rem;
    }

    @media (max-width: 1024px) {}
`

export const Voltar = styled.div`
    display: flex;
    justify-content: center;

    button {
        padding: 0.25rem 1rem;
        border-radius: 0.5rem;
        font-weight: 700;
    }
`