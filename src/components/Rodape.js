import styled from "styled-components"

export default function Rodape({ infos}) {
    const { imagem, filme, dia, hora } = infos

    return (
        <FilmeEscolhido data-test="footer">
            <Filme>
                <img src={imagem} alt={filme} />
            </Filme>
            <Legenda>
                <p>{filme}</p>
                <p>{dia}  {hora}</p></Legenda>
        </FilmeEscolhido>
    )
}

const Legenda = styled.div`
    display: flex;
    flex-direction: column;
`
const FilmeEscolhido = styled.div`
    width: 100%;
    height: 117px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 30px;
    display: flex;
    align-items: center;
    position: fixed;
    bottom: 0;
`
const Filme = styled.div`
    width: 66px;
    height: 90px;
    background-color: #FFFFFF;
    border-radius: 3px;   
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 3%;

 img{
    width: 50px;
    height: 73px;
   
 }
`
