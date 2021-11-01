import styled from "styled-components";

export const Container = styled.section`
    border:solid red 3px;
    display: flex ;
    flex-direction:column;
`;
export const NavContainer =styled.section`

    margin-top:5rem;
    heigh:70rem;
    display:flex;
    flex-direction:column;
    justify-content:space evenly;
    border:solid purple 3px;
    background: rgba(16,21,25,1);
    box-shadow: inset 0 0 100px 0 rgba(0,0,0,1);
`;
export const NavTitle = styled.div`
    border:solid orange 3px;
    width:100%;
    display: flex ;
    justify-content:center;
    h1{
        font-size:3rem;
        color:yellow;
        &::before {
            content: "Nosso";
            color: white;
            position: absolute;
          }
    }
`;
export const NavHub = styled.nav`
    border: solid white 2px;
    display:flex;
    align-itens:center;
    justify-content: space-around;
`;
export const NavCards = styled.div`
    display:flex;
    flex-direction:column;
    border:solid orange 3px;
    background:#fff;
    width:20rem;
    h2{
        border:solid green 1px;
  
    }
    h3{
        border:solid green 1px;
        text-align:center;
      ;
    }
    p{
        border:solid green 1px;
        font-size:1rem;
        text-align:center;
        width:8rem;
    }
    img{
        width:100%;
    }
`;





export const AboutContainer = styled.section`
    border:solid purple 3px;
    display:flex;
    flex-direction:column;
`;
export const AboutTitle = styled.div`
    border:solid orange 3px;
    h2{

    }
`;
export const AboutContent = styled.div`
    border:solid darkgreen 3px;
    display:flex;
    justify-content:center;
`;
export const LocationContainer = styled.section`
border:solid green 3px;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    background: url(${props => props.back});
    background-size: cover;
    img{
        border: solid darkgreen 3px;
        width:100%;
    }
`;