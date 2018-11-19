export default (gpsCoordinates, gpsLocations, coordinateSet) => {
    var minX = null, minY = null, maxX = null, maxY = null;
    coordinateSet.forEach(set => set.forEach(coord =>{
        if (null === minX){
            minX = coord[0];
        }
        else{
            if (coord[0] < minX) minX = coord[0];
        }

        if (null === minY){
            minY = coord[1];
        }
        else{
            if (coord[1] < minY) minY = coord[1];
        }

        if (null === maxX){
            maxX = coord[0];
        }
        else{
            if (coord[0] > maxX) maxX = coord[0];
        }

        if (null === maxY){
            maxY = coord[1];
        }
        else{
            if (coord[1] > maxY) maxY = coord[1];
        }
    }));

    var offsetX = 0 - Math.min(0, minX);
    var offsetY = (minY < 0) ? 0 - Math.min(0, minY) : 0 - Math.max(0, minY);

    var mapWidth = (maxX - minX);
    var mapHeight = (maxY - minY);

    const gpsWidth = Math.abs(gpsCoordinates.bottomRight[1] - gpsCoordinates.topLeft[1]);
    const gpsHeight = Math.abs(gpsCoordinates.bottomRight[0] - gpsCoordinates.topLeft[0]);

    const locations = gpsLocations.map(gpsLocation =>{
        const x = (Math.abs(gpsCoordinates.topLeft[1] - gpsLocation.gps[1]) / gpsWidth) * mapWidth;
        const y = ((gpsHeight + (gpsCoordinates.bottomRight[0] - gpsLocation.gps[0])) / gpsHeight) * mapHeight;
        gpsLocation.coord = [x, y];
        return gpsLocation;
    });

    return {
        locations,
        coordinateSet,
        offsetX,
        offsetY,
        minX,
        minY,
        maxX,
        maxY,
        width: mapWidth,
        height : mapHeight
    };
}