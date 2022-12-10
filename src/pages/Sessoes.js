import styled from "styled-components"
import Rodape from "../components/Rodape"

export default function Sessoes() {
    return (
        <>
            <SelecionaHora>
                Selecione o horário
            </SelecionaHora>

            <Sessao>
                <p>Quinta-feira - 24/06/2021</p>
                <button>15:00</button>
                <button>15:00</button>
            </Sessao>

            <Sessao>
                <p>Quinta-feira - 24/06/2021</p>
                <button>15:00</button>
                <button>15:00</button>
            </Sessao>

            <Rodape/>

            

        </>



    )
}

const SelecionaHora = styled.div`
    width: 100vw;
    height: 110px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    color:#293845;

`
const Sessao = styled.div`
    width: 100vw;
     
    p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    align-items: center;
    letter-spacing: 0.02em;
    margin-left: 2%;
    }

    button{
    width: 83px;
    height: 43px;
    background-color: #E8833A;
    border-radius: 3px;
    border: none;
    margin: 2%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    }
`