import React from 'react';

import Box from '@material-ui/core/Box';

const Placeholder = ({ width, height, backgroundColor }) => {
    return (
      <Box style={{ backgroundColor, height, width }} />
    );
  }

export default Placeholder;