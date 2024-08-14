import React from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box'; 
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

function circle(position){

	const positionColors = {
        	'GOALKEEPER' : '#f1f124',
        	'DEFENDER': '#3361fb',
        	'MIDFIELDER': 'green',
        	'FORWARD': '#f30825'
	}


	const circleStyling = {
				display: "flex",
 				height: "20px",
 				width: "20px",
 				borderRadius: "25px",
				borderStyle: 'solid',
				borderWidth: '1px',
				borderColor: '#000000',
		                boxShadow: '.9px 1.8px 1.8px hsl(0deg 0% 0% / 0.47)',
 				color: "white",
 				background: positionColors[position],
				marginRight: 4,
 				marginTop: -4	
	}
	return(<div style={{display: "flex"}}>
     	       <div style={circleStyling}>
               <span style={{margin: 'auto'}}></span>
    	       </div>
    	       </div>
	)
}

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
}));

export default function MatchElevensVisual(props){

	if (props.homeStarters.length === 0 || props.visiStarters.length === 0){
		return <></>;
	}

        let homeGK = props.homeStarters.filter(x=>x.position === 'GOALKEEPER');                 
	let homeDefs = props.homeStarters.filter(x=>x.position === 'DEFENDER');
	let homeMids = props.homeStarters.filter(x=>x.position === 'MIDFIELDER');  
        let homeFwds = props.homeStarters.filter(x=>x.position === 'FORWARD'); 

        let visiGK = props.visiStarters.filter(x=>x.position === 'GOALKEEPER');  
        let visiDefs = props.visiStarters.filter(x=>x.position === 'DEFENDER');                 
        let visiMids = props.visiStarters.filter(x=>x.position === 'MIDFIELDER');     
        let visiFwds = props.visiStarters.filter(x=>x.position === 'FORWARD');


	return (
	
	<Box sx = {{display:'flex',
		    flexDirection: 'row',
		    width:'100%',
		    justifyContent: 'space-between',
		    mb: 1
		    }}
	>
	<Grid container sx={{ width:'49%', height: '60vh', borderRadius: "25px", borderStyle: 'solid',
			      borderWidth: '5px', borderColor: '#000000',
                              boxShadow: '.9px 1.8px 1.8px hsl(0deg 0% 0% / 0.47)',
		            }} alignItems='center' 
		      style={{backgroundImage: 'repeating-linear-gradient(0deg, #18ae3f, #5dcf7b 20%)'}}>
		<Grid id='hgk' container textAlign='center' alignItems='center' justifyContent='space-around'
		>
			<Item style={{'width': '22%', justifyContent:'center', alignItems:'center', display:'flex'}}>
				{circle('GOALKEEPER')}<strong>{homeGK[0].lName}</strong>
			</Item>
		</Grid>

                <Grid id='hDefs' container textAlign='center' alignItems='center' justifyContent='space-around'
                >
		{homeDefs.map((plyr, idx)=> {
			return(
                        <Item key={idx} style={{'width': '22%', justifyContent:'center', alignItems:'center', display:'flex'}}>

				{circle('DEFENDER')}<strong>{plyr.lName}</strong>
			</Item>
			)
			}
		)}
                </Grid>

		<Grid id='hMids' container textAlign='center' alignItems='center' justifyContent='space-around'
                >
                {homeMids.map((plyr, idx)=> {
                        return(
                        <Item key={idx} style={{'width': '22%', justifyContent:'center', alignItems:'center', display:'flex'}}>

                                {circle('MIDFIELDER')}<strong>{plyr.lName}</strong>
                        </Item>
                        )
                        }
                )}
                </Grid>
		
		<Grid id='hFwds' container textAlign='center' alignItems='center' justifyContent='space-around'
                >
                {homeFwds.map((plyr, idx)=> {
                        return(
                        <Item key={idx} style={{'width': '22%', justifyContent:'center', alignItems:'center', display:'flex'}}>

                                {circle('FORWARD')}<strong>{plyr.lName}</strong>
                        </Item>
                        )
                        }
                )}
                </Grid>

	</Grid>
        <Grid container sx={{ width:'49%', height: '60vh', borderRadius: "25px", borderStyle: 'solid',
                              borderWidth: '5px', borderColor: '#000000',
                              boxShadow: '.9px 1.8px 1.8px hsl(0deg 0% 0% / 0.47)',
                            }} alignItems='center' 
                      style={{backgroundImage: 'repeating-linear-gradient(0deg, #18ae3f, #5dcf7b 20%)'}}>

                <Grid id='vgk' container textAlign='center' alignItems='center' justifyContent='space-around'
                >
                        <Item style={{'width': '22%', justifyContent:'center', alignItems:'center', display:'flex'}}>

                                {circle('GOALKEEPER')}<strong>{visiGK[0].lName}</strong>
                        </Item>
                </Grid>

                <Grid id='vDefs' container textAlign='center' alignItems='center' justifyContent='space-around'
                >
                {visiDefs.map((plyr, idx)=> {
                        return(
                        <Item key = {idx} style={{'width': '22%', justifyContent:'center', alignItems:'center', display:'flex'}}>

                                {circle('DEFENDER')}<strong>{plyr.lName}</strong>
                        </Item>
                        )
                        }
                )}
                </Grid>

                <Grid id='vMids' container textAlign='center' alignItems='center' justifyContent='space-around'
                >
                {visiMids.map((plyr, idx)=> {
                        return(
                        <Item key={idx} style={{'width': '22%', justifyContent:'center', alignItems:'center', display:'flex'}}>

                                {circle('MIDFIELDER')}<strong>{plyr.lName}</strong>
                        </Item>

                        )
                        }
                )}
                </Grid>

                <Grid id='vFwds' container textAlign='center' alignItems='center' justifyContent='space-around'
                >
                {visiFwds.map((plyr, idx)=> {
                        return(
                        <Item key={idx} style={{'width': '22%', justifyContent:'center', alignItems:'center', display:'flex'}}>

                                {circle('FORWARD')}<strong>{plyr.lName}</strong>
                        </Item>

                        )
                        }
                )}
                </Grid>
        </Grid>
	</Box>
	)
}
