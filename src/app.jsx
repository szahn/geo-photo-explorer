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
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
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
    media: {
        paddingTop: '56.25%', // 16:9
        height: 0,
        objectFit: 'cover',
    },
    paper: {
        margin: 10
    },
    mapContainer:{
        margin: 10,
        textAlign: 'center'
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

        const defaultMapId = "CA";
        this.state = {
            mapId: defaultMapId,
            map: this.buildMap(defaultMapId),
            maps: [
                {id: 'AZ', title: 'Arizona'}, 
                {id: 'CA', title: 'California'},
                {id: 'NV', title: 'Nevada'},
                {id: 'UT', title: 'Utah'}, 
                {id: 'OR', title: 'Oregon'},
                {id: 'WA', title: 'Washington'}
            ],
            thumbnailIndex: null,
            thumbnailInfo: null
        }
        
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.mapId !== this.state.mapId && this.state.mapId){
            this.setState({
                map: this.buildMap(this.state.mapId),
                thumbnailInfo: meta.usa[this.state.mapId].locations[this.state.thumbnailIndex]
            });
        }

        if (prevState.thumbnailIndex !== this.state.thumbnailIndex && this.state.thumbnailIndex !== null){
            this.setState({
                thumbnailInfo: meta.usa[this.state.mapId].locations[this.state.thumbnailIndex]
            });
        }
    }

    componentDidMount(){
        this.historyUnlisten = history.listen((location, action) => {
            this.onLocationChanged(location);
        })

        this.onLocationChanged(history.location);
    }

    onLocationChanged(location){
        const paths = location.pathname.split("/");
        const mapSegmentIndex = paths.indexOf("map");
        const mapId = mapSegmentIndex > 0 && paths.length -1 >= mapSegmentIndex ? paths[1 + mapSegmentIndex] : "";

        if (mapId){
            const thumbnailIndex = mapId && paths.length -1 >= 2 + mapSegmentIndex ? parseInt(paths[2 + mapSegmentIndex], 10) : null;
            this.setState({
                mapId: mapId,
                thumbnailIndex: thumbnailIndex
            });    
        }
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

        if (!thumbnailInfo || !thumbnailInfo.detail){
            return null;
        }

        return <Card className={classes.card}>
            <CardActionArea href={thumbnailInfo.detail.link} target="_blank">
                <CardMedia
                        className={classes.media}
                        image={`https://s3-us-west-2.amazonaws.com/photo-geo-explorer/500/${thumbnailInfo.thumb}`}
                        title="Contemplative Reptile"/>
                <CardContent>
                    <Typography variant="body2" color="inherit">
                        {thumbnailInfo.detail.summary}
                    </Typography>
                    {thumbnailInfo.detail.tags && thumbnailInfo.detail.tags.map((tag, i) => <Chip key={i} label={tag} className={classes.chip}/>)}
                </CardContent>
            </CardActionArea>
        </Card>;
    }

    onMapRef(element){
        this.mapEl = element;
    }

    render(){
        const {classes} = this.props;
        const {mapId, maps} = this.state;

        return <Grid container>
            <CssBaseline />
            <GithubRibbon url="https://github.com/szahn/geo-photo-explorer"/>
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
                                <InputLabel shrink htmlFor="state">
                                    {`${maps.length} States`}
                                </InputLabel>
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
            </Grid>
            <Grid container> 
                <Grid item md={6} xs={12}>
                    <Paper className={classes.mapContainer}>
                        {this.state.map}
                    </Paper>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Paper className={classes.paper}>
                        {this.renderDetailCard()}
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    }
}

export default withStyles(styles)(App);