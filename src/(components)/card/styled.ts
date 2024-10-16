import styled from "styled-components";

interface PropsCardPokemon {
    bgColor: string;
}

export const CardPokemon = styled.div<PropsCardPokemon>`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 18.75rem;
    height: 22rem;
    border-radius: .625rem;
    background-color: ${({ bgColor }) => bgColor || "var(--escuro)"};
    box-shadow: 5px 20px 10px 0px #00000040;

    @media (max-width: 1024px) {
        width: 15rem;
        height: auto;
    }
`

export const ImagemCard = styled.div`   
    padding: .5rem;
`

export const InfoCard = styled.div`
    width: 100%;
    background-color: var(--claro);
    border-bottom-left-radius: .625rem;
    border-bottom-right-radius: .625rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const BodyInfo = styled.div`
    display: flex;
    flex-direction: column;

    p{
        color: var(--amarelo-escuro);
    }

    @media (max-width: 1024px) {
        p {
            font-size: 12px;
        }
    }
`

export const TitleCard = styled.div`
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
        padding: 0.25rem;
    }

    @media (max-width: 1024px) {
        h3 {
            font-size: 20px;
        }

        button {
            width: 25px;
            height: 25px;
            font-size: 12px;
            font-weight: 700;
        }
    }
`

export const Typo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-transform: capitalize;
    text-align: center;
    margin-top: .25rem;
`

export const FooterInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
        color: var(--escuro);
    }

    button {
        font-size: 16px;
        font-weight: 700;
        padding: 0.25rem 1rem;
        border-radius: 0.5rem;
    }

    @media (max-width: 1024px) {
        h4 {
            font-size: 16px;
        }

        button {
            font-size: 12px;
            font-weight: 700;
        }
    }
`
