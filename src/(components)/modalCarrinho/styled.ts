import styled from "styled-components";

export const CarrinhoModal = styled.div`
    display: flex;
    background-color: var(--claro);
    border-radius: .625rem;
    box-shadow: 5px 5px 10px 0px #00000040;
    padding: 1rem;
    gap: 1rem;
`

export const ImageProduto = styled.div`
    width: 80px;
    height: 100px;
    border-radius: .625rem;
    background-color: var(--escuro);
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InfoProduto = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    h3 {
        font-size: 18px;
    }
`

export const QuantidadeProduto = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    .quantidade {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    h4 {
        font-size: 16px;
        margin: 0;
    }

    button {
        width: 20px;
        height: 20px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        font-weight: 500;
    }

    input {
        width: 50px;
        border: 1px solid var(--escuro);
        background-color: transparent;
        border-radius: .625rem;;
        text-align: center;
        font-size: 12px;
        padding: .2rem 0rem;
    }
`

export const ApagarItem = styled.button`
    width: 20px;
    height: 20px;
    background-color: transparent;
    color: var(--escuro);
    border-radius: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    margin-left: 1rem;

    &:hover {
        background-color: transparent;
        color: var(--amarelo-escuro);
    }
`