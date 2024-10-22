import styled from "styled-components";


export const ContainerCarousel = styled.div`
    width: 100%;
    margin: 1rem auto;
    padding: 2rem 0rem;
    overflow: hidden;
    
    .is-selected div:first-child {
        transform: rotateY(180deg);
    }

    .is-selected div:last-child {
        transform: rotateY(360deg);
    }

    @media (max-width: 1024px) {
        width: 100%;
    }
`
export const CardCarousel = styled.div`
    position: relative;
    width: 250px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    background: linear-gradient(360deg, var(--amarelo-escuro) 0%, var(--amarelo-claro) 100%);
    box-shadow: 5px 5px 10px 0px #00000040;
    margin-right: 2rem;
    margin-bottom: 0.5em;

    @media (max-width: 768px) {
        width: 200px;
        height: 300px;
    }
`

export const FrontCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
	backface-visibility: hidden;
	transform-style: preserve-3d;
	transition: all 1s ease;
    transform: rotateY(0deg);
    text-transform: capitalize;
    gap: .5rem;
`

export const BackCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: absolute;
	backface-visibility: hidden;
	transform-style: preserve-3d;
	transition: all 1s ease;
    transform: perspective(500px) rotateY(180deg);
    padding: 1rem;

    p{
        font-size: 12px;
        text-align: center;
    }

    a {
        background-color: var(--escuro);
        color: var(--claro);
        text-decoration: none;
        padding: .5rem;
        border-radius: 5px;
    }

    @media (max-width: 768px) {
        p{
            font-size: 10px;
        }

        a {
            font-size: 10px;
        }
    }
`