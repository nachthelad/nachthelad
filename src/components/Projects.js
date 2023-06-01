import React from "react";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";

const StyledDiv = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  paddingTop: theme.spacing(7),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "10vh",
}));

const StyledCard = styled(Card)({
  width: 280,
  maxWidth: 380,
  margin: "1em",
});

const CardsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: theme.spacing(2),
}));


function Projects() {
  const projects = [
    {
      name: "WhatsappNow",
      description:
        "This was my first app, it let's you send a Whatsapp message without adding the number to your contacts.",
      link: "https://whatsappnow.web.app/",
    },
    {
      name: "Equipapp",
      description: "This app let's you create two groups for a football match.",
      link: "https://equipapp.web.app/",
    },
    {
      name: "nachthelad.com.ar",
      description: "This is the last project I am working on",
      link: "#",
    },
    // Puedes agregar más proyectos aquí
  ];

  return (
    <StyledDiv>
      <Typography variant="h4" align="center">
        My stuff
      </Typography>
      <CardsContainer>
        {projects.map((project, index) => (
          <StyledCard key={index}>
            <CardContent>
              <Typography variant="h5" component="div" paddingBottom={1}>
                {project.name}
              </Typography>
              <Typography variant="body2">{project.description}</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "space-between" }}>
              <Button
                size="small"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Go
              </Button>
              <Button
                size="small"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                color="primary"
              >
                GitHub
              </Button>
            </CardActions>
          </StyledCard>
        ))}
      </CardsContainer>
    </StyledDiv>
  );
}

export default Projects;
