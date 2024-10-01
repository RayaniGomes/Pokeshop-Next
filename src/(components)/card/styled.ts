import styled from "styled-components";
import React from "react";

export const CardsPokemon = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 71.875rem;
    height: 100%;
    margin: 5rem auto;
    gap: 2rem;
`
export const CardPokemon = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 18.75rem;
    height: 22rem;
    border-radius: .625rem;
    background-color: var(--escuro);
    box-shadow: 5px 5px 10px 0px #00000040;
` as React.ComponentType<{ children: React.ReactNode }>;

export const ImagemCard = styled.div`
    width: 11.25rem;
    height: 11.25rem;
    object-fit: cover;
`

export const InfoCard = styled.div`
    width: 100%;
    height: 100%;
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
`
