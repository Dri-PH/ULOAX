import { graphql , useStaticQuery } from "gatsby";
import React from "react";
import * as S from "./styles";

export function Main() {

  const data = useStaticQuery(graphql`
   
    query {
      taxidata{
        mains {
          backgroundtaxi{
            url
          }
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
    titlebaixe,
    titlenossoapp,
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
          <p>{btnagnedeagr}</p>
        </div>
    )
}