import * as React from 'react';

import InputBase from '@material-ui/core/InputBase';
import { WithStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';

import Styles from '../styles/search-field-style';

export interface SearchFieldProps extends WithStyles<typeof Styles> {

}

export interface SearchFieldDispatchProps {

}

type Props = SearchFieldProps & SearchFieldDispatchProps;

const SearchField = (props: Props) => {

    return (
        <div className={props.classes.search}>
            <div className={props.classes.searchIcon}>
                <SearchIcon />
            </div>
            <InputBase
                placeholder="Search..."
                classes={{
                    root: props.classes.inputRoot,
                    input: props.classes.inputInput,
                }}
            />
        </div>
    );
};

export default SearchField;
