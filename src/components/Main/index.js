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
       <S.Container>
         <S.NavContainer>
            <S.NavTitle>
              <h1>{titleh1}</h1>
            </S.NavTitle>
            <S.NavHub>
              <S.NavCards>
                <h2>{divlist1}</h2>
                <h3>{divcar1}</h3>
                <p>{divcarparagraph}</p>
                <figure>
                  <img src={divcarimg.url} alt="Imagem TAXI" />
                </figure>
              </S.NavCards>
              <S.NavCards>
                <h2>{divlist2}</h2>
                <h3>{divcar2}</h3>
                <p>{divcarparagraph}</p>
                <figure>
                  <img src={divcarimg.url} alt="Imagem TAXI" />
                </figure>
              </S.NavCards>
              <S.NavCards>
                <h2>{divlist3}</h2>
                <h3>{divcar3}</h3>
                <p>{divcarparagraph}</p>
                <figure>
                  <img src={divcarimg.url} alt="Imagem TAXI" />
                </figure>
              </S.NavCards>
            </S.NavHub>
         </S.NavContainer>
       </S.Container>
    )
}