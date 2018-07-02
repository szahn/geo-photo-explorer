export default (coordinateSet, scaleCoordsBy = 20) => coordinateSet.map( coords => coords.map(coord  => [scaleCoordsBy * coord[0], scaleCoordsBy * coord[1]]));
