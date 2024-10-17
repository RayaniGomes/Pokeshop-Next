import styled from "styled-components";

export const ListCards = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 1440px;
    height: 100%;
    margin: 5rem auto;
    gap: 6rem;
    overflow-x: hidden;
    padding: 2rem 5rem;
    
    @media (max-width: 1440px) {
        width: 100%;
    }

    @media (max-width: 1024px) {
        width: 90%;
        height: auto;
    }

    @media (max-width: 768px) {
        width: 90%;
    }
`