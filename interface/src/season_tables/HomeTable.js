import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { visuallyHidden } from '@mui/utils';
import Image from 'next/image';

var rows = [];

function descendingComparator(a, b, orderBy, numeric) {
  if(numeric){
        let  _a = parseInt(a[orderBy]), _b = parseInt(b[orderBy]);
        if (_b < _a) {
                return -1;
        }
        if (_b > _a) {
                return 1;
        }
  }

  else{
        if (b[orderBy] < a[orderBy]) {
                return -1;
        }
        if (b[orderBy] > a[orderBy]) {
                return 1;
        }
  }
  return 0;
}

function getComparator(order, orderBy, numeric) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy, numeric)
    : (a, b) => -descendingComparator(a, b, orderBy, numeric);
}


// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'pos',
    numeric: true,
    disablePadding: false,
    label: '',
  },
  {
    id: 'club_name',
    numeric: false,
    disablePadding: true,
    label: 'Club',
  },
  {
    id: 'W',
    numeric: true,
    disablePadding: false,
    label: 'W',
  },
  {
    id: 'D',
    numeric: true,
    disablePadding: false,
    label:'D',
  },
  {
    id: 'L',
    numeric: true,
    disablePadding: false,
    label: 'L',
  },
  {
    id: 'GF',
    numeric: true,
    disablePadding: false,
    label: 'GF',
  },
  {
    id: 'GA',
    numeric: true,
    disablePadding: false,
    label:'GA',
  },
  {
    id: 'GD',
    numeric: true,
    disablePadding: false,
    label: 'GD',
  },
  {
    id: 'PTS',
    numeric: true,
    disablePadding: false,
    label: 'PTS',
  },

];

function EnhancedTableHead(props) {
  const {numeric, order, orderBy, onRequestSort } =
    props;
  const createSortHandler = (id, numeric) => (event) => {
    onRequestSort(event, id, numeric);
  };

  return (
    <TableHead>
      <TableRow style={{backgroundImage: 'linear-gradient(to bottom right, #81db7d, #f9f871)'}}>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id, headCell.numeric)}
            >
              <h3>{headCell.label}</h3>
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
           </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  numeric: PropTypes.bool.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};


export default function HomeTable(props) {
  const [order, setOrder] = React.useState('desc');
  const [orderBy, setOrderBy] = React.useState('PTS');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense, setDense] = React.useState(false);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const [numeric, setNumeric] = React.useState(true);
  
  rows = props.tableData;

  const handleRequestSort = (event, id, numeric) => {
    const isAsc = orderBy === id && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(id);
    setNumeric(numeric);
  };

  const handleClick = (event, id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleChangeDense = (event) => {
    setDense(event.target.checked);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
	
  const visibleRows = React.useMemo(
      () => 
      stableSort(rows, getComparator(order, orderBy, numeric)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [rows, numeric, order, orderBy, page, rowsPerPage],
   );
	
  return (
    <Box sx={{ width: '80%', ml:'auto', mr:'auto'}}>
      <Paper sx={{ width: '100%', mb: 2}}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={dense ? 'small' : 'medium'}
	    data={rows}
          >
            <EnhancedTableHead
              numeric={numeric}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.club_name);
                const labelId = `enhanced-table-checkbox-${index}`;
		let path = require("../../public/icons/logo.svg");
		let icon_name = row.club_name.replace(/\s+/g, '');
		if (row !== undefined){
			path = require(`../../public/icons/${icon_name}.png`);
		}
                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.club_name)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={index}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
     		    <TableCell align="center">
			<Image src={path}
		 	     alt={icon_name}
			     max-height='50' max-width='50'	
			/>
		    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.club_name}
                    </TableCell>
                    <TableCell align="right">{row.W}</TableCell>
		    <TableCell align="right">{row.D}</TableCell>
                    <TableCell align="right">{row.L}</TableCell>
		    <TableCell align="right">{row.GF}</TableCell>
                    <TableCell align="right">{row.GA}</TableCell>
                    <TableCell align="right">{row.GD}</TableCell>	
                    <TableCell align="right">{row.PTS}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
	  style={{backgroundImage: 'linear-gradient(to bottom right, #81db7d, #f9f871 )'}}
        />
      </Paper>
      <FormControlLabel
	sx={{backgroundColor: 'white'}}
        control={<Switch checked={dense} onChange={handleChangeDense} />}
        label="Dense Padding"
      />
    </Box>
  );
}
