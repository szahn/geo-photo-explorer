var usa = {
    "AZ": {"type":"Feature","id":"04","properties":{"name":"Arizona","density":57.05},"geometry":{"type":"Polygon","coordinates":[[[-109.042503,37.000263],[-109.04798,31.331629],[-111.074448,31.331629],[-112.246513,31.704061],[-114.815198,32.492741],[-114.72209,32.717295],[-114.524921,32.755634],[-114.470151,32.843265],[-114.524921,33.029481],[-114.661844,33.034958],[-114.727567,33.40739],[-114.524921,33.54979],[-114.497536,33.697668],[-114.535874,33.933176],[-114.415382,34.108438],[-114.256551,34.174162],[-114.136058,34.305608],[-114.333228,34.448009],[-114.470151,34.710902],[-114.634459,34.87521],[-114.634459,35.00118],[-114.574213,35.138103],[-114.596121,35.324319],[-114.678275,35.516012],[-114.738521,36.102045],[-114.371566,36.140383],[-114.251074,36.01989],[-114.152489,36.025367],[-114.048427,36.195153],[-114.048427,37.000263],[-110.499369,37.00574],[-109.042503,37.000263]]]}},
    "CA": {
        theme:{startColor: "#C18950", stopColor: "#935D25"},
        locations: [
            {
                name: "Lassen Volcanic National Park", 
                gps:[40.394730, -121.213204], 
                thumb: "lassencathumb.jpg", 
                pinSize: 25, 
                detail:{
                    heroImageUrl:"https://c1.staticflickr.com/5/4393/37187210301_ab6aea9f29.jpg",
                    summary: "Lassen Volcanic National Park is in northern California. It's rich in hydrothermal sites like Bumpass Hell, with its acres of bubbling mud pots. The summit of Lassen Peak Volcano offers views over the surrounding wilderness. Nearby, the Devastated Area is littered with lava rocks from its last eruption. A network of trails through forest and around several lakes connects with the Pacific Crest Trail in the north.",
                    link: "https://www.flickr.com/photos/boredgamer85/37329907095/in/album-72157670881997981/",
                    tags: ["National park", "Volcano"]
                }
            },
            {
                name: "Big Bear", 
                gps:[34.254532, -116.922436], 
                thumb: "BigBear_thumb.jpg", 
                pinSize: 15, 
                detail:{
                    heroImageUrl:"https://c1.staticflickr.com/1/763/32180640215_72de357068.jpg",
                    summary: "Big Bear Lake is a small city in Southern California. It sits on the banks of fish-filled Big Bear Lake. It’s known for Bear Mountain ski resort, with its terrain parks and learner slopes, and family-friendly Snow Summit ski resort. Boutiques, gift shops and restaurants line the streets of Big Bear Lake Village, the commercial area. Surrounding the city, the rugged San Bernardino National Forest has mountain trails.",
                    link: "https://www.flickr.com/photos/boredgamer85/32032297032/in/album-72157678890924035/",
                    tags: ["Mountain"]
                }
            },
            {
                name: "Big Pine", 
                gps:[37.156529, -118.307726], 
                thumb: "Big Pine Creek Trail 1_thumb.JPG", 
                pinSize: 15,
                detail:{
                    heroImageUrl:"https://c2.staticflickr.com/2/1628/26158910464_2d291630dd.jpg",
                    summary:"Big Pine is a census-designated place in Inyo County, California, United States. Big Pine is located approximately 15 miles south-southeast of Bishop, at an elevation of 3,989 feet.",
                    link:"https://www.flickr.com/photos/boredgamer85/26739257686/in/album-72157665487734603/",
                    tags:[]
                }
            },
            {
                name: "Mojave Desert", 
                gps:[35.011052, -115.475064], 
                thumb: "Mojave Desert_thumb.JPG", 
                pinSize: 15,
                detail:{
                    heroImageUrl:"https://c2.staticflickr.com/6/5732/30423572364_661f27ddb6.jpg",
                    summary:"The Mojave Desert is an arid rain-shadow desert and the driest desert in North America. It is in the southwestern United States, primarily within southeastern California and southern Nevada.",
                    link:"https://www.flickr.com/photos/boredgamer85/31209155626/in/album-72157677075906455/",
                    tags:["Desert"]
                }
            },
            {
                name: "Joshua Tree National Park", 
                gps:[33.8574045,-115.9158259], 
                thumb:"Joshua Tree_thumb.JPG", 
                pinSize:20,
                detail:{
                    heroImageUrl:"https://c2.staticflickr.com/6/5833/22825340677_906b779e2e.jpg",
                    summary:"Joshua Tree National Park is a vast protected area in southern California. It's characterized by rugged rock formations and stark desert landscapes. Named for the region’s twisted, bristled Joshua trees, the park straddles the cactus-dotted Colorado Desert and the Mojave Desert, which is higher and cooler. Keys View looks out over the Coachella Valley. Hiking trails weave through the boulders of Hidden Valley.",
                    link:"https://www.flickr.com/photos/boredgamer85/25495210898/in/album-72157660821905839/",
                    tags:["National Park"]
                }
            },
            {
                name: "Death Valley National Park", 
                gps: [36.419142, -116.812444], 
                thumb:"Zabriskie Point_thumb.JPG", 
                pinSize:20,
                detail:{
                    heroImageUrl:"https://c2.staticflickr.com/2/1605/25486540101_22642a089b.jpg",
                    summary:"Death Valley National Park straddles eastern California and Nevada. It’s known for Titus Canyon, with a ghost town and colorful rocks, and Badwater Basin’s salt flats, North America's lowest point. Above, Telescope Peak Trail weaves past pine trees. North of the spiky salt mounds known as the Devil’s Golf Course, rattlesnakes live in Mesquite Flat Sand Dunes.",
                    link:"https://www.flickr.com/photos/boredgamer85/24948763734/in/album-72157664869598589/",
                    tags:["Desert", "National Park"]
                }
            },
            {
                name: "Channel Islands", 
                gps:[33.984283, -119.763456], 
                thumb:"Channel Island_thumb.jpg", 
                pinSize:20,
                detail:{
                    heroImageUrl:"https://c2.staticflickr.com/6/5747/30423926684_aaf21dba3b.jpg",
                    summary:"The Channel Islands are an archipelago of eight islands located in the Pacific Ocean off the coast of southern California along the Santa Barbara Channel in the United States of America. Five of the islands are part of Channel Islands National Park, and the waters surrounding these islands make up Channel Islands National Marine Sanctuary. The islands were first colonized by the Chumash and Tongva Native Americans 13,000 years ago, who were then displaced by European settlers who used the islands for fishing and agriculture. The U.S. military uses the islands as training grounds, weapons test sites, and as a strategic defensive location. The Channel Islands and the surrounding waters house a diverse ecosystem with many endemic species and subspecies.",
                    link:"https://www.flickr.com/photos/boredgamer85/30423926684/in/album-72157676980535256/",
                    tags:["Pacific Ocean"]
                }
            },
            {
                name: "Laguna Beach", 
                gps:[33.522985, -117.768589], 
                thumb:"LagunaBeach_thumb.JPG", 
                pinSize:20,
                detail:{
                    heroImageUrl:"https://c1.staticflickr.com/5/4768/28349355709_58f69827fe.jpg",
                    summary:"Laguna Beach is a small coastal city in Orange County, California. It’s known for its many art galleries, coves and beaches. Main Beach features tide pools and a boardwalk leading to the paths and gardens of nearby Heisler Park. Aliso Beach Park is a popular surf spot. The waters off Crystal Cove State Park are designated as an underwater park. Trails meander through coastal canyons in Laguna Coast Wilderness Park.",
                    link:"https://www.flickr.com/photos/boredgamer85/40130041181/in/photolist-GoFRpJ-Gr6ztV-2499WaT-EtYMZe-22LGywc-EtYNHD-22LGC7t-2499X8K-22LGD1c-Kc8Qit-EtYQ2a-Kc8RLZ-EtYQTk-21TYmz9/",
                    tags:["Beach", "Ocean"]
                }
            },
            {
                name: "John Muir Overlook", 
                gps:[37.157871, -122.183091], 
                thumb:"johnmuiroverlookca_thumb.jpg", 
                pinSize:20,
                detail:{
                    heroImageUrl:"https://c1.staticflickr.com/5/4607/25597952457_5271d51471.jpg",
                    summary:"Muir Beach Overlook is part of the Golden Gate National Recreation Area. People may visit this cliffside park when driving on State Route 1 north of San Francisco, California and south of Stinson Beach, California.",
                    link:"https://www.flickr.com/photos/boredgamer85/25597952457/in/album-72157663459543168/",
                    tags:["Beach", "Ocean"]
                }
            },
            {
                name: "Point Reyes", 
                gps:[38.071592, -122.884998], 
                thumb:"pointreyesca_thumb.jpg", 
                pinSize:20,
                detail:{
                    heroImageUrl:"https://c1.staticflickr.com/5/4659/25598642747_70894b4537.jpg",
                    summary:"Point Reyes National Seashore is a vast expanse of protected coastline in Northern California’s Marin County. Beaches here include Wildcat Beach, with the cliffside Alamere Falls. On a rocky headland, the 1870 Point Reyes Lighthouse is a viewpoint for migrating gray whales. The Phillip Burton Wilderness features extensive trails through grassland, firs and pine forest, and up to the peak of Mount Wittenberg.",
                    link:"https://www.flickr.com/photos/boredgamer85/25598642747/in/album-72157688187270200/",
                    tags:["Ocean", "Beach"]
                }
            },
            {
                name: "Point Loma", 
                gps:[33.116676, -117.256704], 
                thumb:"pointlomaca_thumb.jpg", 
                pinSize:20,
                detail:{
                    heroImageUrl:"https://c1.staticflickr.com/1/882/40746027935_bbf2743367.jpg",
                    summary:"Cabrillo National Monument is an extremely popular destination for tourists, and it is estimated that more than 215,000 people visit the tidepools annually. Compared to sandy beaches, the diversity of life in the rocky intertidal is impressive.",
                    link:"https://www.flickr.com/photos/boredgamer85/40746033065/in/album-72157663459543168/",
                    tags:["Ocean", "Beach", "National Monument"]
                }
            },
            {
                name: "Anza Borrego", 
                gps:[33.098073, -116.302063], 
                thumb:"Borrego Springs_thumb.JPG", 
                pinSize:20,
                detail:{
                    heroImageUrl:"https://c1.staticflickr.com/1/849/39825562180_27911c0261.jpg",
                    summary:"Anza-Borrego Desert State Park is a state park located within the Colorado Desert of southern California, United States.",
                    link:"https://www.flickr.com/photos/boredgamer85/39825562180/in/photolist-23Ffq8N",
                    tags:["State Park", "Desert"]
                }
            },
            {
                name: "Kings Canyon and Sequoia National Park", 
                gps:[36.065305, -118.646116], 
                thumb:"kingscanyon_ca_thumb.jpg", 
                pinSize:25,
                detail:{
                    heroImageUrl:"https://c1.staticflickr.com/1/829/41047735315_9fd6bf9cc5.jpg",
                    summary:"Kings Canyon National Park, located on the western slope of the Sierra Nevada to the east of the San Joaquin Valley. Kings Canyon National Park is a national park in the southern Sierra Nevada, in Fresno and Tulare Counties, California in the United States. Originally established in 1890 as General Grant National Park, it was greatly expanded and renamed to Kings Canyon National Park on March 4, 1940.",
                    link:"https://www.flickr.com/photos/boredgamer85/40139886310/in/album-72157694798740081/",
                    tags:["National Park"]
                }
            },
            {
                name: "Mount Shasta", 
                gps:[41.408423, -122.203980], 
                thumb:"mountshasta_ca_thumb.jpg", 
                pinSize:25,
                detail:{
                    heroImageUrl:"https://c1.staticflickr.com/5/4386/37185907241_8477cbdf13.jpg",
                    summary:"Mount Shasta is a potentially active volcano at the southern end of the Cascade Range in Siskiyou County, California. At an elevation of 14,179 feet, it is the second-highest peak in the Cascades and the fifth-highest in the state.",
                    link:"https://www.flickr.com/photos/boredgamer85/37328717925/in/album-72157689289343365/",
                    tags:["Mountain"]
                }
            }
        ], 
        gpsCoordinates: {topLeft: [41.998329, -124.328829], bottomRight: [32.756040, -114.534024]}, 
        geometry:{"type":"Polygon","coordinates":[[[-123.233256,42.006186],[-122.378853,42.011663],[-121.037003,41.995232],[-120.001861,41.995232],[-119.996384,40.264519],[-120.001861,38.999346],[-118.71478,38.101128],[-117.498899,37.21934],[-116.540435,36.501861],[-115.85034,35.970598],[-114.634459,35.00118],[-114.634459,34.87521],[-114.470151,34.710902],[-114.333228,34.448009],[-114.136058,34.305608],[-114.256551,34.174162],[-114.415382,34.108438],[-114.535874,33.933176],[-114.497536,33.697668],[-114.524921,33.54979],[-114.727567,33.40739],[-114.661844,33.034958],[-114.524921,33.029481],[-114.470151,32.843265],[-114.524921,32.755634],[-114.72209,32.717295],[-116.04751,32.624187],[-117.126467,32.536556],[-117.24696,32.668003],[-117.252437,32.876127],[-117.329114,33.122589],[-117.471515,33.297851],[-117.7837,33.538836],[-118.183517,33.763391],[-118.260194,33.703145],[-118.413548,33.741483],[-118.391641,33.840068],[-118.566903,34.042715],[-118.802411,33.998899],[-119.218659,34.146777],[-119.278905,34.26727],[-119.558229,34.415147],[-119.875891,34.40967],[-120.138784,34.475393],[-120.472878,34.448009],[-120.64814,34.579455],[-120.609801,34.858779],[-120.670048,34.902595],[-120.631709,35.099764],[-120.894602,35.247642],[-120.905556,35.450289],[-121.004141,35.461243],[-121.168449,35.636505],[-121.283465,35.674843],[-121.332757,35.784382],[-121.716143,36.195153],[-121.896882,36.315645],[-121.935221,36.638785],[-121.858544,36.6114],[-121.787344,36.803093],[-121.929744,36.978355],[-122.105006,36.956447],[-122.335038,37.115279],[-122.417192,37.241248],[-122.400761,37.361741],[-122.515777,37.520572],[-122.515777,37.783465],[-122.329561,37.783465],[-122.406238,38.15042],[-122.488392,38.112082],[-122.504823,37.931343],[-122.701993,37.893004],[-122.937501,38.029928],[-122.97584,38.265436],[-123.129194,38.451652],[-123.331841,38.566668],[-123.44138,38.698114],[-123.737134,38.95553],[-123.687842,39.032208],[-123.824765,39.366301],[-123.764519,39.552517],[-123.85215,39.831841],[-124.109566,40.105688],[-124.361506,40.259042],[-124.410798,40.439781],[-124.158859,40.877937],[-124.109566,41.025814],[-124.158859,41.14083],[-124.065751,41.442061],[-124.147905,41.715908],[-124.257444,41.781632],[-124.213628,42.000709],[-123.233256,42.006186]]]}
        },
    "OR": {
        theme:{startColor: "#409A40", stopColor: "#1E761E"},
        locations: [
            {
                name: "Smith Rock", 
                gps:[44.367617, -121.142169], 
                thumb:"smithrockor_thumb.jpg", 
                pinSize:20,
                detail:{
                    heroImageUrl:"https://c2.staticflickr.com/6/5523/31034594491_d1a3649b96.jpg",
                    summary: "Smith Rock State Park is an American state park located in central Oregon's High Desert near the communities of Redmond and Terrebonne. Its sheer cliffs of tuff and basalt are ideal for rock climbing of all difficulty levels.",
                    link: "https://www.flickr.com/photos/boredgamer85/35285282354/in/album-72157676792377346/",
                    tags: ['Climbing', "Hiking", "River"]
                }
            },
            {
                name: "Cannon Beach", 
                gps:[45.184325, -123.766963], 
                thumb:"cannonbeachor_thumb.png", 
                pinSize:25,
                detail:{
                    heroImageUrl:"https://c1.staticflickr.com/5/4655/38989826664_13bee7de75.jpg",
                    summary: "Cannon Beach is a small coastal city in northwest Oregon. It’s known for its long, sandy shore. Standing tall in the ocean, Haystack Rock is a seasonal haven for tufted puffins. On a headland to the north, trails in Ecola State Park offer sweeping views of the ocean, coves and a lighthouse. South is Arcadia Beach, with tide pools and a picnic area. Nearby Hug Point has sea caves.",
                    link: "https://www.flickr.com/photos/boredgamer85/38989826664/in/album-72157674432970526/",
                    tags: ["Beach", "Ocean"]
                }
            },
            {
                name: "Columbia River Gorge", 
                gps:[45.717059, -121.567153], 
                thumb:"columbiarivergorgeor_thumb.jpg", 
                pinSize:25,
                detail:{
                    heroImageUrl:"https://c1.staticflickr.com/5/4434/37421112781_ea767bfd5c.jpg",
                    summary: "The Columbia River Gorge is a canyon of the Columbia River in the Pacific Northwest of the United States.",
                    link: "https://www.flickr.com/photos/boredgamer85/37421112781/in/album-72157677582518314/",
                    tags: ["River"]
                }
            },
            {
                name: "Crater Lake", 
                gps:[42.941285, -122.107685], 
                thumb:"craterlake_thumb.jpg", 
                pinSize:25,
                detail:{
                    heroImageUrl:"https://c1.staticflickr.com/5/4343/36679509352_a0977ca708.jpg",
                    summary: "Crater Lake National Park is in the Cascade Mountains of southern Oregon. It’s known for its namesake Crater Lake, formed by the now-collapsed volcano, Mount Mazama. Wizard Island is a cinder cone near the western edge of the lake.",
                    link: "https://www.flickr.com/photos/boredgamer85/36850092415/in/album-72157668777226533/",
                    tags: ['National Park', "Volcano"]
                }
            },
            {
                name: "Painted Hills", 
                gps:[44.648677, -120.270208], 
                thumb:"paintedhillsor.jpg", 
                pinSize:20,
                detail:{
                    heroImageUrl:"https://c1.staticflickr.com/5/4357/36457797170_2e93f47599.jpg",
                    summary: "The Painted Hills are listed as one of the Seven Wonders of Oregon. Painted Hills is named after the colorful layers of its hills corresponding to various geological eras, formed when the area was an ancient river floodplain.",
                    link: "https://www.flickr.com/photos/boredgamer85/36714859581/in/album-72157688188789655/",
                    tags: ['Desert']
                }
            },
            {
                name: "Trillium Lake", 
                gps:[44.870463, -122.239089], 
                thumb:"Trillium Lake_thumb.jpg", 
                pinSize:20,
                detail:{
                    heroImageUrl:"https://c1.staticflickr.com/5/4497/38026850166_ba3e277cb7.jpg",
                    summary: "Trillium Lake is a lake situated 7.5 miles south-southwest of Mount Hood in the U.S. state of Oregon. It is formed by a dam at the headwaters of Mud Creek, tributary to the Salmon River.",
                    link: "https://www.flickr.com/photos/boredgamer85/24227173878/in/album-72157686826713622/",
                    tags: ['Lake', "Fishing"]
                }
            }
        ],
        gpsCoordinates: {topLeft: [46.261098, -124.159535], bottomRight: [42.000133, -117.026378]}, 
        "geometry":{"type":"Polygon","coordinates":[[[-123.211348,46.174138],[-123.11824,46.185092],[-122.904639,46.08103],[-122.811531,45.960537],[-122.762239,45.659305],[-122.247407,45.549767],[-121.809251,45.708598],[-121.535404,45.725029],[-121.217742,45.670259],[-121.18488,45.604536],[-120.637186,45.746937],[-120.505739,45.697644],[-120.209985,45.725029],[-119.963522,45.823614],[-119.525367,45.911245],[-119.125551,45.933153],[-118.988627,45.998876],[-116.918344,45.993399],[-116.78142,45.823614],[-116.545912,45.752413],[-116.463758,45.61549],[-116.671881,45.319735],[-116.732128,45.144473],[-116.847143,45.02398],[-116.830713,44.930872],[-116.934774,44.782995],[-117.038836,44.750133],[-117.241483,44.394132],[-117.170283,44.257209],[-116.97859,44.240778],[-116.896436,44.158624],[-117.027882,43.830007],[-117.027882,42.000709],[-118.698349,41.989755],[-120.001861,41.995232],[-121.037003,41.995232],[-122.378853,42.011663],[-123.233256,42.006186],[-124.213628,42.000709],[-124.356029,42.115725],[-124.432706,42.438865],[-124.416275,42.663419],[-124.553198,42.838681],[-124.454613,43.002989],[-124.383413,43.271359],[-124.235536,43.55616],[-124.169813,43.8081],[-124.060274,44.657025],[-124.076705,44.772041],[-123.97812,45.144473],[-123.939781,45.659305],[-123.994551,45.944106],[-123.945258,46.113892],[-123.545441,46.261769],[-123.370179,46.146753],[-123.211348,46.174138]]]}
    },
    "WA": {
        theme:{ startColor: "#1E761E", stopColor: "#116311"},
        locations: [
            {   
                name: "Hoh Rainforest", 
                gps:[47.660640, -123.936047], 
                thumb:"hohrainforest_thumb.jpg", 
                pinSize:20,
                detail: {
                    heroImageUrl:"https://c1.staticflickr.com/5/4246/34441475790_765f71164f.jpg",
                    summary: "The Hoh Rainforest is located on the Olympic Peninsula in western Washington state, USA. It is one of the largest temperate rainforests in the U.S.",
                    link: "https://www.flickr.com/photos/boredgamer85/34441382240/in/album-72157684117122795/",
                    tags: ['Forest']
                }
            },
            {
                name: "Mount Rainier", 
                gps:[47.252013, -121.761267], 
                thumb:"mountrainier_thumb.jpg", 
                pinSize:20,
                detail: {
                    heroImageUrl:"https://c1.staticflickr.com/5/4328/35952207345_df0acb84a5.jpg",
                    summary: "Mount Rainier is the highest mountain of the Cascade Range of the Pacific Northwest, and the highest mountain in the U.S. state of Washington.",
                    link: "https://www.flickr.com/photos/boredgamer85/35952207345/in/album-72157684117122795/",
                    tags: ['Mountain']
                }
            },
            {
                name: "Mount St. Helens", 
                gps:[46.491014, -122.196667], 
                thumb:"mountsthelens_thumb.jpg", 
                pinSize:20,
                detail: {
                    heroImageUrl:"https://c1.staticflickr.com/5/4077/35562792242_6646041072.jpg",
                    summary: "Mount St. Helens is an active stratovolcano located in Skamania County, Washington, in the Pacific Northwest region of the United States. It is 50 miles northeast of Portland, Oregon and 96 miles south of Seattle, Washington.",
                    link: "https://www.flickr.com/photos/boredgamer85/35731963055/in/album-72157684117122795/",
                    tags: ['Volcano']
                }
            },
        ],
        gpsCoordinates: {topLeft: [48.412801, -124.737233], bottomRight: [45.989810, -116.915796]}, 
        "geometry":{"type":"MultiPolygon","coordinates":[
            [[-117.033359,49.000239],[-117.044313,47.762451],[-117.038836,46.426077],[-117.055267,46.343923],[-116.92382,46.168661],[-116.918344,45.993399],[-118.988627,45.998876],[-119.125551,45.933153],[-119.525367,45.911245],[-119.963522,45.823614],[-120.209985,45.725029],[-120.505739,45.697644],[-120.637186,45.746937],[-121.18488,45.604536],[-121.217742,45.670259],[-121.535404,45.725029],[-121.809251,45.708598],[-122.247407,45.549767],[-122.762239,45.659305],[-122.811531,45.960537],[-122.904639,46.08103],[-123.11824,46.185092],[-123.211348,46.174138],[-123.370179,46.146753],[-123.545441,46.261769],[-123.72618,46.300108],[-123.874058,46.239861],[-124.065751,46.327492],[-124.027412,46.464416],[-123.895966,46.535616],[-124.098612,46.74374],[-124.235536,47.285957],[-124.31769,47.357157],[-124.427229,47.740543],[-124.624399,47.88842],[-124.706553,48.184175],[-124.597014,48.381345],[-124.394367,48.288237],[-123.983597,48.162267],[-123.704273,48.167744],[-123.424949,48.118452],[-123.162056,48.167744],[-123.036086,48.080113],[-122.800578,48.08559],[-122.636269,47.866512],[-122.515777,47.882943],[-122.493869,47.587189],[-122.422669,47.318818],[-122.324084,47.346203],[-122.422669,47.576235],[-122.395284,47.800789],[-122.230976,48.030821],[-122.362422,48.123929],[-122.373376,48.288237],[-122.471961,48.468976],[-122.422669,48.600422],[-122.488392,48.753777],[-122.647223,48.775685],[-122.795101,48.8907],[-122.756762,49.000239],[-117.033359,49.000239]],
            [[-122.718423,48.310145],[-122.586977,48.35396],[-122.608885,48.151313],[-122.767716,48.227991],[-122.718423,48.310145]],
            [[-123.025132,48.583992],[-122.915593,48.715438],[-122.767716,48.556607],[-122.811531,48.419683],[-123.041563,48.458022],[-123.025132,48.583992]]]
        }
    },
    "NV": {
        "geometry":{"type":"Polygon","coordinates":[[[-117.027882,42.000709],[-114.04295,41.995232],[-114.048427,37.000263],[-114.048427,36.195153],[-114.152489,36.025367],[-114.251074,36.01989],[-114.371566,36.140383],[-114.738521,36.102045],[-114.678275,35.516012],[-114.596121,35.324319],[-114.574213,35.138103],[-114.634459,35.00118],[-115.85034,35.970598],[-116.540435,36.501861],[-117.498899,37.21934],[-118.71478,38.101128],[-120.001861,38.999346],[-119.996384,40.264519],[-120.001861,41.995232],[-118.698349,41.989755],[-117.027882,42.000709]]]}
    },
    "UT": {
        "geometry":{"type":"Polygon","coordinates":[[[-112.164359,41.995232],[-111.047063,42.000709],[-111.047063,40.998429],[-109.04798,40.998429],[-109.053457,39.125316],[-109.058934,38.27639],[-109.042503,38.166851],[-109.042503,37.000263],[-110.499369,37.00574],[-114.048427,37.000263],[-114.04295,41.995232],[-112.164359,41.995232]]]}
    },
};

export default {
    usa: usa
};