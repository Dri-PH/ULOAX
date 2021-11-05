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
              <ul>
                <li>
                  <img src={icon.url} alt="icon " />
                  <a>{home}</a>
                </li>
                <li>
                  <img src={icon.url} alt="icon " />
                  <a>{about}</a>
                </li>
                <li>
                  <img src={icon.url} alt="icon " />
                  <a>{taxi}</a>
                </li>
                <li>
                  <img src={icon.url} alt="icon " />
                  <a>{booking}</a>
                </li>
                <li>
                  <img src={icon.url} alt="icon " />
                  <a>{contactus}</a>
                </li>
              </ul>
            </nav>
          </section>
        </S.Box>
        <S.Box>
          <S.Title>{followus}</S.Title>
          <section>
            <nav>
              <ul>
                <li>
                  <img src={iconfacebook.url} alt="icon Facebook" />
                  <a>{facebook}</a>
                </li>
                <li>
                  <img src={icontwitter.url} alt="Icon Twitter" />
                  <a>{twitter}</a>
                </li>
                <li>
                  <img src={iconlinkedin.url} alt="Icon linkedin" />
                  <a>{linkedin}</a>
                </li>
                <li>
                  <img src={iconyoutube.url} alt="Icon Youtube" />
                  <a> {youtube}</a>
                </li>
                <li>
                  <img src={iconinstagram.url} alt="Icon Instagram" />
                  <a> {instagram}</a>
                </li>
              </ul>
            </nav>
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
