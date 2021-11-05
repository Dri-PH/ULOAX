import styled from "styled-components";

export const Container = styled.section`
    display:flex;
    flex-direction:column;
`;
export const Navbar = styled.div`
    height:10vh;
    background: rgba(19,19,19,1);

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
export const SlydeCarousel = styled.div`
    background: rgba(19,19,19,1);
    box-shadow: inset 0 0 50px 0 rgba(0,0,0,1);
    color:red;
    width:100%;
`;
////////////Slick.js//////////////
export const SliderFace = styled.div`
    border:solid 2px red;
    display:flex;

    div{
        filter: brightness(160%);
        background:#fd7e14;
        display:flex;
        justify-content:center;
        width:25rem;

    }
    p{
        border:solid 2px red;
        text-align:center;
        font-size:2.5rem;
        color:black;
        &::before {
            content: "AGENDE AGORA";
            color: white;
            position: absolute;
          }
    }
    figure{
        border:solid 2px red;
        width:30rem;
    }
    img{
        width:100%;
    }
`;
export const DivCar = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    border:solid 2px blue;
    div{
        filter: brightness(160%);
        background:#fd7e14;
        display:flex;
        justify-content:center;
        width:25rem;

    }
`;

//////////////////////////////////