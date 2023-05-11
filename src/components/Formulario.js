import React, { useState } from "react";
import Swal from 'sweetalert2';
import {
  Box,
  List,
  ListItem,
  FormControlLabel,
  Radio,
  Checkbox,
  Typography,
  Button,
} from "@mui/material";

import { styled } from "@mui/system";
import "./Formulario.css";

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

function Formulario() {
  const [opcion, setOpcion] = useState("opcion1");
  const [checkbox, setCheckbox] = useState(false);

  const handleClick = () => {
    Swal.fire({
      title: '¡Hiciste clic en el botón!',
      confirmButtonText: 'Salir',
      showClass: {
        popup: '',                     // disable popup animation
      },
    });
  }

  const handleRadioChange = (event) => {
    setOpcion(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setCheckbox(event.target.checked);
  };

  return (
    <StyledDiv>
      <Typography variant="h4">Formulario</Typography>

      <Button variant="contained" color="primary" onClick={handleClick}>
        Presiona el botón
      </Button>
      <Typography variant="h6">Radio buttons</Typography>
      <Box component="div" className="radio-group">
        <List style={{ display: 'flex' }}>
        <ListItem style={{ marginRight: "2px" }}>
            <FormControlLabel
              value="opcion1"
              control={<Radio />}
              label="A"
              checked={opcion === "opcion1"}
              onChange={handleRadioChange}
            />
          </ListItem>
          <ListItem>
            <FormControlLabel
              value="opcion2"
              control={<Radio />}
              label="B"
              checked={opcion === "opcion2"}
              onChange={handleRadioChange}
            />
          </ListItem>
        </List>
      </Box>

      <Box component="div">
        <Typography variant="h6">Checkbox</Typography>
        <FormControlLabel
          control={<Checkbox  />}
          label="Marcar"
          checked={checkbox}
          onChange={handleCheckboxChange}
        />
      </Box>
    </StyledDiv>
  );
}

export default Formulario;
