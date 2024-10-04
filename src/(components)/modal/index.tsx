import { PokemonDetails } from "@/interfaces";
import { Modal } from "react-bootstrap";
import { Evolution, ModalBody, ModalTitle, Movimentos, SessionEvolution } from "./styled";
import Image from "next/image";

interface PropModal {
    pokemon: PokemonDetails,
    showModal: boolean,
    handleClose: () => void
}
export default function ModalCard({ pokemon, showModal, handleClose }: PropModal) {
    console.log(pokemon)

    return (
        <Modal show={showModal} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <ModalTitle>{pokemon.name}</ModalTitle>
            </Modal.Header>
            <ModalBody>
            <ModalTitle>Movimentos</ModalTitle>
                <Movimentos>
                    {pokemon.moves.map((move, index) => { 
                        return <ul key={index}>
                            <li>{move}</li>
                        </ul>
                    })}
                </Movimentos>
                <ModalTitle>Evolução</ModalTitle>
                <Evolution>
                    {pokemon.evolutions.map((evolution, index) => {
                        return <SessionEvolution key={index}>
                            <p><strong>{`${index + 1}`}º </strong>{evolution}</p>
                            <Image src={pokemon.imageEvolutions[index]} alt={pokemon.name} layout="fixed" width={120} height={120} />
                            <p></p>
                        </SessionEvolution>
                    })}
                </Evolution>
                
            </ModalBody>
        </Modal>
                );
}