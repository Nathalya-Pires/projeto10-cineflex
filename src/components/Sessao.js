import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Sessao({ days }) {

    const { weekday, showtimes, date } = days

    return (
        <ContainerSessao>
            <p>{weekday} - {date}</p>
            {showtimes.map((s) =>
                <Link to={`/assentos/${s.id}`}>
                    <button>{s.name}</button>
                </Link>)}
        </ContainerSessao>
    )
}



const ContainerSessao = styled.div`
    width: 100%;
     
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