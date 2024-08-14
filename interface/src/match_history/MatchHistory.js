import React from 'react';
import MatchElevens from './ElevensTablesPg.js';
import MatchEvents from './MhMatchEvents.js';
import MatchElevensVisual from './MatchElevensVisual.js';
import Box from '@mui/material/Box';
import {MhLineupsBanner, MhFormationsBanner, MhEventsBanner, MhSelectMatchBanner} from './MhTableBanners.js';
import {fetchElevensData} from './matchHistoryQueries.js';

export default function MatchHistory(props){
	const [elevensData, setElevensData] = React.useState('');
	const [homeStarters, setHomeStarters] = React.useState('');
        const [homeSubs, setHomeSubs] = React.useState('');
        const [homeCoach, setHomeCoach] = React.useState('');
        const [visiStarters, setVisiStarters] = React.useState('');
        const [visiSubs, setVisiSubs] = React.useState('');
        const [visiCoach, setVisiCoach] = React.useState('');
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
                async function fetchElevens(){
			if (props.selectedMatch !== ''){
				setLoading(true);
				await fetchElevensData(props.selectedMatch).then((tempData)=>{
					setElevensData(tempData);
					setLoading(false);
				});
			}
		}
		fetchElevens();
        }, [props.selectedMatch]);

	React.useEffect(() => {
		function elevensDataPostProcessing(){
                        let homeTeam = elevensData.filter(x=>x.club_name === props.selectedMatchHT);
                        let visitingTeam = elevensData.filter(x=>x.club_name === props.selectedMatchVT);

                        setHomeStarters(homeTeam.filter(x=>x.role=='STARTER'));
                        setHomeSubs(homeTeam.filter(x=>x.role=='SUB'));
                        setHomeCoach(homeTeam['0']['lName']);

                        setVisiStarters(visitingTeam.filter(x=>x.role=='STARTER'));
                        setVisiSubs(visitingTeam.filter(x=>x.role=='SUB'));
                        setVisiCoach(visitingTeam['0']['lName']);
		}
		if (props.selectedMatch !== ''){
			elevensDataPostProcessing();
		}
	
	}, [elevensData]);

	if (props.selectedMatch === ''){
		return <MhSelectMatchBanner />;
	} else if (loading){
		return <></>;
	}

	return (
		<Box>
		
		<MhLineupsBanner />

		<MatchElevens selectedMatch={props.selectedMatch}
                              homeStarters={homeStarters}
                              homeSubs={homeSubs}
                              homeCoach={homeCoach}
                              selectedMatchHT = {props.selectedMatchHT}
                              visiStarters={visiStarters}
                              visiSubs={visiSubs}
                              visiCoach={visiCoach}
                              selectedMatchVT = {props.selectedMatchVT}
                />

		<MhFormationsBanner />

		<MatchElevensVisual selectedMatch={props.selectedMatch}
				    homeStarters={homeStarters}
                                    homeSubs={homeSubs}
                                    homeCoach={homeCoach}
                                    visiStarters={visiStarters}
                                    visiSubs={visiSubs}
                                    visiCoach={visiCoach}
                />

		<MhEventsBanner />

		<MatchEvents selectedMatch = {props.selectedMatch}
			     selectedMatchHT = {props.selectedMatchHT}
		             selectedMatchVT = {props.selectedMatchVT}
		/>	

		</Box>
	);
}

