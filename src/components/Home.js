import React from "react";
import { Typography } from "@mui/material";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const StyledDiv = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(7),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-center",
  minHeight: "10vh",
}));

function Home() {
  return (
    <StyledDiv>
      <Typography variant="h4" paddingBottom={1}>Welcome to nachthelad's page</Typography>
      <Typography variant="subtitle1">I am a learning to code with AI, also finished a course for Frontend Development with React in <Link href="www.coderhouse.com" className="coderLink">CoderHouse</Link></Typography>
    </StyledDiv>
  );
}

export default Home;
