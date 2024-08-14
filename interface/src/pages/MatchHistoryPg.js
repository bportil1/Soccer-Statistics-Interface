import React from 'react';
import MhHeader from '../match_history/MhHeader.js';
import MatchHistory from '../match_history/MatchHistory.js';
import {useState} from 'react';
import Box from '@mui/material/Box';
import MhScoreBanner from '../match_history/MhScoreBanner.js';

export default function MatchHistoryPg(props){
  const [selectedClub, setSelectedClub] = useState('0001');
  const [selectedMatch, setSelectedMatch] = useState('');
  const [selectedMatchHT, setSelectedMatchHT] = useState('');
  const [selectedMatchVT, setSelectedMatchVT] = useState('');
  const [selectedMatchHTGoals, setSelectedMatchHTGoals] = useState('');
  const [selectedMatchVTGoals, setSelectedMatchVTGoals] = useState('');
  const [selectedMatchId, setSelectedMatchId] = useState('');

  return (
	<Box>
		<MhHeader selectedClub = {selectedClub} setSelectedClub = {setSelectedClub}
                          selectedMatch = {selectedMatch} setSelectedMatch = {setSelectedMatch}
                          selectedMatchHT = {selectedMatchHT} setSelectedMatchHT = {setSelectedMatchHT}
                          selectedMatchVT = {selectedMatchVT} setSelectedMatchVT = {setSelectedMatchVT}
                          selectedMatchHTGoals = {selectedMatchHTGoals} setSelectedMatchHTGoals = {setSelectedMatchHTGoals}
                          selectedMatchVTGoals = {selectedMatchVTGoals} setSelectedMatchVTGoals = {setSelectedMatchVTGoals}
                          selectedMatchId = {selectedMatchId} setSelectedMatchId = {setSelectedMatchId}
		/>

                <MhScoreBanner selectedMatch = {selectedMatch}
	  		       selectedMatchHT = {selectedMatchHT}
                               selectedMatchVT = {selectedMatchVT}
                               selectedMatchHTGoals = {selectedMatchHTGoals}
                               selectedMatchVTGoals = {selectedMatchVTGoals}
                />


		<MatchHistory selectedClub = {selectedClub} selectedMatch = {selectedMatch}
	  		      selectedMatchHT = {selectedMatchHT} selectedMatchVT = {selectedMatchVT}
		/>
	</Box>
  )



}
