import exp from "constants";
import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        list-style: none;
        
    }
`

export const Icones = styled.div`
    display: flex;
    gap: 1rem;

    button {
        background-color: transparent;

        :hover {
            opacity: 0.7;
            transform: scale(1.2);
        }
    }
`