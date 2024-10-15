import exp from "constants";
import styled from "styled-components";

export const Icones = styled.div`
    width: 71.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    padding: 1rem;
    margin: 0 auto;

    button {
        background-color: transparent;

        :hover {
            transform: scale(1.2);
        }
    }

    @media (max-width: 1024px) {
        display: none;
    }
`

export const Embla = styled.div`
    @media (min-width: 1024px) {
        display: none;
    }
    
    @media (max-width: 1024px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;    
        margin: 0 auto;
        padding: 1rem 0rem;
        overflow: hidden;

        button {
            background-color: transparent;
            
            :hover {
                transform: scale(1.2);
            }
            
        }
    }
    `

export  const EmblaContainer = styled.div`
    display: flex;
    gap: .5rem;
`
export const EmblaButtons = styled.div`
    color: var(--escuro);
    width: 100%;
    display: flex;
    align-items: center;
    gap: .5rem;
    padding: 0rem 1rem;
    
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        color: var(--escuro);
        border-radius: 100%;
        width: 2rem;
        height: 2em;
        background-color: rgba(0, 0, 0, 0.25);
        font-size: 1rem;
        color: var(--claro);
    }
`
