import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import {styled} from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import {fetchEventsData} from './matchHistoryQueries.js';
import Image from 'next/image';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function EmptyHalf(props){
	return (
		<ListItem key={props.id} style={{'width': '38%'}}>		
		</ListItem>
	);
}

function TimeDisplay(props){
	return (
		<ListItem key={props.id} style={{'width':'10%', justifyContent: 'center'}}>
                        <strong>{props.evTime}'</strong>
                </ListItem>
	);

}

function EventImage(props){
        let goalImg = require('../../public/icons/goalRed.png');
        let swapImg = require('../../public/icons/swapRED.png');
        let yellCrdImg = require('../../public/icons/yellowCard.png');
        let redCrdImg = require('../../public/icons/redCard.png');
	
	if (props.eventType==="GOAL"){
		return(
			<ListItem key={props.keyID} style={{'width': '12%', justifyContent: props.justifySide}}>
                		<Image src={goalImg} alt="GL"/>
			</ListItem>
		)
	}
	else if (props.eventType==="CARD"){
		let card = props.cardType==='YELLOW'?yellCrdImg:redCrdImg;
		let altCard = props.cardType==='YELLOW'?"YC":"RC";
		return(
                        <ListItem key={props.keyID} style={{'width': '12%', justifyContent: props.justifySide}}>
				<Image src={card} alt={altCard}/>
			</ListItem>
		)
	}
	else if (props.eventType==="SUB"){
		return( 
                        <ListItem key={props.keyID} style={{'width': '12%', justifyContent: props.justifySide}}>
				<Image src={swapImg} alt='SUB'/> 
			</ListItem>
		)
	}
}

export default function MatchEvents(props){
	const [goalData, setGoalData] = React.useState([]);
	const [subData, setSubData] = React.useState([]);
	const [discData, setDiscData] = React.useState([]);
	const [concData, setConcData] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		async function fetchData (){
			setLoading(true);
			await fetchEventsData(props.selectedMatch).then(([tempGoalData, tempSubData, tempDiscData, tempConcData])=>{
				setGoalData(tempGoalData);
				setSubData(tempSubData);
                                setDiscData(tempDiscData);
                                setConcData(tempConcData);
			});
			setLoading(false);
		}
		fetchData();
	}, [props.selectedMatch]);
	
	let reportTable = []

	Object.keys(concData).forEach((row) => { let tempRow = concData[row];
						 if (concData[row].eventType === 'GOAL'){                         
							let goalRow = goalData.find(x=>x.evId === tempRow.evId)
							tempRow['club'] = goalRow.club_name
							tempRow['lName'] = goalRow.lName
							tempRow['gType'] = goalRow.goalType
						  }
						  else if (concData[row].eventType === 'SUB'){
							let subRow = subData.find(x=>x.evId === tempRow.evId)
							tempRow['club'] = subRow.club_name
							tempRow['subIn'] = subRow.subInLName
							tempRow['subOut'] = subRow.subOutLName
						  }
						  else if (concData[row].eventType === 'CARD'){
							let discRow = discData.find(x=>x.evId === tempRow.evId)
							tempRow['club'] = discRow.club_name
							tempRow['cardType'] = discRow.cardType
							tempRow['lName'] = discRow.lName
						  }
						reportTable.push(tempRow)
		           })
	if (loading){
		return <></>;
	}
	return (
   		<List sx={{ ml: 'auto', mr: 'auto', width: '80%', bgcolor: 'background.paper', borderRadius: "25px", borderStyle: 'solid',
                              borderWidth: '5px', borderColor: '#000000',
                              boxShadow: '.9px 1.8px 1.8px hsl(0deg 0% 0% / 0.47)'}}>
			{reportTable.map((row, idx)=>{
			let homeFlag = props.selectedMatchHT===row.club;
                        let homeSideSpace = (homeFlag?<></>:<EmptyHalf id={idx+"hss"}/>  );
                        let visiSideSpace = (props.selectedMatchVT===row.club?<></>:<EmptyHalf id={idx+"vss"}/>);
			let homeTimeDisp = (homeFlag?<TimeDisplay evTime={row.evTime} id={idx+"htd"}/>:<></> );
			let visiTimeDisp = (props.selectedMatchVT===row.club?<TimeDisplay evTime={row.evTime} id={idx+"vtd"} />:<></> );
			let justifySide = homeFlag?'flex-start':'flex-end';
                        if (row.eventType === 'GOAL'){
                                let homeSideEvImg  = homeFlag?<EventImage eventType={'GOAL'} justifySide={justifySide} id={idx+"hsi"} />
							     :<ListItem style={{'width':'12%'}} key={idx+"hsib"}></ListItem>;
				let visSideEvImg = !homeFlag?<EventImage eventType={'GOAL'} justifySide={justifySide}  id={idx+"vsi"}/>
                                                             :<ListItem style={{'width':'12%'}} key={idx+"vsib"}></ListItem>;

				return(
				<>
				<Stack direction="row" key={idx}
				       style={{'width': '0 0 100%' }} justifyContent="space-between">
				{homeSideEvImg}
				{homeSideSpace}
				{visiTimeDisp}
                                <ListItem style = {{ 'width': '38%', display:'flex', justifyContent: `${justifySide}` }} id={idx+"dat"}>
					{row.lName}
				</ListItem>
				{homeTimeDisp}
				{visiSideSpace}
				{visSideEvImg}
				</Stack>
                                <Divider orientation='horizontal' flexItem />
				</>
                                )
                        }

                        else if (row.eventType === 'CARD'){
                                let homeSideEvImg  = homeFlag?<EventImage eventType={'CARD'} cardType={row.cardType} 
							       justifySide={justifySide} id={idx+"hsi"}/>
                                                             :<ListItem style={{'width':'12%'}} key={idx+"hsib"}></ListItem>;
                                let visSideEvImg = !homeFlag?<EventImage eventType={'CARD'} cardType={row.cardType} 
							      justifySide={justifySide} id={idx+"vsi"}/>
                                                             :<ListItem style={{'width':'12%'}} key={idx+"vsib"}></ListItem>;
                                return(
				<>
                                <Stack direction="row" key = {idx}
                                       style={{'width': '0 0 100%' }}>

                                {homeSideEvImg}
				{homeSideSpace}
                                {visiTimeDisp}
                                <ListItem style = {{ 'width':'38%', display:'flex', justifyContent: `${justifySide}` }} id={idx+"dat"}>
                                	{row.lName} 
                                </ListItem>
                                {homeTimeDisp}
                                {visiSideSpace}
                                {visSideEvImg}
				</Stack>
				<Divider orientation='horizontal' flexItem />
				</>
                                )
                        }

                        else if (row.eventType === 'SUB'){
				let homeSideEvImg  = homeFlag?<EventImage eventType={'SUB'}  
							       justifySide={justifySide} id={idx+"hsi"}/>
                                                             :<ListItem style={{'width':'12%'}} key={idx+'hsib'}></ListItem>;

                                let visSideEvImg = !homeFlag?<EventImage eventType={'SUB'} 
							       justifySide={justifySide} id={idx+'vsi'}/>
                                                             :<ListItem style={{'width':'12%'}} key={idx+'vsib'}></ListItem>;
                                return(
				<>
                                <Stack direction="row" key = {idx}
                                       style={{'width': '0 0 100%' }}>
                                {homeSideEvImg}
                                {homeSideSpace}
                                {visiTimeDisp}
                                <ListItem style = {{ 'width':'38%', display:'flex', justifyContent: `${justifySide}` }} id={idx+'dat'}>
                                	PLAYER IN: {row.subIn}<br/> PLAYER OUT: {row.subOut}
                                </ListItem>
                                {homeTimeDisp}
                                {visiSideSpace}
                                {visSideEvImg}
				</Stack>
                                <Divider orientation='horizontal' flexItem />
                                </>
				)
			}
                        })}

		</List>
  );
}

