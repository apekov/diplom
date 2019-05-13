import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const RequestInfoForm = ({inputsData, handleChange}) => {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Данные по проекту
      </Typography>
      <Grid container spacing={24}>
      {Object.keys(inputsData).map(item => {
          const {value, name, desc, textarea} = inputsData[item];
          console.log(value, name, desc, textarea);
          
          return (
            <Grid key={item} item xs={12} sm={textarea ? 12 : 6}>
              <TextField
                required
                id={item}
                name={name}
                label={name}
                value={value}
                helperText={desc ? desc : null}
                multiline={textarea ? true : false}
                onChange={handleChange}
                fullWidth
                // autoComplete="fname"
              />
          </Grid>
          )
        })}
      </Grid>
    </React.Fragment>
  );
}

export default RequestInfoForm;
