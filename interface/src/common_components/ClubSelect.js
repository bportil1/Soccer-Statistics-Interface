import React from 'react';
import {useState, useEffect} from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import OutlinedInput from '@mui/material/OutlinedInput';
import {fetchClubData} from './clubSelectQueries.js';

export default function ClubSelect(props){
	const [clubList, setClubList] = useState([]);
	const [loading, setLoading] = useState(true);

        useEffect(() => {
                async function fetchClubListData () {
			setLoading(true);
			await fetchClubData().then((tempData)=>{
			setClubList(tempData);
			setLoading(false);
			});
		}
		fetchClubListData();
	}, []);

	const handleChange = (event) => {
        	props.setSelectedClub(event.target.value)
        };

        return (
                <Box sx={{ minWidth: 140, mb : 1 }}>
                        <FormControl sx={{ padding:3}} >
                                <NativeSelect
                             		value={props.selectedClub}
                                        inputProps={{
                                        name: 'club',
                                        id: 'uncontrolled-native',
                                        }}
                                        onChange={handleChange}
                                >
					{clubList.map((row, idx) => {
						return (
							<option key={idx} value={row.club_id}>{row.club_name}</option>
						)
					})}
                                </NativeSelect>
                        </FormControl>
                </Box>
  );
}

