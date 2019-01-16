import * as React from 'react';
import Button from '@material-ui/core/Button';

const AddToCartButton = ({ onClick }) => {
    return (
        <Button variant="contained" color="primary" onClick={onClick}>
            ADD TO CART
        </Button>
    );
};

export default AddToCartButton;