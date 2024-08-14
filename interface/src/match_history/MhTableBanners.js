import React from 'react';
import Toolbar from '@mui/material/Toolbar';

export function MhLineupsBanner(){
	return (
	<Toolbar
      		sx={{width: '40%',
        	borderRadius: '20px',
        	mb: 1,
        	ml: 'auto',
        	mr: 'auto',
		justifyContent: 'space-between'	
        	}}
        	style={{backgroundImage: 'linear-gradient(to bottom right, #9bde7e, #4bbc8e )',
			fontSize: '1.8em'}}
    	>
			<div style={{'flex': '0 0 10%'}}>
				Lineups
			</div>
	</Toolbar>
	);
}

export function MhSubstitutesBanner(){
        return (
        <Toolbar
                sx={{width: '40%',
                borderRadius: '20px',
                mb: 1,
                ml: 'auto',
                mr: 'auto',
                justifyContent: 'space-between'
                }}
                style={{backgroundImage: 'linear-gradient(to bottom right, #4bbc8e, #039590)',
                        fontSize: '1.8em'}}
        >
                        <div style={{'flex': '0 0 10%'}}>
                                Substitutes
                        </div>
        </Toolbar>
        );
}

export function MhFormationsBanner(){
        return (
        <Toolbar
                sx={{width: '40%',
                borderRadius: '20px',
                mb: 1,
                ml: 'auto',
                mr: 'auto',
                justifyContent: 'space-between'
                }}
                style={{backgroundImage: 'linear-gradient(to bottom right, #039590, #4bbc8e)',
                        fontSize: '1.8em'}}
        >
                        <div style={{'flex': '0 0 10%'}}>
                                Formations
                        </div>
        </Toolbar>
        );
}

export function MhEventsBanner(){
        return (
        <Toolbar
                sx={{width: '40%',
                borderRadius: '20px',
                mb: 1,
                ml: 'auto',
                mr: 'auto',
                justifyContent: 'space-between'
                }}
                style={{backgroundImage: 'linear-gradient(to bottom right, #4bbc8e, #9bde7e)',
                        fontSize: '1.8em'}}
        >
                        <div style={{'flex': '0 0 10%'}}>
                                Events
                        </div>
        </Toolbar>
        );
}

export function MhSelectMatchBanner(){
        return (
        <Toolbar
                sx={{width: '40%',
                borderRadius: '20px',
                mb: 1,
                ml: 'auto',
                mr: 'auto',
                justifyContent: 'space-between'
                }}
                style={{backgroundImage: 'linear-gradient(to bottom right, #4bbc8e, #9bde7e)',
                        fontSize: '1.8em'}}
        >
                        <div style={{'flex': '0 0 10%'}}>
                                No&nbsp;Match&nbsp;Selected
                        </div>
        </Toolbar>
        );
}

