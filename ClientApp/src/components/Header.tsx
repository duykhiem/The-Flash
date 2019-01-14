import '../styles/header-style.css';

import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import SearchField from '../components/containers/SearchField';
import PrivateNavList from '../navigations/private-navigation';
import PublicNavList from '../navigations/public-navigation';

export interface HeaderProps {
  userId: string;
}

export interface HeaderDispatchProps {
  logOut: () => void;
}

export type Props = HeaderProps & HeaderDispatchProps;

class Header extends React.Component<Props> {
  state = {
    value: 1,
    open: false,
    componentsmenuopen: false
  };

  constructor(props: Props) {
    super(props);
  }

  showLeftMenu = () => {
    this.setState({ open: !this.state.open });
  };

  toggleDrawer = (open: boolean) => () => {
    this.setState({
      open: open
    });
  };

  getAuthButton = () =>
    this.props.userId ? (
      <Button color="inherit" onClick={this.props.logOut}>
        Logout
      </Button>
    ) : (
        <Link to="/login">
          <IconButton
            className="mainColor"
            color="inherit"
            aria-label="Login"
          >
            <AccountCircle />
          </IconButton>
        </Link>
      );

  render() {
    return (
      <div>
        <Drawer open={this.state.open} onClose={this.toggleDrawer(false)}>
          <div tabIndex={0} role="button">
            <div className="sideListWrapper">
              {
                !this.props.userId ?
                  <PublicNavList />
                  :
                  <PrivateNavList />
              }
            </div>
          </div>
        </Drawer>
        <div className="appBarWrapper">
          <AppBar position="static" className="appBar">
            <Toolbar>
              <Grid
                container
                spacing={16}
                alignItems="center"
                direction="row"
                justify="space-between"
              >
                <Grid item>
                  <div>
                    <IconButton
                      className="menuButton"
                      color="inherit"
                      aria-label="Menu"
                      onClick={this.showLeftMenu}
                    >
                      <MenuIcon />
                    </IconButton>
                    <Link to="/home">
                      <img className="logo" src={require('../assets/flash-logo-transparent.png')} height={80} width={120} alt="The Flash" />
                    </Link>
                  </div>
                  
                </Grid>
                <Grid item>
                  <SearchField />
                </Grid>
                <Grid item>
                  {this.getAuthButton()}
                  <IconButton
                    className="mainColor"
                    aria-label="Wishlist"
                  >
                    <FavoriteIcon />
                  </IconButton>
                  <IconButton
                    className="mainColor"
                    aria-label="Cart"
                  >
                    <ShoppingCartIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
      </div >
    );
  }
}

export default Header;
