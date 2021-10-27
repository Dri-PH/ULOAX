import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
export const query = graphl`
query {
  headers {
    btncasa
    btneecc
    btnreserva
    btntaxi
    createdAt
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
    titlebaixe
    titlenossoapp
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

`
export default function Index({ data }) {

  console.log("Data", data)

  return (
    <div>
      <Header 
        logo={}
      />
      <Footer />
    </div>
  );
}
