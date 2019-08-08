import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userDataActions from "../redux/actions/userDataActions";
import { withStyles } from '@material-ui/core/styles';
import Search from '../component/Search';
import Card from '../component/Card';


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
class searchRecipe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchInput: '',
        }
    }


    handlerChange = (e) => {
        this.setState({
            searchInput: e.target.value
        })
    }

    searchClick = () => {
        this.props.userActions.searchRecipe(this.state.searchInput);
    }

    componentDidMount() {
    }

    render() {
        const { classes } = this.props;
        const list = this.props.data.user_data.entities ? this.props.data.user_data.entities.hits : [];
        return (
            <div>
                <Search
                    className={classes.search}
                    value={this.state.searchInput}
                    onChange={this.handlerChange}
                    onClick={this.searchClick}
                />
                <div className={classes.custom}>
                    {
                        list.map((item, index) => {
                            return (
                                <div key={index} className={classes.cards}>
                                    <Card
                                        label={item.recipe.label}
                                        image={item.recipe.image}
                                    />
                                </div>
                            )
                        })

                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        data: state
    };
}

function mapDispatchToProps(dispatch) {
    return {
        userActions: bindActionCreators(userDataActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(searchRecipe));