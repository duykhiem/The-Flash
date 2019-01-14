import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';

const Footer = () => {
  return (
    <Grid
      container
      className="footerWrapper"
      spacing={16}
      alignItems="stretch"
      direction="row"
      justify="space-between"
    >
      <Grid item>
        <h3>THE FLASH</h3>
        <p>This is a private project to have fun<br /> with React and Episerver Commerce.</p>
        <p>Email: duykhiem.it@gmail.com</p>
        <p>COPYRIGHT ©2019 BY THE FLASH</p>
      </Grid>
      <Grid item>
        <h3>MENU</h3>
        <p>Home</p>
        <p>Products</p>
        <p>Contact Us</p>
      </Grid>
      <Grid item>
        <h3>SOCIAL</h3>
        <i className="fa fa-facebook-square padding-left-0"/>
        <i className="fa fa-instagram"/>
        <i className="fa fa-google-plus-square"/>
        <i className="fa fa-pinterest-square"/>
        <i className="fa fa-twitter-square"/>
        <i className="fa fa-youtube-square"/>
      </Grid>
      <Grid item>
        <h4>SIGN UP FOR NEWS LETTER</h4>
        <Grid item>
            <input type="text" placeholder="name@example.com" className="news-letter"/>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Footer;