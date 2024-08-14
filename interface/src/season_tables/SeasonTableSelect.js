import React from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import NativeSelect from '@mui/material/NativeSelect';
 
export default function SeasonTableSelect (props) { 
        const handleChange = (event) => {
                props.setCurrTable(event.target.value)
        };

        return (
                <Box sx={{ minWidth: 140, mb: 1}}>
                        <FormControl sx={{ padding:3, pt:'auto', pb:'auto'}} fullWidth>
                                <NativeSelect
                                        defaultValue={props.currTable}
                                        inputProps={{
                                        name: 'table',
                                        id: 'uncontrolled-native',
                                        }}
                                        onChange={handleChange}
                                >
                                        <option value='season'>Season</option>
                                        <option value='home'>Home</option>
                                        <option value='away'>Away</option>
                                </NativeSelect>
                        </FormControl>
                </Box>
  );
}

