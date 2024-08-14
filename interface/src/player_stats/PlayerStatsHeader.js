import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PsTableSelect from './PsTableSelect.js';

export default function PlayerStatsHeader(props) {
  let header = '';

  if (props.currTable === 'goals'){	
  	header = <>Goalscoring Table</>
  }
  else if (props.currTable === 'yellows'){
        header = <>Disciplinary: Yellow Cards</>
  }
  else if (props.currTable === 'reds'){
        header = <>Disciplinary: Red Cards</>
  }
  else if (props.currTable === 'mins'){
        header = <>Minutes Played Table</>
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
          sx={{ flex: '100% 1 1', 
	  	pt:'auto', pb:'auto'}}
	  style={{fontSize: '2.2em'}}
          variant="h2"
          id="tableTitle"
          component="div"
          align='left'
        >
	{header}
        </Typography>

        <PsTableSelect currTable = {props.currTable} setCurrTable = {props.setCurrTable}/>


    </Toolbar>
  );
}

