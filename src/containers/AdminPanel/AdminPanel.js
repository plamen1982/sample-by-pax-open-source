import React from 'react';

import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Person from '@material-ui/icons/Person';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//Custom components

import SideBarAccordion from '../../components/SideBarAccordion/SideBarAccordion';
import BasicTable from '../../components/BasicTable/BasicTable';
import CustomerCard from '../../components/CustomerCard/CustomerCard';
import Placeholder from '../../components/Placeholder/Placeholder';
import Counter from '../../features/counter/Counter';

const AdminPanel = () => {
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
        <Placeholder
         backgroundColor="#6495ED" width="100%" height="500px" />
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
        <Placeholder backgroundColor="#FF7F50" width="100%" height="300px" />
      </Grid>
      <Grid item xs={6}>
        <Placeholder backgroundColor="#7FFF00" width="100%" height="200px" />
      </Grid>
      <Grid item xs={6}>
        <Placeholder backgroundColor="#DC143C" width="100%" height="200px" />
      </Grid>
     </Grid>
    {/* Statistics table at the bottom of the page */}
    {/* TODO Fix the problem with xs={12} */}
    <Grid xs={12} item>
      <Counter></Counter>
    </Grid>
     <Grid xs={12} item container>
       <BasicTable></BasicTable>
     </Grid>
   </Grid>
 </Grid>
    );
}

export default AdminPanel;