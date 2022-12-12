import styled from "styled-components"

export default function Rodape({ data }) {
    const { posterURL, title } = data
  
    return (
        <FilmeEscolhido>
            <Filme>
                <img src={posterURL} alt={title} />
            </Filme>
            <span>{title}</span>
        </FilmeEscolhido>

    )
}

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
