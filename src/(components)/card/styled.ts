import styled from "styled-components";
import React from "react";

export const CardsPokemon = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 80%;
    height: 100%;
    margin: 5rem auto;
    gap: 10rem;
`
export const CardPokemon = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 18.75rem;
    height: 20.3125rem;
    border-radius: .625rem;
    background-color: var(--escuro);
    box-shadow: 5px 5px 10px 0px #00000040;
` as React.ComponentType<{ children: React.ReactNode }>;

export const InfoCard = styled.div`
    width: 100%;
    height: 9.5rem;
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
`

export const TitleCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

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
    }
`
