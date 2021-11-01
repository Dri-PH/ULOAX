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
    subscribe
  } = data.taxidata.footers[0];

  console.log("teste", data);

  return (
    <>
      <S.Container>
        <S.Box>
          <S.Title>{address}</S.Title>
          <S.Paragraph>{lorem}</S.Paragraph>
        </S.Box>
        <S.Box>
          <S.Title>{links}</S.Title>
          <S.List>{home}</S.List>
          <S.List>{about}</S.List>
          <S.List>{taxi}</S.List>
          <S.List>{booking}</S.List>
          <S.List>{contactus}</S.List>
        </S.Box>
        <S.Box>
          <S.Ul>
            <S.Title>{followus}</S.Title>
            <S.List>{facebook}</S.List>
            <S.List>{twitter}</S.List>
            <S.List>{linkedin}</S.List>
            <S.List>{youtube}</S.List>
            <S.List>{instagram}</S.List>
          </S.Ul>
        </S.Box>
        <S.Box>
          <S.Title>{newsletter}</S.Title>
          <S.Subscribe>{subscribe}</S.Subscribe>
        </S.Box>
      </S.Container>
    </>
  );
}
