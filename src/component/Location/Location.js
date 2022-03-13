import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, IconLocation } from './style/Location';

export const Location = () => {
  const navigate = useNavigate();
  const onMap = () => {
    navigate("/map", {
      replace: true
    })
  }
  return <Container>
    <IconLocation onClick={onMap} />
  </Container>;
};
