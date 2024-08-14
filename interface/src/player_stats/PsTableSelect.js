import React from 'react';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import NativeSelect from '@mui/material/NativeSelect';

export default function PsTableSelect(props){
        const handleChange = (event) => {
                props.setCurrTable(event.target.value)
        };

        return (
                <Box sx={{ minWidth: 120, mb: 1 }}>
                        <FormControl sx={{ padding:3}} fullWidth>
                                <NativeSelect
                                        defaultValue={props.currTable}
                                        inputProps={{
                                        name: 'table',
                                        id: 'uncontrolled-native',
                                        }}
                                        onChange={handleChange}
                                >
                                        <option value='goals'>Goals</option>
                                        <option value='yellows'>Disciplinary: Yellows</option>
                                        <option value='reds'>Disciplinary: Reds</option>
                                        <option value='mins'>Minutes Played</option>
                                </NativeSelect>
                        </FormControl>
                </Box>
  );
} 

