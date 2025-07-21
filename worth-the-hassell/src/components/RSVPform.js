import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import { Grid, TextField, IconButton, Checkbox,Button, FormGroup, FormControlLabel, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SendIcon from '@mui/icons-material/Send';

function DynamicNames(props) {
    const { setNames, names } = props;

  const addRow = () => {
    setNames([...names, { id: names.length + 1, value: '' }]);
  };

  const removeRow = (id) => {
    setNames(names.filter((row) => row.id !== id));
  };

  const handleInputChange = (id, event) => {
    const updatedNames = names.map((row) =>
      row.id === id ? { ...row, value: event.target.value } : row
    );
    setNames(updatedNames);
  };

  return (
    <>
        <div>
        <h5>Guests</h5>
        {names.map((row) => (
            <Grid container spacing={1} alignItems="center" key={row.id} margin={1}>
            <Grid item xs={10}>
                <TextField
                label={`Full Name`}
                value={row.value}
                onChange={(event) => handleInputChange(row.id, event)}
                fullWidth
                />
            </Grid>
            <Grid item xs={2}>
                {row.id === 2 && ( // Only show remove button if there's more than one row
                <IconButton onClick={() => removeRow(row.id)}>
                    <RemoveIcon />
                </IconButton>
                )}
                {row.id === 1 && ( // Only show add button on the last row
                <IconButton onClick={addRow} disabled={names.length > 1}>
                    <AddIcon />
                </IconButton>
                )}
            </Grid>
            </Grid>
        ))}
        </div>
    </>
  );
}

DynamicNames.propTypes = {
    children: PropTypes.node,
    setNames: PropTypes.func.isRequired,
    names: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        value: PropTypes.string
    })).isRequired
};


export default function RSVPForm() {
    const [submitted, setSubmitted] = useState(false);
    const [names, setNames] = useState([{ id: 1, value: '' }]);

    const [checkState, setCheckState] = React.useState({
        dinner: false,
        karaoke: false
    });
    
    const handleChange = (event) => {
        setCheckState({
        ...checkState,
        [event.target.name]: event.target.checked,
        });
    };

    const { dinner, karaoke } = checkState;

    const handleSubmit = async (e) => {
        setSubmitted(true);
        e.preventDefault();

        names.map(async (guest) => {
            const data = {
                "guest": guest.value,
                "dinner": dinner,
                "karaoke": karaoke
            }

            let url = "https://script.google.com/macros/s/AKfycbwoEYJ9f7sKiSAgoYu2OMdnIYcZp7ReDCbJJsQcD4Xv0kEiJflUavagJQAzAKdB3_Mw/exec";

            try {
                const response = await fetch(url, {
                  method: 'POST',
                  mode: 'no-cors',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data)
                });
          
                if (response.ok) {
                  // Handle successful response
                  console.log('Form submitted successfully!');
                } else {
                  // Handle errors
                  console.error('Error submitting form:', response.status, response.statusText);
                }
              } catch (error) {
                setSubmitted(false);
                console.error('Network error:', error);
              }
        });
      };

    const nameIsValid = names[0].value != "";

  return (
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1 }}}
      noValidate
      autoComplete="off"
    >
      <DynamicNames 
        setNames={setNames}
        names={names}
      />
      <div>
            <h5>Events</h5>
            <FormGroup>
                <FormControlLabel control={<Checkbox checked={dinner} onChange={handleChange} />} label="Dinner" name="dinner" />
                <FormControlLabel control={<Checkbox checked={karaoke} onChange={handleChange} />} label="Karaoke" name="karaoke" />
            </FormGroup>
      </div>
      <div>
      <Button 
        variant="contained" 
        disabled={submitted || !nameIsValid}
        endIcon={<SendIcon />}
        onClick={handleSubmit}>
        Send RSVP
      </Button>
      <Typography display={submitted ? null : "none"}>Thanks you for sending your RSVP!</Typography>
      </div>
    </Box>
  );
}