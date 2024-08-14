import React from 'react';
import {useState, useEffect} from 'react';
import {HomeStarters, VisitingStarters, HomeSubs, VisitingSubs} from './ElevensTables.js';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {MhSubstitutesBanner} from './MhTableBanners.js';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MatchElevens(props){ 

	if (props.selectedMatch === '' || props.homeStarters === undefined || props.visiStarters === undefined || props.homeSubs === undefined || props.visiSubs === undefined || props.homeStarters === '' || props.visiStarters === '' || props.homeSubs === '' || props.visiSubs === ''){
                return <div></div>;
	}

	return (
		<Grid container spacing={1}>
			<Grid container sx={{display:'flex', wrap:'nowrap', justifyContent:'space-around', alignItems:'center'}}>
				<Item sx={{mt:1, ml:1}}><HomeStarters starters = {props.homeStarters} 
						    coach = {props.homeCoach} 
						    homeTeam = {props.selectedMatchHT} /></Item>
                                <Item sx={{mt:1, ml:-1}}><VisitingStarters starters = {props.visiStarters}
                                                        coach = {props.visiCoach}
                                                        visitingTeam = {props.selectedMatchVT}/></Item>
			</Grid>

			<Grid container sx={{mt:1}}>
				<MhSubstitutesBanner />
			</Grid>

                        <Grid container sx={{display:'flex', wrap:'nowrap', justifyContent:'space-around', alignItems:'center'}}>
                                <Item sx={{ml:1, mb:1}}><HomeSubs subs = {props.homeSubs} /></Item>				
				<Item sx={{ml:-1, mb:1}}><VisitingSubs subs = {props.visiSubs} /></Item>
			</Grid>
		</Grid>

	);
	
	
}

