import React from 'react';

import { Link } from 'gatsby';
import Typography from '@material-ui/core/Typography';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link to="https://tempered.works/">tempered.works</Link>{' '}
    {new Date().getFullYear()}.
  </Typography>
);

const Footer = () => (
  <footer>
    <Copyright />
    <Typography variant="body2" color="textSecondary" align="center">
      <p>
        Tempered Works Ltd. is registered in England with company
        number 11372276, VAT number 296417076.
      </p>
      <p>
        The registered address is First Floor, Telecom House,
        125-135 Preston Road, Brighton BN1 6AF
      </p>
    </Typography>
  </footer>
);

export default Footer;
