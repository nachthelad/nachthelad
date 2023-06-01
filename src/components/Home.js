import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledDiv = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "18vh",
}));

function Home() {
  return (
    <StyledDiv>
      <Typography variant="h4">Bienvenido a mi pagina</Typography>
      <Typography><p>Soy un programador junior aprendiendo React.js</p></Typography>
    </StyledDiv>
  );
}

export default Home;
