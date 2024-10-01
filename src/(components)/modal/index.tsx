// import { Body, Header, ModalOpen, Title } from "./styled";

import { LitsPokemonsProps, Pokemon, PokemonDetails } from "@/interfaces";
import { Modal, ModalDialog } from "react-bootstrap";
import { ModalHeader } from "./styled";

interface PropModal {
    pokemon: PokemonDetails,
    showModal: boolean,
    handleClose: () => void
}
export default function ModalCard({ pokemon, showModal, handleClose }: PropModal) {
    console.log(pokemon)

    return (
        <Modal show={showModal} onHide={handleClose}>
            <ModalHeader className="modal-header">
                <Modal.Title>{pokemon.name}</Modal.Title>
            </ModalHeader>
            <Modal.Body>
                <div>
                </div>
            </Modal.Body>
        </Modal>
    );
}