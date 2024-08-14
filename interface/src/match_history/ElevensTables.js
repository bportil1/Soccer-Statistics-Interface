import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableFooter from '@mui/material/TableFooter';
import {styled} from '@mui/material/styles';

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
                                background: positionColors[position], 
                                marginRight: 'auto',
                                marginTop: -4
        }
        return(<div style={{display: "flex"}}>
               <div style={circleStyling}>
               <span style={{margin: 'auto'}}></span>
               </div>
               </div>
        )
}

export function HomeStarters(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="Home Starters">
        <TableHead style={{backgroundImage: 'linear-gradient(to bottom right, #4bbc8e, #039590)'}} >
          <TableRow>
	    <TableCell align="center"  width='20%'></TableCell>
            <TableCell align="left" style={{fontSize: '1.3em'}} width='40%'><strong>Position</strong></TableCell>
            <TableCell align="left" style={{fontSize: '1.3em'}} width='40%'><strong>Name</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.starters.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 }}}
            >
              <TableCell align="center">{circle(row.position)}</TableCell>
              <TableCell align="left">
		  {row.position}
	      </TableCell>
              <TableCell align="left">{row.lName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter style={{backgroundImage: 'linear-gradient(to bottom right, #4bbc8e, #039590 )'}} >
                <TableRow>
                        <TableCell align='left' colSpan='3'>
                                <font size = "+1" color='black'><strong>Coach: {props.coach}</strong></font>
                        </TableCell>
        	</TableRow>
	</TableFooter>
      </Table>
    </TableContainer>
  );
}

export function VisitingStarters(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="Home Starters">
        <TableHead style={{backgroundImage: 'linear-gradient(to bottom right, #4bbc8e, #039590)'}} >
          <TableRow>
            <TableCell align="center"  width='20%'></TableCell>
            <TableCell align="left" style={{fontSize: '1.3em'}} width='40%'><strong>Position</strong></TableCell>
            <TableCell align="left" style={{fontSize: '1.3em'}} width='40%'><strong>Name</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.starters.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{circle(row.position)}</TableCell>
              <TableCell align="left">
                  {row.position}
	      </TableCell>
              <TableCell align="left">{row.lName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter style={{backgroundImage: 'linear-gradient(to bottom right, #4bbc8e, #039590 )'}} >
		<TableRow>
	  		<TableCell align='left' colSpan='3'>
        			<font size = "+1" color='black'><strong>Coach: {props.coach}</strong></font>
	  		</TableCell>
        	</TableRow>
	</TableFooter>
      </Table>
    </TableContainer>
  );
}

export function HomeSubs(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="Home Starters">
        <TableHead style={{backgroundImage: 'linear-gradient(to bottom right, #4bbc8e, #039590)'}} >
          <TableRow>
            <TableCell align="center"  width='20%'></TableCell>
            <TableCell align="left" style={{fontSize: '1.3em'}} width='40%'><strong>Position</strong></TableCell>
            <TableCell align="left" style={{fontSize: '1.3em'}} width='40%'><strong>Name</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.subs.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{circle(row.position)}</TableCell>
              <TableCell align="left">
                  {row.position}
              </TableCell>
              <TableCell align="left">{row.lName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter style={{backgroundImage: 'linear-gradient(to bottom right, #4bbc8e, #039590 )'}} >
                <TableRow>
                        <TableCell align='left' colSpan='3'>
                        </TableCell>
                </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

export function VisitingSubs(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 450 }} size="small" aria-label="Home Starters">
        <TableHead style={{backgroundImage: 'linear-gradient(to bottom right, #4bbc8e, #039590)'}} >
          <TableRow>
            <TableCell align="center"  width='20%'></TableCell>
            <TableCell align="left" style={{fontSize: '1.3em'}} width='40%'><strong>Position</strong></TableCell>
            <TableCell align="left" style={{fontSize: '1.3em'}} width='40%'><strong>Name</strong></TableCell>
	  </TableRow>
        </TableHead>
        <TableBody>
          {props.subs.map((row, idx) => (
            <TableRow
              key={idx}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center">{circle(row.position)}</TableCell>
              <TableCell align="left">
                  {row.position}
              </TableCell>
              <TableCell align="left">{row.lName}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter style={{backgroundImage: 'linear-gradient(to bottom right, #4bbc8e, #039590 )'}} >
                <TableRow>
                        <TableCell align='left' colSpan='3'>
                        </TableCell>
                </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
