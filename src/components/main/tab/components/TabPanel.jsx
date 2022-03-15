import React, { memo } from 'react'
import { Box } from '@material-ui/core';

export const TabPanel = memo((props) => {
  const { children, value, index } = props;

  return (
    <div>
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
})
