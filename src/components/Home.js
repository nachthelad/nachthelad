import React from 'react';
import { Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledDiv = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '10vh',
}));

function Home() {
  return (
    <StyledDiv>
      <Typography variant="h4">Equipapp</Typography>
      <Typography>
        
      </Typography>
    </StyledDiv>
  );
}

export default Home;
