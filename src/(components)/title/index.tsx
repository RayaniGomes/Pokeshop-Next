
import { ContainerTitle } from "./styled";

interface PropTitle {
    Children: string
}
export default function Title ({ Children }: PropTitle) {
    return (
        <ContainerTitle>
            <h1>{Children}</h1>
        </ContainerTitle> 
    )
}
