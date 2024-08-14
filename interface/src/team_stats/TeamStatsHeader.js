import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ClubSelect from '../common_components/ClubSelect.js';

export default function TeamStatsHeader(props) {
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
          sx={{ flex: '100%', 
	  	pt:'auto', pb:'auto'}}
	  style={{fontSize: '2.2em'}}
          variant="h2"
          id="tableTitle"
          component="div"
          align='left'
        >
	Team Data
        </Typography>

       	<ClubSelect selectedClub = {props.selectedClub}
                    setSelectedClub = {props.setSelectedClub} />


    </Toolbar>
  );
}

