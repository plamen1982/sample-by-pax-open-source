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

import './App.css';

function App() {
  return (
    // Layout for the admin panel
   <Grid container spacing={2} alignItems="flex-start">
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
     <Grid item xs={2}>
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
     <Grid item container xs={10} spacing={2}>
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
      <Accordion style={{ backgroundColor: '#2F4F4F', color: 'white' }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <Avatar style={{width: '25px', height: '25px', backgroundColor: 'transparent'}}>
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
export default App;
