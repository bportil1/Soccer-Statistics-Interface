import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

export default function MhScoreBanner(props){
	if (props.selectedMatch === ''){
		return <></>
	}

	let homeTeam = props.selectedMatchHT.replace(/\s+/g, '');
	let visitingTeam = props.selectedMatchVT.replace(/\s+/g, '');
	let homeTeamCrestPath = require(`../../public/icons/${homeTeam}.png`);
	let visitingTeamCrestPath = require(`../../public/icons/${visitingTeam}.png`);

	return (
	<Toolbar
      		sx={{width: '100%',
        	borderRadius: '20px',
        	mb: 1,
        	ml: 'auto',
        	mr: 'auto',
		justifyContent: 'space-between'	
        	}}
        	style={{backgroundImage: 'linear-gradient(to bottom right, #81db7d, #f9f871 )',
			fontSize: '1.8em'}}
    	>
			<div style={{'flex': '0 0 10%', textAlign: 'center'}}>
        		<Image src={homeTeamCrestPath} alt={props.selectedMatchHT}/>
			</div>
			<div style={{'flex': '0 0 35%', textAlign: 'center'}}>
			{props.selectedMatchHT}
			</div>
			<div style={{'flex': '0 0 10%'}}>
			{props.selectedMatchHTGoals} - {props.selectedMatchVTGoals}
			</div>
			<div style={{'flex': '0 0 35%', textAlign: 'center'}}>
			{props.selectedMatchVT}
			</div>
			<div style={{'flex': '0 0 10%', textAlign: 'center'}}>
			<Image src={visitingTeamCrestPath} alt={props.selectedMatchVT}/>
			</div>
	</Toolbar>
	);
}

