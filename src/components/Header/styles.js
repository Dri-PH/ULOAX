import styled from "styled-components";

export const Container = styled.section`
    display:flex;
    flex-direction:column;
`;
export const Navbar = styled.div`
    height:10vh;
    background: linear-gradient( 0deg, 
        rgba(41,41,41,1) 0%, 
        rgba(19,19,19,1) 34%, 
        rgba(0,0,0,1) 100%);

    display:flex;
    align-items: center;
    justify-content: space-around;
    border-bottom:solid  rgba(0,0,0,1) 2px;
    nav{
        width:50%;
        display:flex;
        align-items: center;
        justify-content: space-around;
    }
    button{
        margin-top:5px;
        background:none;
        color:white;
        height: 8vh;
        font-size:1rem;
        border:none;
        &:hover {
            color:#fd7e14;
            transition: ease 370ms;
            transition-delay: 500ms;
            filter: brightness(175%);
        }
    
    }
`;
export const SlydeCaruosel = styled.div`
    background: rgba(19,19,19,1);
    height:82vh;
    box-shadow: inset 0 0 50px 0 rgba(0,0,0,1);
`;