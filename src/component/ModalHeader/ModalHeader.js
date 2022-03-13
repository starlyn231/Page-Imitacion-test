import { Dialog, Typography } from "@mui/material";
//import TextInformation from '../TextInformation/TextInformation';
import IconButton from '@mui/material/IconButton';
//import { Row } from '../../theme/Styles';

import React from 'react'
import { Container, ContentContainer, Row, StyledCloseIcon } from "./styles/ModalHeader";

export const ModalHeader = ({ children, title, open, onClose }) => {
  return (
    <Dialog open={open}
      onClose={onClose}
      onBackdropClick={onClose}
      maxWidth='md'
      style={{ overflow: 'hidden' }}

    >
      <Container>

        <ContentContainer>
          <Row>
            {
              title ?
                <Typography title={title} />
                :
                <div style={{ width: '100%' }} />
            }
            <IconButton onClick={onClose} sx={{ marginRight: '2%' }}>
              <StyledCloseIcon />
            </IconButton>
          </Row>

          {
            children
          }
        </ContentContainer>
      </Container>
    </Dialog>
  )
}
