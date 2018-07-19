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
import createHistory from "history/createHashHistory"
import GithubRibbon from './githubRibbon';

const history = createHistory();

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
            mapId: "",
            map: null,
            maps: [
                {id: 'WA', title: 'Washington'}, 
                {id: 'OR', title: 'Oregon'}, 
                {id: 'CA', title: 'California'}
            ],
            thumbnailIndex: null,
            thumbnailInfo: null
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.mapId !== this.state.mapId && this.state.mapId){
            this.setState({
                map: this.buildMap(this.state.mapId),
                thumbnailInfo: meta.usa[this.state.mapId].locations[this.state.thumbnailIndex].detail
            });
        }

        if (prevState.thumbnailIndex !== this.state.thumbnailIndex && this.state.thumbnailIndex !== null){
            this.setState({
                thumbnailInfo: meta.usa[this.state.mapId].locations[this.state.thumbnailIndex].detail
            });
        }
    }

    componentDidMount(){
        this.historyUnlisten = history.listen((location, action) => {
            this.onLocationChanged(location);
        })

        this.onLocationChanged(history.location);

        const paths = location.pathname.split("/");
        if (paths.indexOf("map") < 0){
            history.replace(`/map/OR/0`);
        }
    }

    onLocationChanged(location){
        const paths = location.pathname.split("/");
        const mapSegmentIndex = paths.indexOf("map");
        const mapId = mapSegmentIndex > 0 && paths.length -1 >= mapSegmentIndex ? paths[1 + mapSegmentIndex] : "";
        const thumbnailIndex = mapId && paths.length -1 >= 2 + mapSegmentIndex ? parseInt(paths[2 + mapSegmentIndex], 10) : null;

        this.setState({
            mapId: mapId,
            thumbnailIndex: thumbnailIndex
        });    
    }

    componentWillUnmount(){
        this.historyUnlisten();
    }

    onChangeMap(e) {
        const mapId = e.target.value;
        history.replace(`/map/${mapId}/0`)
    }

    buildMap(mapId) { 
        return <GeoMap meta={meta.usa[mapId]} onThumbClicked={this.onThumbClicked}/>; 
    }

    onThumbClicked(thumbIndex, e) {
        e.preventDefault();
        if (this.state.thumbnailIndex !== thumbIndex){
            history.replace(`/map/${this.state.mapId}/${thumbIndex}`);
        }
    }

    renderDetailCard(){
        const {classes} = this.props;
        const {thumbnailInfo} = this.state;

        if (!thumbnailInfo){
            return <div>
                <i className="material-icons" style={cssStyles.infoIcon}>info</i>
                <Typography variant="body1" color="inherit">
                    Select a thumbnail
                </Typography>
            </div>;
        }

        return <div>
            <img src={thumbnailInfo.heroImageUrl} className={classes.thumb}/>
            <div>
                <i className="material-icons" style={cssStyles.infoIcon}>info</i>
                <Typography variant="body2" color="inherit">
                    {thumbnailInfo.summary}
                </Typography>
            </div>
            <CardActions>
                <a target="_blank" href={thumbnailInfo.link}><Button size="small">More Photos...</Button></a>
            </CardActions>
            {thumbnailInfo.tags && thumbnailInfo.tags.map((tag, i) => <Chip key={i} label={tag} className={classes.chip}/>)}
        </div>
    }

    onMapRef(element){
        this.mapEl = element;
    }

    render(){
        const {classes} = this.props;
        const {mapId, maps} = this.state;

        return <div className={classes.root}>
            <CssBaseline />
            <AppBar position="static" color="default">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        Explore Photos by Geography
                    </Typography>
                </Toolbar>
            </AppBar>
            <Grid container>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <form className={classes.root} autoComplete="off">
                            <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="state-simple">Please Select a State</InputLabel>
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
            <GithubRibbon url="https://github.com/szahn/geo-photo-explorer"/>
        </div>
    }
}

export default withStyles(styles)(App);