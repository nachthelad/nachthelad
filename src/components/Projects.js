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
  padding: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "10vh",
}));

const StyledCard = styled(Card)({
  width: 380,
  maxWidth: 380,
  margin: "1em",
});

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
        Projects
      </Typography>
      {projects.map((project, index) => (
        <StyledCard key={index}>
          <CardContent>
            <Typography variant="h5" component="div" paddingBottom={1}>
              {project.name}
            </Typography>
            <Typography variant="body2">{project.description}</Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here
            </Button>
          </CardActions>
        </StyledCard>
      ))}
    </StyledDiv>
  );
}

export default Projects;
