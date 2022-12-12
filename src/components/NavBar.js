import styled from "styled-components"

export default function NavBar(){
    return(
       <Navbar>
        CINEFLEX
       </Navbar> 
    )
}

const Navbar = styled.div`
width: 100%;
height: 67px;
font-family: 'Roboto', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 34px;
line-height: 40px;
color:#E8833A;
display: flex;
align-items: center;
justify-content: center;
background-color: #C3CFD9;
`