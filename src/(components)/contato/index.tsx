import { CampoText, ContainerForms, LinhaOne } from "./styled";
import InputMask from 'react-input-mask';
export default function Contato() {
    return (
        <ContainerForms>
            <LinhaOne>
                <CampoText>
                    <label htmlFor="">Nome*</label>
                    <input type="text" placeholder="Nome completo" required/>
                </CampoText>
                <CampoText>
                    <label htmlFor="">Telefone*</label>
                    <InputMask
                        type="tel"
                        mask="(99) 99999-9999"
                        placeholder="(99) 99999-9999"
                        required
                    />
                </CampoText>
            </LinhaOne>
            <CampoText>
                <label htmlFor="">E-mail*</label>
                <input 
                    type="email" 
                    placeholder="contato@email.com" 
                    required 
                />
            </CampoText>
            <CampoText>
                <label htmlFor="">Mensagem*</label>
                <textarea name="" id="" placeholder="O que você precisa?" required/>
            </CampoText>
            <button type="submit">Enviar</button>
        </ContainerForms >
    );
}
