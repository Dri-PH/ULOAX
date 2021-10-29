import React from "react";
import { graphql , useStaticQuery } from "gatsby";
import * as S from "./styles";
import GlobalStyle from "./GlobalStyles";
import Slider from "react-slick";


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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
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
        <Slider {...settings}>
          <S.SliderDiv>
            <span>
              <div>
                <h1>{paragraphagendeagr}</h1>
              </div>
              <figure>
                <img src={taxipng1.url} alt="Iamgem Táxi" />
              </figure>
            </span>
          </S.SliderDiv>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>

    </Slider>
        </S.SlydeCarousel>
      </S.Container>
    )
}