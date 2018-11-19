import React from 'react';
import constants from './constants';
import scaleCoordsBy from './scaleCoordsBy';
import calcDimensions from './calcDimensions';
import Tooltip from '@material-ui/core/Tooltip';

export default ({meta, onThumbClicked}) => {

    const {theme, gpsCoordinates,geometry} = meta;
    const map = calcDimensions(gpsCoordinates, meta.locations, scaleCoordsBy(geometry.coordinates, 20));

    const viewportWidth = .9 * (map.width * constants.mapZoom);
    const viewportHeight = 50 + (map.height * constants.mapZoom);

    return <svg xmlns="http://www.w3.org/2000/svg" 
            width={viewportWidth} 
            height={viewportHeight}
            viewBox={`${0} ${0} ${map.width} ${map.height}`} 
            baseProfile="full" 
            version="1.1">
        <defs>
            <linearGradient id='bg' x1='0%' y1='0%' x2='100%' y2='100%'>
                <stop offset='50%' stopColor={theme.startColor}/>
                <stop offset='100%' stopColor={theme.stopColor}/>
            </linearGradient>
            {map.locations.map((loc, i) => <pattern key={i} 
                    id={`img${1+ i}`} 
                    patternContentUnits='objectBoundingBox' 
                    width='100%'
                    height='100%'>
                <image xlinkHref={`https://s3-us-west-2.amazonaws.com/photo-geo-explorer/120/${loc.thumb}`} 
                    preserveAspectRatio="none"
                    width={1} 
                    height={1}
                    />                
            </pattern>)}
        </defs>
        {map.coordinateSet.map((coords, i) => {
            return <path key={i} 
                d={coords.map((coord, i) => {
                    const x = map.offsetX + coord[0];
                    const y = map.offsetY + coord[1];
                    const inverseY = map.height - y;
                    if (i === 0)
                        return `M${x} ${inverseY}`;
                    else
                        return `L ${x} ${inverseY}`;
                }).join(' ') + 'Z'} 
                fill={`url(#bg)`} 
                stroke={'black'}/>;                    
    })}
    {map.locations.map((loc, i) => <Tooltip key={i} title={loc.name}>
        <circle
            className={`pointer thumb r-${loc.pinSize}`} 
            onClick={onThumbClicked.bind(null, i)}
            cx={loc.coord[0]} 
            cy={loc.coord[1]} 
            r={loc.pinSize * .5} 
            stroke="#666" 
            fill={`url(#img${1+i})`}/>
        </Tooltip>)}
    </svg>;
}