import "./index.css";
import meta from './meta';
import React from 'react';
import GeoMap from './geoMap';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';

const cssStyles = {
    infoIcon:{float: 'left', marginRight: '10px', fontSize: '2.4em', color: '#555'}
}

const styles = theme => ({
  root: {
    display: 'flex',
    flexGrow: 1,
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
    card:{

    },
    paper: {
        margin: 10
    },
    mapContainer:{
        margin: 10,
        textAlign: 'center'
    },
    thumb:{
        marginLeft: '-30px',
        marginTop: '-30px',
        width: '115%'
    },
    chip: {
      margin: theme.spacing.unit,
    }
});

class App extends React.Component{

    constructor(props){
        super(props);

        this.onChangeMap = this.onChangeMap.bind(this);
        this.onThumbClicked = this.onThumbClicked.bind(this);
        this.buildMap = this.buildMap.bind(this);

        this.state = {
            mapId: 'OR',
            map: this.buildMap('OR'),
            maps: [
                {id: 'WA', title: 'Washington'}, 
                {id: 'OR', title: 'Oregon'}, 
                {id: 'CA', title: 'California'}
            ],
            selectedDetail:null
        }
    }

    onChangeMap(e) {
        const mapId = e.target.value;
        this.setState({
            mapId: mapId,
            map: this.buildMap(mapId)
        });
    }

    buildMap(mapId) { 
        return <GeoMap meta={meta.usa[mapId]} onThumbClicked={this.onThumbClicked}/>; 
    }

    onThumbClicked(thumb, e) {
        e.preventDefault();
        this.setState({
            selectedDetail: thumb.detail
        });
    }

    renderDetailCard(){
        const {classes} = this.props;
        const {selectedDetail} = this.state;

        if (!selectedDetail){
            return <p>
                <i class="material-icons" style={cssStyles.infoIcon}>info</i>Select a thumbnail
            </p>;
        }

        return <div>
            <img src={selectedDetail.heroImageUrl} className={classes.thumb}/>
            <p>
                <i class="material-icons" style={cssStyles.infoIcon}>info</i>{selectedDetail.summary}
            </p>
            <CardActions>
                <a target="_blank" href={selectedDetail.link}><Button size="small">More Photos...</Button></a>
            </CardActions>
            {selectedDetail.tags.map(tag => <Chip label={tag} className={classes.chip}/>)}
        </div>
    }

    render(){
        const {classes} = this.props;
        const {mapId, maps, selectedDetail, state} = this.state;

        return <div className={classes.root}>
            <CssBaseline />
            <AppBar position="static" color="default">
                <Toolbar>
                <Typography variant="title" color="inherit">
                Favorite US Scenic Spots
                </Typography>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <form className={classes.root} autoComplete="off">
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="state-simple">Select a State</InputLabel>
                                <Select
                                    value={mapId}
                                    onChange={this.onChangeMap}
                                    inputProps={{
                                    name: 'state',
                                    id: 'state-simple'}}>
                                    {maps.map((map, i) => <MenuItem key={i} value={map.id}>{map.title}</MenuItem>)}
                                </Select>
                            </FormControl>
                        </form>
                    </Paper>
                </Grid>
                <Grid container spacing={8}> 
                    <Grid item xs>
                        <Paper className={classes.mapContainer}>
                            {this.state.map}
                        </Paper>
                    </Grid>
                    <Grid item md={6}>
                        <Paper className={classes.paper}>
                            <Card className={classes.card}>
                                <CardContent>
                                    {this.renderDetailCard()}
                                </CardContent>
                            </Card>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    }
}

export default withStyles(styles)(App);