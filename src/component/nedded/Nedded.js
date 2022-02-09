import React from 'react';
import { LineContainer } from '../header/style/HeaderStyle';
import { ButtonCard, CardContains, CardProduct, Container, ContainerBtn, ItemList, LinkItem, List, Title } from './style/Nedded';

import CardMedia from '@mui/material/CardMedia';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ListConten } from './CardContains'
export const Nedded = () => {
  return (
    <Container>

      <Title>¿QUÉ NECESITAS HOY?</Title>
      <List>
        <ItemList>
          <LinkItem>Para ti </LinkItem>
        </ItemList>

        <ItemList>
          <LinkItem> para mi negocio</LinkItem>
        </ItemList>


        <ItemList>
          <LinkItem>para tu empresa </LinkItem>
        </ItemList>
      </List>



      <CardContains>

        {
          ListConten.map((item) => (
            <CardProduct sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"


                image={item.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>

              </CardContent>
              <ContainerBtn>
                <ButtonCard size="small">{item.infoBtn}</ButtonCard>
              </ContainerBtn>

            </CardProduct>

          ))
        }

      </CardContains>

    </Container>);
};
