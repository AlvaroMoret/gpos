var imageUrl = "static/images/fpso.png";
var imageBounds = [[-21.295452, -40.798416], [-21.338556, -40.6098]];
L.imageOverlay(imageUrl, imageBounds).addTo(map);


        var polygon1 = L.polygon([
            [-21.300735, -40.753351],
            [-21.313893, -40.753437],
            [-21.314172, -40.740561],
            [-21.300655, -40.740432],
        ]).addTo(map);
        
        var polygon2 = L.polygon([
            [-21.301851, -40.740002],
            [-21.314172, -40.740124],
            [-21.314209, -40.727598],
            [-21.30150, -40.727641],
        ]).addTo(map);
        
        var polygon3 = L.polygon([
            [-21.302575, -40.726569],
            [-21.314172, -40.726655],
            [-21.314492, -40.716611],
            [-21.304654, -40.716697],
            [-21.304454, -40.719366],
            [-21.302815, -40.719444],
        ]).addTo(map);

        var polygon4 = L.polygon([
            [-21.30145, -40.70265],
            [-21.314172, -40.70265],
            [-21.314172, -40.685836],
            [-21.30145, -40.685922],
        ]).addTo(map);

        var polygon5 = L.polygon([
            [-21.30129, -40.683177],
            [-21.314172, -40.683177],
            [-21.314172, -40.671939],
            [-21.30129, -40.671939],           
        ]).addTo(map);

        var polygon6 = L.polygon([
            [-21.30153, -40.658699],
            [-21.314172, -40.658699],
            [-21.314244, -40.651064],
            [-21.30153, -40.651064],         
        ]).addTo(map);

        var polygon7 = L.polygon([
            [-21.320081, -40.750273],
            [-21.331994, -40.750259],
            [-21.332314, -40.735676],
            [-21.320081, -40.735676],
        ]).addTo(map);

        var polygon8 = L.polygon([
            [-21.320081, -40.73345],
            [-21.320081, -40.7277],
            [-21.331994, -40.727188],
            [-21.331994, -40.73345],
        ]).addTo(map);

        var polygon9 = L.polygon([
            [-21.320001, -40.724954],
            [-21.331994, -40.724697],
            [-21.332314, -40.719378],
            [-21.319921, -40.719378],
        ]).addTo(map);
        
        var polygon10 = L.polygon([
            [-21.319841, -40.716719],
            [-21.328156, -40.716719],
            [-21.328396, -40.705481],
            [-21.319761, -40.705567],
        ]).addTo(map);
        
        var polygon11 = L.polygon([
            [-21.328556, -40.716719],
            [-21.332154, -40.716719],
            [-21.332554, -40.708226],
            [-21.328556, -40.70814],
        ]).addTo(map);
        
        var polygon12 = L.polygon([
            [-21.319921, -40.702564],
            [-21.332554, -40.702478],
            [-21.332314, -40.685922],
            [-21.319601, -40.685664],
        ]).addTo(map);
        
        var polygon13 = L.polygon([
            [-21.319761, -40.680147],
            [-21.332474, -40.68026],
            [-21.332554, -40.663532],
            [-21.319841, -40.663617],
        ]).addTo(map);
        
        var polygon14 = L.polygon([
            [-21.319941, -40.661117],
            [-21.329536, -40.660982],
            [-21.329596, -40.652275],
            [-21.319621, -40.652167],
        ]).addTo(map);
        
        var polygon15 = L.polygon([
            [-21.319861, -40.649658],
            [-21.331294, -40.649566],
            [-21.331215, -40.641052],
            [-21.319921, -40.640945],
        ]).addTo(map);
        
        var polygon16 = L.polygon([
            [-21.303289, -40.661196],
            [-21.307287, -40.667372],
            [-21.313284, -40.667244],
            [-21.315643, -40.661367],
            [-21.315563, -40.660338],
            [-21.30209, -40.660467],
            [-21.302529, -40.661239],
        ]).addTo(map);
        
        var polygon0 = L.polygon([
            [-21.299371, -40.768181],
            [-21.308447, -40.768382],
            [-21.308527, -40.77962],
            [-21.325318, -40.779537],
            [-21.325518, -40.768299],
            [-21.335032, -40.768342],
            [-21.335112, -40.765125],
            [-21.32132, -40.765383],
            [-21.32108, -40.76401],
            [-21.313284, -40.764053],
            [-21.313045, -40.765426],
            [-21.299531, -40.76504],
        ]).addTo(map);


        var marker1 = L.marker([-21.3102855, -40.665376], {icon: icoR}).addTo(map);
        var marker2 = L.marker([-21.307811, -40.694243], {icon: icoR}).addTo(map);
        var marker3 = L.marker([-21.316, -40.771], {icon: icoG}).addTo(map);
        var marker4 = L.marker([-21.317241, -40.774], {icon: icoG}).addTo(map);
        var marker5 = L.marker([-21.3167, -40.775], {icon: icoG}).addTo(map);
        var marker6 = L.marker([-21.318, -40.76999], {icon: icoG}).addTo(map);
        var marker7 = L.marker([-21.317, -40.773], {icon: icoG}).addTo(map);

        marker1.bindPopup(
            "<b style='font-size: 1.25rem'> ID 4 - Informações</b>" + //Header
            "<br><b>Última Área visitada: </b> Area 15" +  //Last Visited Place
            "<br><b>Tempo no local: </b> 0h 2min 12sec" +//Time Spent
            "<br><b>Andar: </b>2" //Andar do Funcionário
        ); 

        marker2.bindPopup(
            "<b style='font-size: 1.25rem'> ID 3 - Informações</b>" + //Header
            "<br><b>Última Área visitada: </b> Area 3" +  //Last Visited Place
            "<br><b>Tempo no local: </b> 1h 10min 0sec" +//Time Spent
            "<br><b>Andar: </b>2" //Andar do Funcionário
        ); 

        marker6.bindPopup(
            "<b style='font-size: 1.25rem'> ID 1 - Informações</b>" + //Header
            "<br><b>Última Área visitada: </b> Auditório" +  //Last Visited Place
            "<br><b>Tempo no local: </b> 0h 2min 12sec" +//Time Spent
            "<br><b>Andar: </b>1" //Andar do Funcionário
        ); 
        
        marker7.bindPopup(
            "<b style='font-size: 1.25rem'> ID 2 - Informações</b>" + //Header
            "<br><b>Última Área visitada: </b> Auditório" +  //Last Visited Place
            "<br><b>Tempo no local: </b> 0h 10min 0sec" +//Time Spent
            "<br><b>Andar: </b>1" //Andar do Funcionário
        ); 
        
        marker3.bindPopup(
            "<b style='font-size: 1.25rem'> ID 3 - Informações</b>" + //Header
            "<br><b>Última Área visitada: </b> Auditório" +  //Last Visited Place
            "<br><b>Tempo no local: </b> 1h 10min 0sec" +//Time Spent
            "<br><b>Andar: </b>1" //Andar do Funcionário
        ); 
        
        marker4.bindPopup(
            "<b style='font-size: 1.25rem'> ID 4 - Informações</b>" + //Header
            "<br><b>Última Área visitada: </b> Auditório" +  //Last Visited Place
            "<br><b>Tempo no local: </b> 0h 20min 15sec" +//Time Spent
            "<br><b>Andar: </b>1" //Andar do Funcionário
        );
        
        marker5.bindPopup(
            "<b style='font-size: 1.25rem'> ID 5 - Informações</b>" + //Header
            "<br><b>Última Área visitada: </b> Auditório" +  //Last Visited Place
            "<br><b>Tempo no local: </b> 0h 15min 0sec" +//Time Spent
            "<br><b>Andar: </b>1" //Andar do Funcionário
        );
        



        polygon0.bindPopup("Auditório: " + polygon0.getBounds().getCenter());
        polygon1.bindPopup("Área 0");
        polygon2.bindPopup("Área 1");
        polygon3.bindPopup("Área 2");
        polygon4.bindPopup("Área 3");
        polygon5.bindPopup("Área 4");
        polygon6.bindPopup("Área 5");
        polygon7.bindPopup("Área 6");
        polygon8.bindPopup("Área 7");
        polygon9.bindPopup("Área 8");
        polygon10.bindPopup("Área 9");
        polygon11.bindPopup("Área 10");
        polygon12.bindPopup("Área 11");
        polygon13.bindPopup("Área 12");
        polygon14.bindPopup("Área 13");
        polygon15.bindPopup("Área 14");
        polygon16.bindPopup("Área 15");


        