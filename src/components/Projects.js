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
      linkGH: "https://github.com/nachthelad/whatsappnow",
    },
    {
      name: "Equipapp",
      description: "This app let's you create two groups for a football match.",
      link: "https://equipapp.web.app/",
      linkGH: "https://github.com/nachthelad/equipapp",
    },
    {
      name: "nachthelad.com.ar",
      description: "This is my personal page where I showcase my work",
      link: "https://nachthelad.com.ar",
      linkGH: "https://github.com/nachthelad/nachthelad",
    },
    {
      name: "verdurita.com.ar",
      description:
        "This is a project that let's you see the price of the different currencies in Argentina",
      link: "https://verdurita.com.ar",
      linkGH: "https://github.com/nachthelad/verdurita",
    },
    {
      name: "dwine.com.ar",
      description:
        "This is a WIP for a website that let's you test and give feedback about different wines in Argentina",
      link: "https://dwine.com.ar",
      linkGH: "#",
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
                rel="noopener noreferrer">
                Go
              </Button>
              <Button
                size="small"
                href={project.linkGH}
                target="_blank"
                rel="noopener noreferrer"
                color="primary">
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
