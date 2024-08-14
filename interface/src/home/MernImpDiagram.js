import Diagram, { createSchema, useSchema } from 'beautiful-react-diagrams';
import React from 'react';
import 'beautiful-react-diagrams/styles.css';
import Image from 'next/image';
import Box from '@mui/material/Box';

let dbImg = require('../../public/icons/database-svgrepo-com.svg');
let serverImg = require('../../public/icons/server-svgrepo-com.svg');
let pcImg = require('../../public/icons/pc-svgrepo-com.svg');

function ImageIcon(impSection){
	if (impSection==='database'){
		return (<Image src={dbImg}/>)
	}
	else if (impSection==='server'){
                return (<Image src={serverImg}/>)
        }
	else if (impSection==='frontend'){
                return (<Image src={pcImg}/>)
        }

}

export default function MernImpDiagram(props) {
const MernImpDiag = createSchema({
  nodes: [
    { id: 'node-1', content: ImageIcon('database'), coordinates: [props.width*.4*.08, 90], },
    { id: 'node-2', content: ImageIcon('server'), coordinates: [props.width*.4*.342, 90], },
    { id: 'node-3', content: ImageIcon('frontend'), coordinates: [props.width*.4*.6, 90], },
    { id: 'node-4', content: 'MySql Database', coordinates: [props.width*.4*.06, 40], },
    { id: 'node-5', content: 'Express Server', coordinates: [props.width*.4*.3265, 40], },
    { id: 'node-6', content: 'Next.js Frontend', coordinates: [props.width*.4*.58, 40], },
  ],
  links: [
    { input: 'node-1',  output: 'node-2' },
    { input: 'node-2',  output: 'node-3' },
  ]
});



  const [schema, { onChange }] = useSchema(MernImpDiag);

  return (
    <Box style={{ height: '15rem', width: '40%', minWidth:'30%'}}>
      <Diagram schema={schema} />
    </Box>
  );
};


