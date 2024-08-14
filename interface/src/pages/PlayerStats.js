import React from 'react';
import GoalAggTable from '../player_stats/GoalAggTable.js';
import YellowAggTable from '../player_stats/YellowAggTable.js';
import RedAggTable from '../player_stats/RedAggTable.js';
import MinsAggTable from '../player_stats/MinsAggTable.js';
import PsTableSelect from '../player_stats/PsTableSelect.js';
import PlayerStatsHeader from '../player_stats/PlayerStatsHeader.js';
import Box from '@mui/material/Box';
import {fetchGoalAggData, fetchYellsAggData, fetchRedsAggData, fetchMinsAggData} from '../player_stats/playerStatsQueries.js'; 

export default function PlayerStats(){
	const [currTable, setCurrTable] = React.useState("goals");
        const [loading, setLoading] = React.useState(true);
	const [tableData, setTableData] = React.useState([]); 

        React.useEffect(() => {
                async function fetchData(){
                        setLoading(true);
                        if (currTable === 'goals'){
                                await fetchGoalAggData().then((tempData)=> {
                                setTableData(tempData);
                                setLoading(false);
                                });
                        } else if (currTable === 'yellows'){
                                await fetchYellsAggData().then((tempData)=> {
                                setTableData(tempData);
                                setLoading(false);
                                });
                        } else if (currTable === 'reds'){
                                await fetchRedsAggData().then((tempData)=> {
                                setTableData(tempData);
                                setLoading(false);
                                });
                        } else if (currTable === 'mins'){
                                await fetchMinsAggData().then((tempData)=> {
                                setTableData(tempData);
                                setLoading(false);
                                });
                        }

                }
                fetchData();
        }, [currTable]);

	let table = '';

	if (currTable === 'goals'){
		table = <GoalAggTable tableData={tableData}/>
	} else if (currTable === 'yellows'){
		table = <YellowAggTable tableData={tableData}/>
	} else if (currTable === 'reds'){
		table = <RedAggTable tableData={tableData}/>
	} else if (currTable === 'mins'){
		table = <MinsAggTable tableData={tableData}/>
	}
	
	if (loading){
		return <></>;
	}
	
	return (
		<Box>
			<PlayerStatsHeader currTable = {currTable} setCurrTable={setCurrTable} />
			{table}
		</Box>
	);
}

