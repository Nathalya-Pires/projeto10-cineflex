import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Sessao({ infos, setInfos, days }) {

    const { weekday, showtimes, date } = days
    
    return (
        <ContainerSessao data-test="movie-day">
            <p>{weekday} - {date}</p>
            {showtimes.map((s) =>

                <button key={s.id}>
                    <Link data-test="showtime"
                        onClick={()=>(setInfos({ ...infos, data: date, hora: s.name, dia:weekday}))}
                        to={`/assentos/${s.id}`}>
                        {s.name}
                    </Link>
                </button>
            )}
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
    
    a{
        text-decoration: none;
        color: #FFFFFF;
    }

    }
`