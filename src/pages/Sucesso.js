import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Sucesso({ infos, setInfos }) {
    const { filme, data, hora, assentos, cpf, nome } = infos

    return (
        <>
            <MensagemSucesso>
                Pedido feito com sucesso!
            </MensagemSucesso>
            <ContainerCheck>
                <CheckFilme data-test="movie-info">
                    <h1>Filme e sessão</h1>
                    <p>{filme}</p>
                    <p>{data} - {hora}</p>
                </CheckFilme>
                <CheckIngresso data-test="seats-info">
                    <h1>Ingressos</h1>
                    {assentos.map((a, i) => <p key={i}>Assento {a}</p>)}
                </CheckIngresso>
                <CheckComprador data-test="client-info">
                    <h1>Comprador</h1>
                    <p>{nome}</p>
                    <p>{cpf}</p>
                </CheckComprador>

                <button data-test="go-home-btn" onClick={() => setInfos({})}>
                    <Link to={`/`}>
                        Voltar pra Home
                    </Link>
                </button>

            </ContainerCheck>
        </>
    )
}

const MensagemSucesso = styled.div`
    width: 100vw;
    height: 110px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.04em;
    color: #247A6B;
    
`
const ContainerCheck = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    margin: 2.5%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    color: #293845;
    
    h1{
        margin-bottom: 1.5%;
    }

    p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    }

    button{
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    border: none;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    color: #FFFFFF;
    margin: 6%;

    a{
    text-decoration: none;
    color: #FFFFFF;
    }
    }
`
const CheckFilme = styled.div`
    margin: 4%;
`
const CheckIngresso = styled.div`
    margin: 4%;
`
const CheckComprador = styled.div`
    margin: 4%;
`