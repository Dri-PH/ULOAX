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
          copyright
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
          icon {
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
    icon,
    iconfacebook,
    icontwitter,
    iconyoutube,
    iconinstagram,
    iconlinkedin,
    newsletter,
    copyright,
    subscribe
  } = data.taxidata.footers[0];

  console.log("teste", data);

  return (
    <>
      <S.Transitionfooter>
        <p>Esater-egg</p>
      </S.Transitionfooter>
      <S.Container>
        <S.Box>
          <S.Title>{address}</S.Title>
          <p>{lorem}</p>
        </S.Box>
        <S.Box>
          <S.Title>{links}</S.Title>
          <section>
            <nav>
              <img src={icon.url} alt="icon " />
              <img src={icon.url} alt="Icon " />
              <img src={icon.url} alt="Icon " />
              <img src={icon.url} alt="Icon " />
              <img src={icon.url} alt="Icon " />
            </nav>
            <ul>
              <li>{home}</li>
              <li>{about}</li>
              <li>{taxi}</li>
              <li>{booking}</li>
              <li>{contactus}</li>
            </ul>
          </section>
        </S.Box>
        <S.Box>
          <S.Title>{followus}</S.Title>
          <section>
            <nav>
              <img src={iconfacebook.url} alt="icon Facebook" />
              <img src={icontwitter.url} alt="Icon Twitter" />
              <img src={iconlinkedin.url} alt="Icon linkedin" />
              <img src={iconyoutube.url} alt="Icon Youtube" />
              <img src={iconinstagram.url} alt="Icon Instagram" />
            </nav>
            <ul>
              <li>{facebook}</li>
              <li>{twitter}</li>
              <li>{linkedin}</li>
              <li>{youtube}</li>
              <li>{instagram}</li>
            </ul>
          </section>
        </S.Box>
        <S.Box>
          <S.Title>{newsletter}</S.Title>
          <article>
            <input />
            <button>{subscribe}</button>
          </article>
        </S.Box>
      </S.Container>
      <S.Copy>
        <p>{copyright}</p>
      </S.Copy>
    </>
  );
}
