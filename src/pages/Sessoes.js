import styled from "styled-components"

export default function Sessoes(){
    return(
       <Sessao>
        <div>
            Selecione o horário
        </div>
        <div>Quinta-feira - 24/06/2021</div>
        <button>15:00</button>
        <button>15:00</button>
       </Sessao>
    )
}

const Sessao = styled.div`
width: 100vw;
background-color: yellow;


`
