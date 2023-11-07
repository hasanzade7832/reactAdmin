import React from 'react';
import { Grid } from '@mui/material';

export default function SubTabs({ content }) {
    if (content == [] || content == null){
        return;
    }

  return (
    <Grid container spacing={5}>
      {content.map((item, index) => {
        // console.log(item);
        return (
          <Grid item key={index}>
            <div>{item.name}</div>
          </Grid>
        );
      })}
    </Grid>
  );
}
