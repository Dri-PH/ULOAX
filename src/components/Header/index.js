import React from "react";
import { graphql , useStaticQuery } from "gatsby";
import * as S from "./styles";
import GlobalStyle from "./GlobalStyles";
import { Slick } from "./slick"




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
        }
      }
    }
  `)

  const { 
    btncasa, 
    btneecc, 
    btnreserva,  
    btntaxi, 
    logo
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
        <S.SlydeCarousel>
          <Slick />
        </S.SlydeCarousel>
      </S.Container>
    )
}