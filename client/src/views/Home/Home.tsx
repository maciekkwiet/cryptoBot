import React from 'react';
import HomeStyle from './HomeStyle';

import { Typography } from '@material-ui/core';

const Home = () => {
  const classes = HomeStyle();
  return (
    <>
      <Typography variant="h6">CryptoRadar</Typography>
      {/* <MainBox className={classes.wrapper}>
        <div className={classes.wrapperUserBox}></div>
        <div className={classes.wrapperItem}>
          <PromotedText text={'POINTING SESSION'} />
        </div>
        <div className={classes.wrapperItem}>
          <div className={classes.wrapperItemColumn}>
            <Typography variant="h6">CRYPTO</Typography>
            <CreateNewRoom />
          </div>
          <Divider orientation="vertical" flexItem className={classes.divider} />
          <div className={classes.wrapperItemColumn}>
            <Typography variant="h6">ADD ROOM'S NUMBER</Typography>
            <JoinRoom />
          </div>
        </div>
      </MainBox> */}
    </>
  );
};

export default Home;
