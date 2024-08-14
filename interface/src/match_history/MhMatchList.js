import React from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import {fetchMatchData} from './matchHistoryQueries.js';

export default function MatchesDropDown(props){
	const [matchList, setMatchList] = React.useState([]);
	const [loading, setLoading] = React.useState(true);

        React.useEffect(() => {
		async function fetchDropDownData(){
			setLoading(true);
                	await fetchMatchData(props.selectedClub).then((tempData)=>{
			setMatchList(tempData);
			props.setSelectedMatch('');
                        document.getElementById('match_select').value = '';
			setLoading(false);
			});
		}
		fetchDropDownData();
	}, [props.selectedClub]);

	const handleChange = (event) => {
		let dataString = event.target.value.split(',');
        	props.setSelectedMatch(dataString[0]);
		props.setSelectedMatchHT(dataString[1]);
                props.setSelectedMatchVT(dataString[2]);
                props.setSelectedMatchHTGoals(dataString[3]);
                props.setSelectedMatchVTGoals(dataString[4]);
		event.target.disabled = 'disabled';
		setTimeout(() => event.target.disabled = '', 50);
        }

        return (
                <Box sx={{ mb : 1 }}>
                        <FormControl sx={{ padding:3}} fullWidth>
                                <NativeSelect
					defaultValue={''}
                                        inputProps={{
                                        name: 'match',
                                        id: 'match_select',
                                        }}
                                        onChange={handleChange}
					disabled=''
                                >
					<option value=''>None</option>
				
					{matchList.map((row, idx) => {
						return (
							<option key = {idx} value={[row.match_id, row.home_team, row.visiting_team, row.ht_goals, row.vt_goals]}>{row.home_team} {row.ht_goals} - {row.vt_goals} {row.visiting_team}</option>
						)
					})}
                                </NativeSelect>
                        </FormControl>
                </Box>
  );
}
