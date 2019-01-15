import * as React from 'react';
import { NavLink } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import StoreIcon from '@material-ui/icons/Store';

export const publicNavs = [
    {
        url: '/',
        name: 'Home',
        icon: <HomeIcon />
    },
    {
        url: '/products',
        name: 'Products',
        icon: <StoreIcon />
    },
    {
        url: '/contact',
        name: 'Contact',
        icon: <PhoneIcon />
    },
    {
        url: '/manageaccount',
        name: 'Manage Account',
        icon: <PhoneIcon />
    }
];

const PrivateNav = () => {
    return (
        <div>
            {
                publicNavs.map((navItem) => {
                    return (
                        <NavLink to={navItem.url} className="navLinkItem" key={navItem.url}>
                            <List component="nav">
                                <ListItem button>
                                    <ListItemIcon className="navIcon">
                                        {navItem.icon}
                                    </ListItemIcon>
                                    <ListItemText primary={navItem.name} />
                                </ListItem>
                            </List>
                        </NavLink>
                    );
                })
            }
        </div>
    );
};

export default PrivateNav;
