import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledDiv = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "18vh",
}));

function Home() {
  return (
    <StyledDiv>
      <Typography variant="h4">Bienvenido a mi pagina</Typography>
      <Typography><h4>Soy una especie de programador junior aprendiendo HTML, CSS, js y React.js</h4></Typography>
    </StyledDiv>
  );
}

export default Home;
