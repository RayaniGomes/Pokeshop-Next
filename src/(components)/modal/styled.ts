import styled from "styled-components";

export const ModalTitle = styled.h4`
    color: var(--escuro);
    text-transform: capitalize;
    margin: auto 0;
`

export const ModalBody = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem;
`

export const Lista = styled.div`
    height: 10rem;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding: 1rem 4rem;
    text-transform: capitalize;
    line-height: .5rem;
    
`

export const Evolution = styled.div`
    display: flex;
    text-transform: capitalize;
`

export const SessionEvolution = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    justify-content: space-around;
`
export const Atributos = styled.div`
    width: 100%;
    background-color: var(--amarelo-escuro);
    border-radius: 10px;
    padding: 1rem;
`

export const Table = styled.table`
    width: 100%;
    height: 100%;
`

export const TableBody = styled.tbody`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    tr {
        display: flex;
        gap: 0.25rem;
    }
`

export const AtributosName = styled.td`
    display: flex;
    align-items: center;
    width: 40%;
    background-color: var(--amarelo-claro);
    border-radius: 10px 0px 0px 10px;
    padding: .25rem .5rem;
    text-transform: capitalize;
`

interface PropsProgress {
    progress: number
}   

export const Progress = styled.td <PropsProgress>`
    width: 100%;
    background-color: var(--amarelo-claro);
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0px 10px 10px 0px;
    padding: .25rem .5rem;

    div {
        width: ${({ progress }) => `${progress}%`};
        background-color: var(--escuro);
    }

    p {
        margin: 0;
    }
`

