import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SeasonTableSelect from './SeasonTableSelect.js';

export default function SeasonTablesHeader(props) {

  let header = '';

  if (props.currTable === 'season'){
  	header = <>Season Table</>;
  }
  else if (props.currTable === 'home'){
        header = <>Home Table</>;
  }
  else if (props.currTable === 'away'){
        header = <>Away Table</>;
  }

  return (
    <Toolbar
      sx={{
	width: '60%',
        borderRadius: '20px',
        mb: 1, 
	ml: 'auto',
	mr: 'auto'
        }}
	style={{backgroundImage: 'linear-gradient(to bottom right, #00b494, #81db7d )'}}
    >
        <Typography
          sx={{ flex: '100%' }}
	  style={{fontSize: '2.2em'}}
          variant="h2"
          id="tableTitle"
          component="div"
          align='left'
        >
	{header}
        </Typography>

        <SeasonTableSelect currTable = {props.currTable} setCurrTable = {props.setCurrTable} />

    </Toolbar>
  );
}

