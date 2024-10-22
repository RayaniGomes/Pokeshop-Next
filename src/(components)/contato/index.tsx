import { CampoText, ContainerForms, LinhaOne } from "./styled";

export default function Contato() {
    return (
        <ContainerForms>
            <LinhaOne>
                <CampoText>
                    <label htmlFor="">Nome</label>
                    <input type="text" placeholder="Nome completo" />
                </CampoText>
                <CampoText>
                    <label htmlFor="">Telefone</label>
                    <input type="text" placeholder="(21) 99999-9999" />
                </CampoText>
            </LinhaOne>
            <CampoText>
                <label htmlFor="">E-mail</label>
                <input type="text" placeholder="contato@email.com" />
            </CampoText>
            <CampoText>
                <label htmlFor="">Mensagem</label>
                <textarea name="" id="" placeholder="O que você precisa?" />
            </CampoText>
        </ContainerForms>
    )
}