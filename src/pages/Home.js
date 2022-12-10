import styled from "styled-components"

export default function Home() {
    return (
        <>
            <SelecionaFilme>
            Selecione o filme
            </SelecionaFilme>
            <ListaFilmes>
                
                <Filme>
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="Poster do filme"></img>
                </Filme>
                <Filme>
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="Poster do filme"></img>
                </Filme>
                <Filme>
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="Poster do filme"></img>
                </Filme>
                <Filme>
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="Poster do filme"></img>
                </Filme>
                <Filme>
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="Poster do filme"></img>
                </Filme>
                <Filme>
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="Poster do filme"></img>
                </Filme>
                <Filme>
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="Poster do filme"></img>
                </Filme>
                <Filme>
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="Poster do filme"></img>
                </Filme>
                <Filme>
                    <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="Poster do filme"></img>
                </Filme>
                
            </ListaFilmes>
        </>
    )

}

const SelecionaFilme = styled.div`
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

const ListaFilmes = styled.div`

    width: 100vw;
    
    background-color: #FFFFFF;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
 `

const Filme = styled.div`
    width: 145px;
    height: 209px;
    background-color: #FFFFFF;
    border-radius: 3px;   
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;

 img{
    width: 129px;
    height: 193px;
   
 }
 `

