import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"


export default function Formulario({ assentos, infos, setInfos, ids }) {
    const navigate = useNavigate()
    const [nome, setNome] = useState("")
    const [cpf, setCpf] = useState("")


    function enviaForm(e) {
        e.preventDefault()

        setInfos({...infos, nome: nome, cpf: cpf, assentos: assentos})

        const requisicao = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
            ids: ids,
            name: nome,
            cpf: cpf
        })
        requisicao.then((res) => (navigate("/sucesso")))
        requisicao.catch(err => alert(err.response.data))


    }


    return (
        <ContainerValidacao onSubmit={enviaForm}>
            <Comprador>
                Nome do comprador:
                <input type="text" minLength={5} required value={nome} onChange={e => setNome(e.target.value)} placeholder="Digite seu nome..." />
            </Comprador>

            <DocComprador>
                CPF do comprador:
                <input type="text" pattern={"([0-9]{3})[\.]?([0-9]{3})[\.]?([0-9]{3})[\-]?([0-9]{2})"} required title={"Digite um CPF"} value={cpf} onChange={e => setCpf(e.target.value)} placeholder="Digite seu CPF..." />
            </DocComprador>

            <button type="submit">Reservar assento(s)</button>

        </ContainerValidacao>

    )
}



const ContainerValidacao = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    margin: 2% 0 100px;
   
    
    input{
    width: 100%;
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
    margin: 5%;
    }
`
const Comprador = styled.label`
    width: 80%;
    display: flex;
    flex-direction: column;

`
const DocComprador = styled.label`
    width: 80%;
    display: flex;
    flex-direction: column;
`