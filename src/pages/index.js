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
    divparagraph
    logo {
      id
      url
    }
    paragraph
    paragraphagendeagr
    taxipng1 {
      id
      url
    }
    taxipng2 {
      id
      url
    }
    taxipng3 {
      id
      url
    }
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
