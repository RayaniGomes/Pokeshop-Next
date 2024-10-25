import { PokemonDetails } from "@/interfaces";
import { Modal, ProgressBar } from "react-bootstrap";
import { Atributos, AtributosName, Evolution, Lista, ModalBody, ModalTitle, Progress, SessionEvolution, Table, TableBody } from "./styled";
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
                <ModalTitle>Fraquezas</ModalTitle>
                <Lista>
                    {pokemon.weaknesses && pokemon.weaknesses.map((weakness, index) => {
                        return <ul key={index}>
                            <li>{weakness}</li>
                        </ul>
                    })}
                </Lista>
                <ModalTitle>Movimentos</ModalTitle>
                <Lista>
                    {pokemon.moves.map((move, index) => {
                        return <ul key={index}>
                            <li>{move}</li>
                        </ul>
                    })}
                </Lista>
                <ModalTitle>Evolução</ModalTitle>
                <Evolution>
                    {pokemon.evolutions.map((evolution, index) => {
                        return <SessionEvolution key={index}>
                            <p><strong>{`${index + 1}`}º </strong>{evolution}</p>
                            <Image src={pokemon.imageEvolutions[index]} alt={pokemon.name} layout="fixed" width={120} height={120} />
                        </SessionEvolution>
                    })}
                </Evolution>
                <ModalTitle>Atribuições</ModalTitle>
                <Atributos>
                    <Table>
                        <TableBody>
                            {pokemon.stats && pokemon.stats.map((stat, index) => {
                                return (
                                    <tr key={index}>
                                        <AtributosName>{stat.name}</AtributosName>
                                        <Progress progress={stat.base_stat}>
                                            <ProgressBar now={stat.base_stat}/>
                                            <p>{stat.base_stat}</p>
                                        </Progress>
                                    </tr>
                                )
                            })}
                        </TableBody>
                    </Table>
                </Atributos>
            </ModalBody>
        </Modal>
    );
}