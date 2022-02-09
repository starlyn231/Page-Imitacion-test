import React from 'react';
import { ButtonLink, Container, LineContainer, Title } from './style/CardCategory';

export const CardCategory = ({ backgroundColor, title, infoButton }) => {
  return <Container backgroundColor={backgroundColor}>
    <LineContainer >

      <Title>{title}</Title>

      <ButtonLink>{infoButton}</ButtonLink>

    </LineContainer>
  </Container>;
};
