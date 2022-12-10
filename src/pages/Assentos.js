import styled from "styled-components"
import Rodape from "../components/Rodape"

export default function Assentos() {
    return (
        <>
            <SelecionaAssento>
                Selecione o(s) assento(s)
            </SelecionaAssento>
            <ListaAssentos>
                <Assento>
                    01
                </Assento>
                <Assento>
                    01
                </Assento>
                <Assento>
                    01
                </Assento>
                <Assento>
                    01
                </Assento>
            </ListaAssentos>
            <Legenda>

                <LegSel>
                    <div></div>
                    <p>Selecionado</p>
                </LegSel>

                <LegDisp>
                    <div></div>
                    <p>Disponível</p>
                </LegDisp>

                <LegInd>
                    <div></div>
                    <p>Indisponível</p>
                </LegInd>

            </Legenda>
            <ContainerValidacao>
            <Comprador>
            Nome do comprador:
            <input type="text" name="name" placeholder="Digite seu nome..." />
            </Comprador>

            <DocComprador>
            CPF do comprador:
            <input type="text" name="cpf" placeholder="Digite seu CPF..." />
            </DocComprador>

            <button>Reservar assento(s)</button>

            </ContainerValidacao>
            <Rodape/>

        </>
    )
}

const SelecionaAssento = styled.div`
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
const ListaAssentos = styled.ul`
    width: 100vw;
    background-color: red;
    display: flex;
    justify-content: space-between;
    `
const Assento = styled.li`
    width: 26px;
    height: 26px;
    background: #C3CFD9;
    border: 1px solid #808F9D;
    border-radius: 12px;
    box-sizing: border-box;

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
const Legenda = styled.div`
    width: 100vw;
    display: flex;
    justify-content:center;
    
    div{
        margin:2%;
    }

    p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 15px;
    display: flex;
    align-items: center;
    letter-spacing: -0.013em;
    color: #4E5A65;
    }
    
`
const LegSel = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
    width: 25px;
    height: 25px;
    background: #1AAE9E;
    border: 1px solid #0E7D71;
    border-radius: 17px;
    }
`
const LegDisp = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
    width: 25px;
    height: 25px;
    background: #C3CFD9;
    border: 1px solid #7B8B99;
    border-radius: 17px;
    }
`
const LegInd = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
    width: 25px;
    height: 25px;
    background: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 17px;
    }
`
const ContainerValidacao = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin: 5%;

    input{
    width: 327px;
    height: 51px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    margin: 1%;
    padding: 2%;

    ::placeholder{
    padding: 2%;
    font-family: 'Roboto';
    font-style: italic;
    font-weight: 400;
    font-size: 15px;
    line-height: 21px;
    color: #AFAFAF;
    }

    }

    button{
    width: 225px;
    height: 42px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.04em;
    color: #FFFFFF;
    background: #E8833A;
    border-radius: 3px;
    border: none;
    margin: 5%;;
    }
`
const Comprador = styled.label`
    display: flex;
    flex-direction: column;

`
const DocComprador = styled.label`
    display: flex;
    flex-direction: column;

    
`