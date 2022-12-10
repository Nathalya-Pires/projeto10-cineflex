import styled from "styled-components"

export default function Rodape(){
    return(
        <FilmeEscolhido>
            <Filme>
            <img src="https://image.tmdb.org/t/p/w500/7D430eqZj8y3oVkLFfsWXGRcpEG.jpg" alt="Poster do filme"></img>
        </Filme>
        <span>Enola Holmes</span>
        </FilmeEscolhido>
        
    )
}

const FilmeEscolhido = styled.div`
    width: 100vw;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;

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
    margin: 3%;

 img{
    width: 129px;
    height: 193px;
   
 }
 `
