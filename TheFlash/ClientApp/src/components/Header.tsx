import * as React from 'react';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';

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

    console.log('inside header component ', props.userId);
  }

  onLeftIconButtonClick = () => {
    console.log('hi;');
    this.setState({ open: !this.state.open  });
  };

  toggleDrawer = (open: boolean) => () => {
    this.setState({
      open: open
    });
  };

  conditRenderEssential = () =>
    this.props.userId ? (
      <Button color="inherit" onClick={this.props.logOut}>
        Logout
      </Button>
    ) : (
      <Button color="inherit">
        <Link to="/login"> Login</Link>
      </Button>
    );

  render() {
    return (
      <div>
        <Drawer open={this.state.open} onClose={this.toggleDrawer(false)}>
          <div tabIndex={0} role="button">
            <div className="sidelistwrapper">
              {
                !this.props.userId ?
                <PublicNavList />
                :
                <PrivateNavList />
              }
            </div>
          </div>
        </Drawer>
        <div className="appbarwrapper">
          <AppBar position="static">
            <Toolbar>
              <IconButton
                className="iconbuttonsyle"
                color="inherit"
                aria-label="Menu"
                onClick={this.onLeftIconButtonClick}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className="headertypoclass"
              >
                My React App
              </Typography>

              {this.conditRenderEssential()}
            </Toolbar>
          </AppBar>
        </div>
      </div>
    );
  }
}

export default Header;
