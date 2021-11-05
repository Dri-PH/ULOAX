import styled from "styled-components";

export const Transitionfooter = styled.section`
  background-color: white;
  height: 5vh;
  p {
    color: white;
  }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: row;

  background: rgba(19,19,19,1);
`;
export const Copy = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 20vw;
  padding-left: 5vw;

  p {
    color: white;
  }
  ul {
    color: white;
    padding-left: 1vw;
    list-style: none;
    padding-bottom: 1vw;
  }
  li {
    padding-bottom: 1vw;
  }
  div {
    display: flex;
    flex-direction: row;
  }
  button {
    color: white;
    background-color: yellow;
    width: 9vw;
    height: 3vw;
    border-radius: 0.5vw;
  }
  nav {
    display: flex;
    flex-direction: column;
  }
  article {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  img {
    width: 1.5vw;
    padding-bottom: 1vw;
  }

  section {
    display: flex;
    flex-direction: row;
  }
  input {
    width: 12vw;
    height: 3vw;
    color: white;
    background-color: white;
    border-radius: 0.5vw;
  }
`;

export const Title = styled.h1`
  color: white;
`;
