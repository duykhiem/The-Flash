import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import { withStyles } from '@material-ui/core/styles';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CloseIcon from '@material-ui/icons/Close';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';

import * as ApplicationActions from '../actions/application-action';
import { StoreState } from '../state';
import Styles from '../styles/notification-style';
import NotificationType from '../utils/notification-type';

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};

function CustomSnackbar(props: any) {
    const { open, classes, className, message, onClose, variant, ...other } = props;
    const Icon = variantIcon[variant];

    return (
        <Snackbar
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={open}
            onClose={onClose}
            autoHideDuration={5000}
        >
            <SnackbarContent
                className={classNames(classes[variant], className)}
                aria-describedby="client-snackbar"
                message={
                    <span id="client-snackbar" className={classes.message}>
                        <Icon className={classNames(classes.icon, classes.iconVariant)} />
                        {message}
                    </span>}
                action={[
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        className={classes.close}
                        onClick={onClose}
                    >
                        <CloseIcon className={classes.icon} />
                    </IconButton>
                ]}
                {...other}
            />
        </Snackbar>
    );
}

CustomSnackbar.propTypes = {
    classes: PropTypes.object.isRequired,
    className: PropTypes.string,
    open: PropTypes.bool.isRequired,
    message: PropTypes.node,
    onClose: PropTypes.func,
    variant: PropTypes.oneOf([
        NotificationType.Success,
        NotificationType.Info,
        NotificationType.Warning,
        NotificationType.Error]).isRequired,
};

const SnackbarContentWrapper = withStyles(Styles)(CustomSnackbar);

interface NotificationProps {
    showNotification: boolean;
    notificationType: NotificationType;
    message: string;
}

interface NotificationDispatchProps {
    hideNotification: () => void;
}

type Props = NotificationProps & NotificationDispatchProps;

const Notification = (props: Props) => {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        props.hideNotification();
    };
    return (
        <SnackbarContentWrapper
            open={props.showNotification}
            onClose={handleClose}
            variant={props.notificationType}
            message={props.message}
        />
    );
};

const mapStateToProps = (state: StoreState): NotificationProps => {
    return {
      showNotification: state.application.notification.showNotification,
      notificationType: state.application.notification.notificationType,
      message: state.application.notification.message,
    };
  };

const mapDispatchToProps = (dispatch: Dispatch<ApplicationActions.ActionTypes>): NotificationDispatchProps => {
    return {
        hideNotification: () => dispatch(ApplicationActions.hideNotification())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
