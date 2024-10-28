import styled from "styled-components";

export const ContainerCarrinho = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1rem;
`

export const DivCarrinho = styled.div`
    width: 900px;
    height: 300px;
    border-radius: .625rem;
    background-color: var(--claro);
    display: flex;
    justify-content: center;
    box-shadow: 5px 5px 10px 0px #00000040;
    padding: 2rem;
    gap: 2rem;
    
    @media (max-width: 1024px) {
        width: 80%;
    }
    
    @media (max-width: 560px) {
        align-items: center;
        height: 190px;
        padding: 1rem;
        gap: 1rem;
    }

    @media (max-width: 320px) {
        width: 90%;
    }
`

export const DivImage = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--escuro);
    border-radius: .625rem;
    box-shadow: 5px 5px 10px 0px #00000040;

    img {
        position: absolute;
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: .625rem;
    }

    @media (max-width: 768px) {
        width: 180px;

        img {
            width: 200px;
            height: 200px;
        }
    }

    @media (max-width: 560px) {
        width: 100px;
        height: 150px;
        img {
            width: 120px;
            height: 120px;
        }
    }

`

export const DivInfo = styled.div`
    width: 70%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media (max-width: 560px) {
        height: 100%;
    }
`

export const InfoTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        color: var(--escuro);
        text-align: left;
        text-transform: capitalize;
    }

    button {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
    }

    @media (max-width: 560px) {
        button {
            width: 25px;
            height: 25px;
        }
    }
`

export const InfoType = styled.div`
    width: 100%;    
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 3rem;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: .25rem;

        p {
            color: var(--amarelo-escuro);
            text-transform: capitalize
        }
    }

    @media (max-width: 560px) {
        margin-bottom: 0;
    }
`

export const InfoPreco = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;

    h3 {
        margin-bottom: 0;
    }

    .quantidade {
        display: flex;
        gap: 2rem;
    }

    @media (max-width: 768px) {
        align-items: flex-start;
        flex-direction: column;
        margin-top: 0;
        gap: 0.5rem;

        .quantidade {
            width: 100%;
            justify-content: space-between;
            gap: 0rem;
        }
    }

    @media (max-width: 560px) {
        
        h3 {
            font-size: 20px;
        }
    }
`

export const Quantidade = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;

    button {
        width: 30px;
        height: 30px;
        border-radius: 100%;
        padding: 0.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
        font-weight: 700;
    }

    input {
        width: 90px;
        border: 1px solid var(--escuro);
        background-color: transparent;
        border-radius: .625rem;;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 560px) {
        button {
            width: 25px;
            height: 25px;
            font-size: 15px;
        }

        input {
            width: 60px;
        }
    }
`

export const Apagar = styled.button`
    background-color: transparent;
    color: var(--escuro);
    font-size: 25px;

    &:hover {
        background-color: transparent;
        color: var(--amarelo-escuro);
    }

    @media (max-width: 560px) {
        font-size: 20px;
    }
`