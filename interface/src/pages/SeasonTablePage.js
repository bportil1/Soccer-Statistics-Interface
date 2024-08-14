import React from 'react';
import SeasonTable from '../season_tables/SeasonTable.js';
import HomeTable from '../season_tables/HomeTable.js';
import AwayTable from '../season_tables/AwayTable.js';
import Box from '@mui/material/Box';
import {useState, useEffect} from 'react';
import SeasonTablesHeader from '../season_tables/SeasonTablesHeader.js';
import {fetchSeasonTableData, fetchHomeTableData, fetchAwayTableData} from '../season_tables/SeasonTablesQueries.js';

export default function TablePage (){
	const [currTable, setCurrTable] = useState('season');
        const [tableData, setTableData] = React.useState([]);
	const [loading, setLoading] = React.useState(true);
        
	useEffect(() => {
		async function fetchData(){
			setLoading(true);
			if (currTable === 'season'){
                		await fetchSeasonTableData().then((tempData)=> {
	                	setTableData(tempData);
				setLoading(false);
				});
			} else if (currTable === 'home'){
                                await fetchHomeTableData().then((tempData)=> {
                                setTableData(tempData);
                                setLoading(false);
                                });
			} else if (currTable === 'away'){
        			await fetchAwayTableData().then((tempData)=> {
                                setTableData(tempData);
                                setLoading(false);
                                });
			}
		}
		fetchData();
	}, [currTable]);

	let table = ''
	if (currTable === 'season'){
	 	table = <SeasonTable tableData={tableData}/>
        } else if (currTable === 'home'){
                table = <HomeTable tableData={tableData} />
        } else if (currTable === 'away'){
		table = <AwayTable tableData={tableData}  />
        }

	if (loading){
		return <></>
	}
	return (
        <Box>
		<SeasonTablesHeader currTable = {currTable} setCurrTable={setCurrTable} />
		{table}
	</Box>
	);
}

