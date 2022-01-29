import React from 'react';
import { Header } from '../../component/header/Header';
import { Container } from './style/Home';
import { CarouselBootstrap } from './carrousel/CarouselBootstrap'
import { Posts } from '../../component/post/Posts';
export const Home = () => {
  return <Container>

    <Header />


    <Posts />
  </Container>;
};
