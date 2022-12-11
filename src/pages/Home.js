import { useEffect, useState } from "react"
import styled from "styled-components"
import axios from "axios"
import carregando from "../assets/carregando.gif"
import { Link } from "react-router-dom"

export default function Home() {
    const [filmes, setFilmes] = useState(undefined)

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v8/cineflex/movies"
        const requisicao = axios.get(URL);
        requisicao.then(res => {setFilmes(res.data)})
        requisicao.catch((err) => alert(err.response.data.message))
        }, [])

    if (filmes === undefined){
        return <Loading src={carregando}/>
    }

    return (
        <>
            <SelecionaFilme>
                Selecione o filme
            </SelecionaFilme>
            <ListaFilmes>
                { filmes.map((f) => <Filme key={f.id}>
                    <Link to={`/sessoes/${f.id}`}>
                    <img src={f.posterURL} alt={f.title}/>
                    </Link>
                </Filme>) }
            </ListaFilmes>
        </>
    )

}

const SelecionaFilme = styled.div`
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
const ListaFilmes = styled.div`
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    
`
const Filme = styled.div`
    width: 145px;
    height: 209px;
    background-color: #FFFFFF;
    border-radius: 3px;   
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    margin: 1%;
    display: flex;
    align-items: center;
    justify-content: center;

 img{
    width: 129px;
    height: 193px;
    }
`
const Loading = styled.img`
    width: 50%;
    margin: 23% 27% 27% 27%;
`

