import styled from "styled-components";

export const Icones = styled.div`
    width: 71.875rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin: 0 auto;
    gap: .5rem;

    button {
        background-color: transparent;

        :hover {
            opacity: 0.6;
            transform: scale(1.2);
        }
    }

    @media (max-width: 1024px) {
        display: none;
    }
`

export const EmblaCarousel = styled.div`
    display: none;

    @media (max-width: 1024px) {
        width: 100%;
        display: flex;
        align-items: center;
        margin: 0 auto;
    }
`

export const Embla = styled.div`
    
    @media (max-width: 1024px) {
        width: 99%;
        padding: .5rem ;
        margin: auto 0;
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
    width: 10%;
    display: flex;
    margin: 0 .25rem;
    gap: .5rem;
`

export const EmblaButtons = styled.div`
    color: var(--escuro);
    display: flex;
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
