import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Button from '@material-ui/core/Button';


const styles = {
  root: {
    margin: 0,
  },
  MuiButtonPaper: {
    marginBottom: '0px',
    alignSelf: 'flex-end',
    background: 'red'
  },
  title: {
    fontSize: 'inherit',
    textAlign: 'center'
  }
};

const DialogTitle = withStyles(styles)(props => {
  const { title, classes } = props;
  return (
    <MuiDialogTitle className={classes.root}>
      <Typography variant="h6">{title}</Typography>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    justifyContent: 'space-between',
    padding: '26px',
  },
}))(MuiDialogActions);

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} timeout={{ enter: 500, exit: 500 }} />;
});

class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  openDialog = () => {
    this.setState({
      open: true,
    });
  };

  closeDialog = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { open } = this.state
    const { classes, title } = this.props;

    return (
      <div>
        <Button onClick={this.openDialog}>More</Button>
        <Dialog
          onClose={this.closeDialog}
          aria-labelledby="customized-dialog-title"
          open={open}
          TransitionComponent={Transition}
          maxWidth='sm'
          fullWidth={true}
          PaperProps={{
            style: {
              marginBottom: '0px',
              alignSelf: 'flex-end',
              borderRadius: '0px',
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px',
            },
          }}
        >
          <DialogTitle className={classes.title}>
            {title}
          </DialogTitle>
          <DialogContent>
            {this.props.children}
          </DialogContent>
          <DialogActions>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(FormDialog);