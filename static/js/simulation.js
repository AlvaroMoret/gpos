var imageUrl = "static/images/fpso.png";
var imageBounds = [[-21.295452, -40.798416], [-21.338556, -40.6098]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);

var startLocation = [-21.317362, -40.763472]
    
    markers = [], //Markers (Users)
    outerPolylines = [], //Polylines for Outside the Polygon
    innerPolylines = [], //Polylines for Inside the Polygon
    polygons = drawArea(), //Polygon Areas

    outerCoord = [[]], //Polyline Coordinates for Outside the Polygon
    innerCoord = [[[[]]]], //Polyline Coordinates for Inside the Polygon
    inx = [], //Represent Indexes from "innerCoord" | [i][0] Index1, Represent Polylines | [i][1] Index2, Represent Polyline Points
    entDate = [], //Last Date Markers Entered an Area
    time = [], //Timers [i][0] Represent Millisecond | [i][1] Represent Second | [i][2] Represent Minute | [i][3] Represent Hour
    lastArea = [], //Last Visited Areas
    
    control = false; //Marker - Polygon Contains Controller

// map.on('click', function(e) { 
//    alert(e.latlng.lat + ", " + e.latlng.lng);
// });


walk(5, 10, 300, 1000, polygons);

function walk(n, lineLength, intervalRate, dist, polygons) { //Make Move
        var greenIcon = L.icon({
            iconUrl: 'static/images/hmGreen.png',
            iconSize: [50, 50],
            iconAnchor: [25, 50],
            popupAnchor: [0, -50]
        });

        var redIcon = L.icon({
                iconUrl: 'static/images/hmRed.png',
                iconSize: [50, 50],
                iconAnchor: [25, 50],
                popupAnchor: [0, -50]
        });

    for (i = 0; i < n; i++) {
        markers.push(L.marker(startLocation, {
            icon: greenIcon, 
            title: "Id " + i
        }).addTo(map));

        outerPolylines.push(L.polyline([[-180, -180], [-180, -180]], {
            color: 'rgba(0, 56, 0, 0.8)',
            className: 'outer-polyline'
        }).addTo(map));
        innerPolylines.push(L.polyline([[-180, -180], [-180, -180]], {
            color: 'rgba(200, 0, 0, 0.6)', 
            className: 'inner-polyline'
        }).addTo(map));

        outerCoord.push([[]]);
        innerCoord.push([[[]]]);
        inx.push([0, 0]);
        time.push(-1);
        entDate.push(-1);
        lastArea.push(-1);

    } outerCoord.shift(); innerCoord.shift();

    for (i = 0; i < n; i++) {
        outerCoord[i].shift();
        for(j = 0; j < (lineLength + 1); j++)
            outerCoord[i].push([startLocation[0], startLocation[1]]);
    } 

    var areaLayers = L.layerGroup(), //Layer Control System
        emptyLayer = L.layerGroup();
    for (i = 0; i < innerPolylines.length; i++)
        areaLayers.addLayer(innerPolylines[i]);

    for (i = 0; i < polygons.length; i++)
        areaLayers.addLayer(polygons[i]);

    setInterval(() => {
        for (q = 0; q < n; q++) {
            popup(q);
            control = isContain(polygons, q);
        
            for (i = 0; i < lineLength; i++)
                for(j = 0; j < 2; j++)
                    outerCoord[q][i][j] = outerCoord[q][i + 1][j];

            newLocation(dist, lineLength, q);
    
            if (isContain(polygons, q) !== -1) { //Permanent Polyline
                innerCoord[q][inx[q][0]][inx[q][1]] = ([outerCoord[q][lineLength][0], outerCoord[q][lineLength][1]]);
                inx[q][1]++;

                markers[q].setLatLng(innerCoord[q][inx[q][0]][innerCoord[q][inx[q][0]].length - 1]);
                innerPolylines[q].setLatLngs(innerCoord[q]);
                outerPolylines[q].setLatLngs(outerCoord[q]);

            } else { //Temporary Polyline
                markers[q].setLatLng(outerCoord[q][lineLength]).setIcon(greenIcon);
                outerPolylines[q].setLatLngs(outerCoord[q]);

            }

            if (control === -1 && isContain(polygons, q) !== -1) { //Entering the Polygon
                markers[q].setIcon(redIcon);
                
                entDate[q] = new Date();
                lastArea[q] = isContain(polygons, q);

            } else if (control !== -1 && isContain(polygons, q) === -1) { //Going Out from Polygon
                markers[q].setIcon(greenIcon);

                time[q] = getAreaTime(new Date().getTime() - entDate[q].getTime(), [1000, 60, 60]);
                lastAreaTime = time[q][3] + "h " + time[q][2] + "min " + time[q][1] + "sec"; 
                
                innerCoord[q].push([[]]);
                inx[q][0]++; inx[q][1] = 0;

            }
        }
    }, intervalRate);
}

function popup(q) { //Adding Popup to Marker
    var lastAreaNum = "Area " + lastArea[q],
    lastAreaTime = "";
    
    if(lastAreaNum === "Area -1" ) lastAreaNum = "Auditório";

    if(typeof time[q][0] === "undefined") lastAreaTime = "NULL";
    else lastAreaTime = time[q][3] + "h " + time[q][2] + "min " + time[q][1] + "sec";
   
    noAddress();

    function noAddress(){
        markers[q].bindPopup(
            "<b style='font-size: 1.25rem'>" + markers[q].options.title + " - Informações</b>" + //Header
            "<br><b>Última Área visitada: </b>" + lastAreaNum +  //Last Visited Place
            "<br><b>Tempo no local: </b>" + lastAreaTime +//Time Spent
            "<br><b>Andar: 1</b>" //Andar do Funcionário
        ); 
    }
}

function newLocation(dist, lineLength, q) { //Giving New Location to Marker
    var latV = (Math.random()) / dist,
    lngV = (Math.random()) / dist,
    direction = Math.floor(Math.random() * 20);
    if (direction > 7) direction = Math.floor(Math.random() * 2); //Reduce the Chance of Going Straight
    
    switch (direction) { //Set Direction
        case 0: 
            if(verLat(outerCoord[q][lineLength][0] + latV) && verLon(outerCoord[q][lineLength][1] + lngV)){
                outerCoord[q][lineLength][0] += latV;
                outerCoord[q][lineLength][1] += lngV;
            }break; //Northeast
            
        case 1: 
            if(verLat(outerCoord[q][lineLength][0] - latV) && verLon(outerCoord[q][lineLength][1] - lngV)){
                outerCoord[q][lineLength][0] -= latV; outerCoord[q][lineLength][1] -= lngV; 
            }break; //Southwest
        case 2:  
            if(verLat(outerCoord[q][lineLength][0] + latV) && verLon(outerCoord[q][lineLength][1] - lngV)){
                outerCoord[q][lineLength][0] += latV; outerCoord[q][lineLength][1] -= lngV;
            } break; //Northwest
        case 3: 
            if(verLat(outerCoord[q][lineLength][0] - latV) && verLon(outerCoord[q][lineLength][1] + lngV)){
                outerCoord[q][lineLength][0] -= latV; outerCoord[q][lineLength][1] += lngV;
            } break; //Southeast
        case 4: 
            if(verLat(outerCoord[q][lineLength][0] + latV))
                outerCoord[q][lineLength][0] += latV; 
            break; //North
            
        case 5: 
            if(verLat(outerCoord[q][lineLength][0] - latV))
                outerCoord[q][lineLength][0] -= latV;
            break; //South
            
        case 6: 
            if(verLon(outerCoord[q][lineLength][1] + lngV))
                outerCoord[q][lineLength][1] += lngV;
            break; //East
            
        case 7: 
            if(verLon(outerCoord[q][lineLength][1] - lngV))
                outerCoord[q][lineLength][1] -= lngV;
            break; //West
            
    }
}

function verLat(dist){
    if(dist < -21.336239 || dist > -21.297862) return false;
    return true;
}
function verLon(dist){
    if(dist < -40.781159 || dist > -40.627203) return false;
    return true;
}


function isContain(polygons, j) { //Control If the Area Contains Marker
    for(i = 0; i < polygons.length; i++)
        if (polygons[i].contains(markers[j].getLatLng())) return i;
            
        return -1;
    }
        
function getAreaTime(baseValue, timeFractions) { //Clock
    var data = [baseValue];
    
    for (i = 0; i < timeFractions.length; i++) {
        data.push(parseInt(data[i] / timeFractions[i]));
        data[i] = data[i] % timeFractions[i];
    }
    
    return data;
}
        
function drawArea() { //Define Areas 
    var polygonLatlngs = //Coordinates for Areas
    [
        [ 
            [-21.300735, -40.753351], //area 0
            [-21.313893, -40.753437],
            [-21.314172, -40.740561],
            [-21.300655, -40.740432],
        ],
        
        [
            [-21.301851, -40.740002], //area 1
            [-21.314172, -40.740124],
            [-21.314209, -40.727598],
            [-21.301500, -40.727641],
        ],
        
        [
            [-21.302575, -40.726569], //area 2
            [-21.314172, -40.726655],
            [-21.314492, -40.716611],
            [-21.304654, -40.716697],
            [-21.304454, -40.719366],
            [-21.302815, -40.719444],
        ],
    
        [
            [-21.30145, -40.7026500], //area 3
            [-21.314172, -40.702650],
            [-21.314172, -40.685836],
            [-21.30145, -40.6859220],
        ],
        
        [
            [-21.30129, -40.6831770], //area 4
            [-21.314172, -40.683177],
            [-21.314172, -40.671939],
            [-21.30129, -40.6719390],           
        ],
        
        [
            [-21.30153, -40.6586990], //area 5
            [-21.314172, -40.658699],
            [-21.314244, -40.651064],
            [-21.30153, -40.6510640],         
        ],
            
        [
            [-21.320081, -40.750273], //area 6
            [-21.331994, -40.750259],
            [-21.332314, -40.735676],
            [-21.320081, -40.735676],
        ],
        
        [
            [-21.320081, -40.73345], //area 7
            [-21.320081, -40.72770],
            [-21.331994, -40.72718],
            [-21.331994, -40.73345],
        ],
        
        [
            [-21.320001, -40.724954], //area 8
            [-21.331994, -40.724697],
            [-21.332314, -40.719378],
            [-21.319921, -40.719378],
        ],
        
        [
            [-21.319841, -40.716719], //area 9
            [-21.328156, -40.716719],
            [-21.328396, -40.705481],
            [-21.319761, -40.705567],
        ],
        
        [
            [-21.328556, -40.716719], //area 10
            [-21.332154, -40.716719],
            [-21.332554, -40.708226],
            [-21.328556, -40.708140],
        ],
        
        [
            [-21.319921, -40.702564], //area 11
            [-21.332554, -40.702478],
            [-21.332314, -40.685922],
            [-21.319601, -40.685664],
        ],
        
        [
            [-21.319761, -40.680147], //area 12
            [-21.332474, -40.680260],
            [-21.332554, -40.663532],
            [-21.319841, -40.663617],
        ],
        
        [
            [-21.319941, -40.661117], //area 13
            [-21.329536, -40.660982],
            [-21.329596, -40.652275],
            [-21.319621, -40.652167],
        ],
        
        [
            [-21.319861, -40.649658], //area 14
            [-21.331294, -40.649566],
            [-21.331215, -40.641052],
            [-21.319921, -40.640945],
        ],
        
        [
            [-21.303289, -40.661196], //area 15
            [-21.307287, -40.667372],
            [-21.313284, -40.667244],
            [-21.315643, -40.661367],
            [-21.315563, -40.660338],
            [-21.30209, -40.6604670],
            [-21.302529, -40.661239],
        ],
        
    ],
    polygons = [];
    
    for (i = 0; i < polygonLatlngs.length; i++) {
        polygons.push(L.polygon(polygonLatlngs[i], {
            color: 'rgb(135, 162, 251)', 
            title: 'Area ' + i,
            className: 'area-polygon'
        }).addTo(map));
        
        polygons[i].bindPopup(polygons[i].options.title);
    }
    
    return polygons;
}

marker1.bindPopup(
    "<b style='font-size: 1.25rem'> ID 4 - Informações</b>" + //Header
    "<br><b>Última Área visitada: </b> Area 15" +  //Last Visited Place
    "<br><b>Tempo no local: </b> 0h 2min 12sec" //Time Spent
); 

marker2.bindPopup(
    "<b style='font-size: 1.25rem'> ID 2 - Informações</b>" + //Header
    "<br><b>Última Área visitada: </b> Area 0" +  //Last Visited Place
    "<br><b>Tempo no local: </b> 0h 10min 0sec" //Time Spent
); 

marker3.bindPopup(
    "<b style='font-size: 1.25rem'> ID 3 - Informações</b>" + //Header
    "<br><b>Última Área visitada: </b> Area 3" +  //Last Visited Place
    "<br><b>Tempo no local: </b> 1h 10min 0sec" //Time Spent
); 
