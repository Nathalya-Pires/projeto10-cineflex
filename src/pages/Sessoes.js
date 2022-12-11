import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import carregando from "../assets/carregando.gif"
import styled from "styled-components"
import Rodape from "../components/Rodape"
import Sessao from "../components/Sessao"

export default function Sessoes() {
    const { idFilme } = useParams()
    const [days, setDays] = useState(undefined)
    const [data, setData] = useState(undefined)

    useEffect(() => {
        const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${idFilme}/showtimes`
        const requisicao = axios.get(URL);
        requisicao.then(res => (setDays(res.data.days),
        setData(res.data)))
        requisicao.catch((err) => alert(err.response.data.message))

    }, [])

    if (days === undefined) {
        return <Loading src={carregando} />
    }

    return (
        <>
            <SelecionaHora>
                Selecione o horário
            </SelecionaHora>
            {days.map((days) => <Sessao days={days} />)}
            <Rodape data={data} />
        </>
    )
}

const SelecionaHora = styled.div`
    width: 100%;
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

const Loading = styled.img`
    width: 50%;
    margin: 23% 27% 27% 27%;
`