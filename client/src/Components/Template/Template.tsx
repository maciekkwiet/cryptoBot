import React from 'react';
import { Container, Box } from '@material-ui/core';

import Header from '../Header/Header';
import TemplateStyles from './TemplateStyles';

const Template = (props: any) => {
  const classes = TemplateStyles();

  return (
    <Box className={classes.root}>
      <Header />
      <Container>{props.children}</Container>
    </Box>
  );
};

export default Template;
