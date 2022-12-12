import { useState } from "react"
import styled from "styled-components"

export default function Assento({ assentos, setAssentos, a, ids, setIds }) {
    const { isAvailable, name, id } = a
    const [clicado, setClicado] = useState({ background: "#C3CFD9", borda: "#808F9D" })
    

    function click(a) {

        if (a.isAvailable === false) {
            return (
                alert("Esse assento não está disponível")
            );
        }

        if (a.isAvailable === true) {
            if (clicado.background === "#1AAE9E" && clicado.borda === "#0E7D71") { //VERDE
                setClicado({ background: "#C3CFD9", borda: "#808F9D" })            //CINZA
                const idsFilter = ids.filter((i) => i !== id)
                setIds([...idsFilter])
                const assentosFilter = assentos.filter((i) => i !== name)
                setAssentos(assentosFilter)
            } else {
                setClicado({ background: "#1AAE9E", borda: "#0E7D71" })
                setIds([...ids, id])
                setAssentos([...assentos, name])
                
            }
        }
        
    }

    return (
        <ContainerAssento onClick={() => click(a)} clicado={clicado} isAvailable={isAvailable}>{name}</ContainerAssento>

    )

}



const ContainerAssento = styled.li`
    width: 26px;
    height: 26px;
    background: ${props => props.isAvailable ? props.clicado.background : "#FBE192"};
    border: 1px solid ${props => props.isAvailable ? props.clicado.borda : "#F7C52B"};
    border-radius: 12px;
    box-sizing: border-box;
    margin: 5px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color: #000000;

`