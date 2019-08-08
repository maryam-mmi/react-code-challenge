import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    custom: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: '42px'
    },
    cards: {
        flexGrow: 1,
        padding: '42px'
    },
    search: {

    }
}
class recipeDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: ''
        }
    }

    render() {
        const { classes } = this.props;
        return (
            <div></div>
        )
    }
}

export default withStyles(styles)(recipeDetail);
