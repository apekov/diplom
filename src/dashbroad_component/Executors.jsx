import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'

const styles = theme => ({
  root: {
    width: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  fab: {
    margin: theme.spacing.unit,
  },
})
class Executors extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <React.Fragment>
        <Typography
          component="h3"
          variant="h3"
          color="inherit"
          noWrap
          className="component_name"
        >
          Исполнители
        </Typography>
        <Fab color="primary" aria-label="Add" className={classes.fab}>
          <AddIcon />
        </Fab>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>ФИО</TableCell>
                <TableCell align="right">Специализация</TableCell>
                <TableCell align="right">Стаж</TableCell>
                <TableCell align="right">Компитенции</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {data.map(n => (
                <TableRow key={n.id}>
                  <TableCell component="th" scope="row">
                    {n.name}
                  </TableCell>
                  <TableCell align="right">{n.calories}</TableCell>
                  <TableCell align="right">{n.fat}</TableCell>
                  <TableCell align="right">{n.carbs}</TableCell>
                  <TableCell align="right">{n.protein}</TableCell>
                </TableRow>
              ))} */}
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    )
  }
}

Executors.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Executors)
