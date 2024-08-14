import React from 'react';
import Box from '@mui/material/Box';
import TeamStatsTable from '../team_stats/TeamStatsTable.js';
import TeamStatsHeader from '../team_stats/TeamStatsHeader.js';
import {fetchTableData} from '../team_stats/teamStatsQueries.js';

export default function TeamStats(){
	const [selectedClub, setSelectedClub] = React.useState('0001');
        const [tableData, setTableData] = React.useState([]);
 	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
        	async function fetchData(){
                	setLoading(true);
                	await fetchTableData(selectedClub).then((tempData)=>{
                	setTableData(tempData);
                	setLoading(false);
                	});
          	}
          	fetchData();
  	}, [selectedClub]);

  	if (loading){
        	return <></>;
  	}

	return (
		<Box>
			<TeamStatsHeader selectedClub = {selectedClub}
                                    	 setSelectedClub = {setSelectedClub} />
										
		        <TeamStatsTable tableData = {tableData} />

		</Box>
	);
}

