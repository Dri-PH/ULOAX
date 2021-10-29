import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border: solid blue;
  background-color: black;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  border: solid red;
  width: 25%;
  align-items: center;
`;

export const Title = styled.h1`
  color: white;
`;

export const Paragraph = styled.p`
  border: solid;
  color: white;
`;

export const List = styled.li`
  color: white;
  
`;
export const Ul = styled.ul`
  color: white;
`;
export const Subscribe = styled.button`
  color: white;
`;
