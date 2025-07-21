/*
entry.1498135098: Nick
entry.1143033184: Yes
entry.721740963: Yes
dlut: 1753049825397
entry.1143033184_sentinel: 
entry.721740963_sentinel: 
fvv: 1
partialResponse: [null,null,"-7792620244623700619"]
pageHistory: 0
fbzx: -7792620244623700619
submissionTimestamp: 1753049825522
*/

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

import { Grid, TextField, IconButton, Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
    </Box>
  );
}