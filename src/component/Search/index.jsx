import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Input, InputAdornment, FormControl, IconButton } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
    root: {
        display: 'flex',
        justifyContent: 'center'
    },
    custom: {
        width: '40%',
        direction: 'ltr',
        borderRadius: '8px',
        padding: '12px',
        marginTop: '42px',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
    },

};

function InputComponent(props) {
    const { classes, value, onChange, onClick } = props;

    return (
        <div className={classes.root}>
            <FormControl className={classes.custom}>
                <Input
                    placeholder='Search'
                    value={value}
                    onChange={onChange}
                    disableUnderline
                    margin='dense'
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton aria-label="search" className={classes.margin} onClick={onClick}>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
        </div>
    );
}

export default withStyles(styles)(InputComponent);
