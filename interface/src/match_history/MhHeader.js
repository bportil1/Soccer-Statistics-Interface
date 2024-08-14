import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ClubSelect from '../common_components/ClubSelect.js';
import MatchesDropDown from './MhMatchList.js';

export default function MhHeader(props) {

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
                pt:'auto', pb:'auto'
	  }}
	  style={{fontSize: '2.2em'}}
          variant="h2"
          id="tableTitle"
          component="div"
          align='left'
        >
        Match History
        </Typography>

		<ClubSelect selectedClub = {props.selectedClub} setSelectedClub = {props.setSelectedClub}/>

                <MatchesDropDown selectedClub = {props.selectedClub}
                                 selectedMatch = {props.selectedMatch} setSelectedMatch = {props.setSelectedMatch}
                                 selectedMatchHT = {props.selectedMatchHT} setSelectedMatchHT = {props.setSelectedMatchHT}
                                 selectedMatchVT = {props.selectedMatchVT} setSelectedMatchVT = {props.setSelectedMatchVT}
                                 selectedMatchHTGoals = {props.selectedMatchHTGoals} setSelectedMatchHTGoals = {props.setSelectedMatchHTGoals}
                                 selectedMatchVTGoals = {props.selectedMatchVTGoals} setSelectedMatchVTGoals = {props.setSelectedMatchVTGoals}
                                 selectedMatchId = {props.selectedMatchId} setSelectedMatchId = {props.setSelectedMatchId}
                />

        
    </Toolbar>
  );
}

