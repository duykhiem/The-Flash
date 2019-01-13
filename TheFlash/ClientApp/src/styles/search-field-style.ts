import { createStyles, Theme } from '@material-ui/core';

const styles = ({ palette, spacing, breakpoints, transitions }: Theme) => createStyles({
    search: {
        position: 'relative',
        borderRadius: 26,
        border: '1px solid',
        borderColor: palette.primary.main,
        marginRight: spacing.unit * 2,
        marginLeft: '80px !important',
        width: '100%',
        [breakpoints.up('xs')]: {
            marginLeft: spacing.unit * 3,
            width: 'auto',
        },
        [breakpoints.down('xs')]: {
            display: 'none'
        },
    },
    searchIcon: {
        color: palette.primary.main,
        width: spacing.unit * 8,
        height: '100%',
        position: 'absolute',
        paddingTop: 2,
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: '#333',
        width: '100%',
    },
    inputInput: {
        paddingTop: spacing.unit,
        paddingRight: spacing.unit,
        paddingBottom: spacing.unit,
        paddingLeft: spacing.unit * 10,
        transition: transitions.create('width'),
        width: '100%',
        [breakpoints.up('md')]: {
            width: 400,
        },
        [breakpoints.between('xs', 'sm')]: {
            width: 100,
        },
    }
});

export default styles;
