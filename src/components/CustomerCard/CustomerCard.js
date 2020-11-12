import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';

const CustomerCard = ({ materialUiIconComponent, customerHeaderTitle, customerSubheader, customerMainContentText}) => {
    return (
      <Card>
        <CardHeader 
          avatar={materialUiIconComponent} 
          title={customerHeaderTitle} 
          subheader={customerSubheader} >
        </CardHeader>
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

export default CustomerCard;