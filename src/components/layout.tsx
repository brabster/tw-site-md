import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import 'typeface-roboto';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import theme from '../theme';

import Header from './header';
import Footer from './footer';
import './layout.css';

type LayoutProps = { children: React.ReactNode };

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header siteTitle={data.site.siteMetadata.title} />
      <Container>
        <Grid>
          <Grid item>{children}</Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item>
            <Footer />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Layout;
