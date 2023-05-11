import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledDiv = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'left',
  justifyContent: 'center',
  minHeight: '10vh',
}));

function Contact() {
  return (
    <StyledDiv>
    <Typography variant="h4" align='center'>Contacto</Typography>
    <Typography>
      Telefono: 1161------
    </Typography>
  </StyledDiv>
  );
}

export default Contact;
