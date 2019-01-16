import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import SearchField from '../components/containers/SearchField';
import UserModel from '../models/user-model';
import PrivateNavList from '../navigations/private-navigation';
import PublicNavList from '../navigations/public-navigation';
import { history } from '../utils/history';

export interface HeaderProps {
  currentUser: UserModel;
}

export interface HeaderDispatchProps {
  logOut: () => void;
}

export type Props = HeaderProps & HeaderDispatchProps;

class Header extends React.Component<Props> {
  state = {
    open: false,
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

  logOutUser = () => {
    this.props.logOut();
    history.push('/');
  };

  getAuthButton = () =>
    this.props.currentUser ? (
      <IconButton
        className="mainColor"
        color="inherit"
        aria-label="Logout"
        onClick={this.logOutUser}
      >
      <i className="fa fa-sign-out" />
      </IconButton>
    ) : (
        <Link to="/login">
          <IconButton
            className="mainColor"
            color="inherit"
            aria-label="Login"
          >
            <i className="fa fa-sign-in" />
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
                this.props.currentUser ?
                  <PrivateNavList />
                  :
                  <PublicNavList />
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
