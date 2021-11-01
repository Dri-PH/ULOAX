import { graphql , useStaticQuery } from "gatsby";
import React from "react";
import GlobalStyle from "./GlobalStyles";
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
          mainsubtitle
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
          gpsimg{
            url
          }
        }
      }
    }
  `)
  const { 
    mainsubtitle,
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
    uloaxparagraph,
    uloaxtitle,
    gpsimg
  } = data.taxidata.mains[0]


    return(
        <S.Container>
          <GlobalStyle />
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



          <S.AboutContainer>
            <S.AboutTitle>
              <h2>{mainsubtitle}</h2>
            </S.AboutTitle>


            <S.AboutContent>
              <figure>
                <img src={uloaximg1.url} alt="DECOY" />
              </figure>
              <div>
                <h3>{uloaxtitle}</h3>
                <p>{uloaxparagraph}</p>
                <button>{btnagnedeagr}</button>
              </div>
            </S.AboutContent>
            <S.AboutContent>
              <div>
                <h3>{passeiostitle}</h3>
                <p>{uloaxparagraph}</p>
                <button>{btnagnedeagr}</button>
              </div>
              <figure>
                <img src={uloaximg2.url} alt="DECOY" />
              </figure>
            </S.AboutContent>
            <S.AboutContent>
              <figure>
                <img src={uloaximg2.url} alt="DECOY" />
              </figure>
              <div>
                <h3>{uloaxtitle}</h3>
                <p>{uloaxparagraph}</p>
                <button>{btnagnedeagr}</button>
              </div>
            </S.AboutContent>
            <S.AboutContent>
              <div>
                <h3>{passeiostitle}</h3>
                <p>{uloaxparagraph}</p>
                <button>{btnagnedeagr}</button>
              </div>
              <figure>
                <img src={uloaximg1.url} alt="DECOY" />
              </figure>
            </S.AboutContent>
          </S.AboutContainer>




          <S.LocationContainer back={backgroundtaxi.url}>
            <div>
              <h2>{titlebaixeapp}</h2>
            </div>
            <figure>
              <img src={gpsimg.url} alt="GPS" />
            </figure>
          </S.LocationContainer>
        </S.Container>
    )
}