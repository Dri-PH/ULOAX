import { graphql , useStaticQuery } from "gatsby";
import React from "react";
import * as S from "./styles";
import GlobalStyle from "./GlobalStyles";

export function Header() {
  const data = useStaticQuery(graphql`
    query{
      taxidata{
        headers {
          btncasa
          btneecc
          btnreserva
          btntaxi
          logo {
            url
          }
          paragraph
          paragraphagendeagr
          taxipng1 {
            url
          }
          taxipng2 {
            url
          }
          taxipng3 {
            url
          }
          divtitle
        }
      }
    }
  `)

  const { 
    btncasa, 
    btneecc, 
    btnreserva,  
    btntaxi, 
    divtitle,
    logo, 
    paragraph,  
    paragraphagendeagr,  
    taxipng1,  
    taxipng2, 
    taxipng3 
  } = data.taxidata.headers[0]

    return (
      <S.Container>
        <GlobalStyle />
        <S.Navbar>
          <div>
            <img src={logo.url} alt="ULOAX"/>
          </div>
          <nav>
            <button>{btncasa}</button>
            <button>{btntaxi}</button>
            <button>{btnreserva}</button>
            <button>{btneecc}</button>
          </nav>
        </S.Navbar>
        <S.SlydeCaruosel>
          <div>
            <p>{paragraphagendeagr}</p>
          </div>
        </S.SlydeCaruosel>
      </S.Container>
    )
}