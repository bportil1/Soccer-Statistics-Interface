import React from 'react';
import HomeBanner from '../home/HomeBanner.js';
import MernImpDiagram from '../home/MernImpDiagram.js';
import Box from '@mui/material/Box';

function Home(){
  	const [width, setWidth] = React.useState(window.innerWidth);
 
	React.useEffect(() => {
    		const handleResize = () => setWidth(window.innerWidth);
    		window.addEventListener("resize", handleResize);
    		return () => window.removeEventListener("resize", handleResize);
  	}, []);

	return (
		<Box sx={{ml: 'auto', mr: 'auto', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
			<HomeBanner />
			<MernImpDiagram width={width}/>
			<Box sx={{ mt:1,borderRadius: "25px", borderStyle: 'solid',
                              borderWidth: '5px', borderColor: '#000000',
                              boxShadow: '.9px 1.8px 1.8px hsl(0deg 0% 0% / 0.47)' }}>
				<ul>
					<li> MERN implementation </li>
					<li> MySql database implementation </li>
                                        <li> Mock data generated using a bash script pipeline </li>
					<li> Data from approximately 12000 SQL insert statements on display here </li>
					<li> RESTful API implementation using ExpressJS </li>
					<li> Node.js engine for backend scripts </li>
					<li> Next.js frontend implementation </li>
					<li> Interactive components rendered client-side </li>
					<li> Data fetching and preprocessing done server-side </li> 
				</ul>
			</Box>
		</Box>
	)
}

export default Home;
