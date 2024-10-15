import styled from "styled-components";

export const PaginationContainer = styled.div`
    width: 100dvw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;

    button {
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        padding: .25rem;
        margin: 0 .5rem;
    }

    @media (max-width: 992px) {
        width: 100%;
    }
`