import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Person from '@material-ui/icons/Person';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import FolderIcon from '@material-ui/icons/Folder';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import './App.css';

const App = () => {
  return (
    // Layout for the admin panel
   <Grid container alignItems="flex-start">
     {/* Appbar or the Header for the admin page */}
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" >
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
     {/* Sidebar menu for the admin panel */}
     <Grid item xs={2} style={{backgroundColor: '#2a3f4c', height:'1000px', marginRight:'16px'}}>
        <SideBarAccordion />
        <SideBarAccordion />
        <SideBarAccordion />
        <SideBarAccordion />
        <SideBarAccordion />
        <SideBarAccordion />
        <SideBarAccordion />
        <SideBarAccordion />
        <SideBarAccordion />
        <SideBarAccordion />
        <SideBarAccordion />
        <SideBarAccordion />
     </Grid>
     {/* Admin panel */}
     <Grid item container xs={9} spacing={2}>
       {/* Left side of the admin panel */}
       <Grid item container xs={6} spacing={2}>
         <Grid item xs={6}>
          <CustomerCard materialUiIconComponent={<Person/>} customerHeaderTitle="370" customerSubheader="New Users"></CustomerCard> 
         </Grid>
         <Grid item xs={6}>
          <CustomerCard materialUiIconComponent={<AddShoppingCartIcon/>} customerHeaderTitle="342" customerSubheader="Shop items"></CustomerCard>
         </Grid>
         <Grid item xs={12}>
          <PlaceholderComponent backgroundColor="#6495ED" width="100%" height="500px" />
        </Grid>
       </Grid>
       {/* Right side of the admin panel */}
       <Grid item container xs={6} spacing={2} alignItems="flex-start">
        <Grid item xs={6}>
          <CustomerCard materialUiIconComponent={<LocalMallIcon/>} customerHeaderTitle="13" customerSubheader="TODA'S SALE"></CustomerCard> 
        </Grid>
        <Grid item xs={6}>
          <CustomerCard materialUiIconComponent={<AccountBalanceWalletIcon />} customerHeaderTitle="$300" customerSubheader="Earnings"></CustomerCard>
        </Grid>
        <Grid item xs={12}>
          <PlaceholderComponent backgroundColor="#FF7F50" width="100%" height="300px" />
        </Grid>
        <Grid item xs={6}>
          <PlaceholderComponent backgroundColor="#7FFF00" width="100%" height="200px" />
        </Grid>
        <Grid item xs={6}>
          <PlaceholderComponent backgroundColor="#DC143C" width="100%" height="200px" />
        </Grid>
       </Grid>
      {/* Statistics table at the bottom of the page */}
      {/* TODO Fix the problem with xs={12} */}
       <Grid xs={12} item container>
         <BasicTable></BasicTable>
       </Grid>
     </Grid>
   </Grid>
  );
}

const CustomerCard = ({ materialUiIconComponent, customerHeaderTitle, customerSubheader, customerMainContentText}) => {
  return (
    <Card>
      <CardHeader avatar={materialUiIconComponent} title={customerHeaderTitle} subheader={customerSubheader} ></CardHeader>
      {
      customerMainContentText ? 
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {customerMainContentText}
          </Typography>
        </CardContent> : null 
      }
  </Card>
  );
}

const SideBarAccordion = () => {
  return (
      <Accordion style={{ backgroundColor: '#2a3f4c', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Avatar style={{width: '25px', height: '25px', backgroundColor: 'transparent', marginRight: '15px'}}>
          <FolderIcon fontSize="small" />
        </Avatar>
          <Typography >Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
    </Accordion>
  );
}

const PlaceholderComponent = ({ width, height, backgroundColor }) => {
  return (
    <Box style={{ backgroundColor, height, width }} />
  );
}

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const BasicTable = () => {

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default App;
