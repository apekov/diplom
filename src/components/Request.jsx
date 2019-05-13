import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PersonalForm from '../component_helpers/PersonalForm';
import RequestInfoForm from '../component_helpers/RequestInfoForm';
// import Review from './Review';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Ваши данные', 'Описание проекта'];



class Checkout extends React.Component {
  state = {
    activeStep: 0,
    inputValue: {
        personalData: {
            firstName: {
                name: 'Ваше имя',
                value: ''
            },
            lastName: {
                name: 'Ваша фамилия',
                value: ''
            },
            phone: {
              name: 'Ваш номер',
              value: ''
          },
            address: {
                name: 'Город/адрес',
                value: ''
            },
            companyName: {
                name: 'Название компании',
                value: ''
            }
        },
        projectData: {
            type: {
              name: 'Тип ПО',
              desc: 'Укажите тип требуемого програмного обеспечения (web, mobile)',
              value: ''
          },
          price: {
            name: 'Примерный бюджет',
            desc: 'Укажите нижнее, верхнее значение',
            value: ''
          },
          time: {
            name: 'Время реализации',
            desc: 'Укажите сроки в которые необходима реализация (если сроки в строгих рамках)',
            value: ''
          },
          description: {
            name: 'Краткое описание',
            textarea: true,
            value: ''
          }

        }
    }
  };

  handlePersonInput = (e) => {
    const target = e.currentTarget;
    this.setState({
      ...this.state,
      inputValue: {
          ...this.state.inputValue,
          personalData: {
            ...this.state.inputValue.personalData,
            [target.id]: {
              ...this.state.inputValue.personalData[target.id],
              value: target.value
            }
        }
      }
    });
  }
  handleProjectInput = (e) => {
    const target = e.currentTarget;
    this.setState({
      ...this.state,
      inputValue: {
          ...this.state.inputValue,
          projectData: {
            ...this.state.inputValue.projectData,
            [target.id]: {
              ...this.state.inputValue.projectData[target.id],
              value: target.value
            }
        }
      }
    });
  }

  getStepContent(step) {
    const {personalData, projectData} = this.state.inputValue;

    switch (step) {
      case 0:
        return <PersonalForm inputsData={personalData} handleChange={this.handlePersonInput} />;
      case 1:
        return <RequestInfoForm inputsData={projectData} handleChange={this.handleProjectInput} />;
      default:
        throw new Error('Unknown step');
    }
  }

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
    });
  };

  render() {
    const { classes } = this.props;
    const { activeStep } = this.state;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Заполнение заявки
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Спасибо за вашу заявку
                  </Typography>
                  <Typography variant="subtitle1">
                    Вскоре мы обработаем данные и свяжемся с вами
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        Назад
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1 ? 'Отправить данные' : 'Дальше'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Checkout.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Checkout);
