import styled from "styled-components";

export const ListCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 1440px;
    height: 100%;
    margin: 5rem auto;
    gap: 6rem;
    
    @media (max-width: 1440px) {
        width: 100%;
        padding: 0rem 2rem;
        gap: 4rem;
    }

    @media (max-width: 1024px) {
        width: 90%;
        height: auto;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`