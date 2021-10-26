import React from "react";
import * as S from "./styles";

import { graphql, useStaticQuery } from "gatsby";

export function Footer() {
  const data = useStaticQuery(graphql`
    query {
      taxidata {
        footers {
          address
          lorem
          links
          home
          about
          taxi
          booking
          contactus
          followus
          facebook
          twitter
          linkedin
          youtube
          instagram
          iconfacebook {
            url
          }
          icontwitter {
            url
          }
          iconyoutube {
            url
          }
          iconinstagram {
            url
          }
          iconlinkedin {
            url
          }
          newsletter
          inputenter
          subscribe
        }
      }
    }
  `);
  const {
    address,
    lorem,
    links,
    home,
    about,
    taxi,
    booking,
    contactus,
    followus,
    facebook,
    twitter,
    linkedin,
    youtube,
    instagram,
    iconfacebook,
    icontwitter,
    iconyoutube,
    iconinstagram,
    iconlinkedin,
    newsletter,
    inputenter,
    subscribe
  } = data.taxidata.footers[0];

  return (
    <div>
      console.log("teste",data)
      {address}
    </div>
  );
}
