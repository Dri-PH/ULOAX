import { graphql , useStaticQuery } from "gatsby";
import React from "react";
import * as S from "./styles";

export function Main() {

  const data = useStaticQuery(graphql`
   
    query {
      taxidata{
        mains {
          backgroundtaxi {
            url
          }
          btnagnedeagr
          divcar1
          divcar2
          divcar3
          divcarimg {
            url
          }
          divcarparagraph
          divlist1
          divlist2
          divlist3
          passeiosimg1 {
            url
          }
          passeiosimg2 {
            url
          }
          passeiosparagraph
          passeiostitle
          titlebaixeapp
          titleh1
          uloaximg1 {
            url
          }
          uloaximg2 {
            url
          }
          uloaxparagraph
          uloaxtitle
        }
      }
    }
  `)
  const { 
    backgroundtaxi,
    btnagnedeagr,
    divcar1,
    divcar2,
    divcar3,
    divcarimg,
    divcarparagraph,
    divlist1,
    divlist2,
    divlist3,
    passeiosimg1,
    passeiosimg2,
    passeiosparagraph,
    passeiostitle,
    titlebaixeapp,
    titleh1,
    uloaximg1,
    uloaximg2,
    uloaximg3,
    uloaxparagraph,
    uloaxtitle
  } = data.taxidata.mains[0]
    return(
        <div>
          <p></p>
        </div>
    )
}