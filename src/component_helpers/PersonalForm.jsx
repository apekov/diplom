import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';

const PersonalForm = ({inputsData, handleChange}) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Ваши данные
      </Typography>
      <Grid container spacing={24}>
        {Object.keys(inputsData).map(item => {
          const {value, name} = inputsData[item];
          return (
            <Grid key={item} item xs={12} sm={6}>
              <TextField
                required
                id={item}
                name={name}
                label={name}
                value={value}
                onChange={handleChange}
                fullWidth
              />
          </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  );
}

export default PersonalForm;
