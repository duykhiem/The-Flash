import { connect } from 'react-redux';

import { WithStyles, withStyles } from '@material-ui/core/styles';

import Styles from '../../styles/search-field-style';
import SearchField, { SearchFieldDispatchProps, SearchFieldProps } from '../SearchField';

interface ContainerProps extends WithStyles<typeof Styles> {
}

const mapStateToProps = (props: SearchFieldProps, ownProps: ContainerProps ): SearchFieldProps  => {
    return {
      classes: ownProps.classes
    };
  };

const mapDispatchToProps = (): SearchFieldDispatchProps => {
    return {
    };
};

export default withStyles(Styles)(connect(mapStateToProps, mapDispatchToProps)(SearchField));