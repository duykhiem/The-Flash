import { createStyles, Theme } from '@material-ui/core';
import amber from '@material-ui/core/colors/amber';
import green from '@material-ui/core/colors/green';

const styles = ({ palette, spacing, breakpoints }: Theme) => createStyles({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: palette.error.dark,
    },
    info: {
        backgroundColor: palette.primary.dark,
    },
    warning: {
        backgroundColor: amber[700],
    },
    icon: {
        fontSize: 20,
    },
    iconVariant: {
        opacity: 0.9,
        marginRight: spacing.unit,
    },
    message: {
        display: 'flex',
        alignItems: 'center',
    },
    margin: {
        margin: spacing.unit,
    },
});

export default styles;