import { graphql , useStaticQuery } from "gatsby";
import React from "react";
import * as S from "./styles";

export function Header() {
  const data = useStaticQuery(graphql`
    query{
      taxidata{
        headers {
          btncasa
          btneecc
          btnreserva
          btntaxi
          divtitle
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
      <div>
        <p>{btncasa}</p>
      </div>
    )
}