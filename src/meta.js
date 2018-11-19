var usa = {
    "AZ": {
        theme:{startColor: "#D38C78", stopColor: "#AD6D5B"},
        locations: [
            {
                name: "Sedona", 
                gps:[34.658145, -111.800801], 
                thumb: "AZSedona.jpg", 
                pinSize: 30, 
                detail:{
                    summary: "Sedona is an Arizona desert town near Flagstaff that’s surrounded by red-rock buttes, steep canyon walls and pine forests. It’s noted for its mild climate and vibrant arts community. Uptown Sedona is dense with New Age shops, spas and art galleries. On the town’s outskirts, numerous trailheads access Red Rock State Park, which offers bird-watching, hiking and picnicking spots.",
                    link: "https://visitsedona.com/",
                    tags: ["arizona"]
                }
            },
            {
                name: "Grand Canyon", 
                gps:[36.063038, -112.440059], 
                thumb: "AZGrandCanyon.jpg", 
                pinSize: 30, 
                detail:{
                    summary: "Grand Canyon National Park, in Arizona, is home to much of the immense Grand Canyon, with its layered bands of red rock revealing millions of years of geological history. Viewpoints include Mather Point, Yavapai Observation Station and architect Mary Colter’s Lookout Studio and her Desert View Watchtower. Lipan Point, with wide views of the canyon and Colorado River, is a popular, especially at sunrise and sunset.",
                    link: "https://www.nps.gov/grca/index.htm",
                    tags: ["National Park", "Arizona"]
                }
            },
            {
                name: "Lost Dutchman State Park", 
                gps:[33.263674, -111.479400], 
                thumb: "AZDutchmanPark.jpg", 
                pinSize: 30, 
                detail:{
                    summary: "Lost Dutchman State Park is a 320-acre state park located near the Superstition Mountains in central Arizona, USA, and named after the Lost Dutchman's Gold Mine, a famous gold mine legendary among the tales of the Old West.",
                    link: "https://azstateparks.com/lost-dutchman/",
                    tags: ["Arizona", "State Park"]
                }
            },
            {
                name: "Lake Powell", 
                gps:[37.076457, -111.418290], 
                thumb: "Lake Powell HDR 1.jpg", 
                pinSize: 20, 
                detail:{
                    summary: "Lake Powell is a reservoir on the Colorado River, straddling the border between Utah and Arizona, United States. Most of Lake Powell, along with Rainbow Bridge National Monument, is located in Utah. It is a major vacation spot that around two million people visit every year.",
                    link: "https://www.lakepowell.com/",
                    tags: ["Arizona"]
                }
            }                    
        ],
        gpsCoordinates: {topLeft: [36.922588, -114.633976], bottomRight: [31.395219, -109.148862]}, 
        geometry:{"type":"Polygon","coordinates":[[[-109.042503,37.000263],[-109.04798,31.331629],[-111.074448,31.331629],[-112.246513,31.704061],[-114.815198,32.492741],[-114.72209,32.717295],[-114.524921,32.755634],[-114.470151,32.843265],[-114.524921,33.029481],[-114.661844,33.034958],[-114.727567,33.40739],[-114.524921,33.54979],[-114.497536,33.697668],[-114.535874,33.933176],[-114.415382,34.108438],[-114.256551,34.174162],[-114.136058,34.305608],[-114.333228,34.448009],[-114.470151,34.710902],[-114.634459,34.87521],[-114.634459,35.00118],[-114.574213,35.138103],[-114.596121,35.324319],[-114.678275,35.516012],[-114.738521,36.102045],[-114.371566,36.140383],[-114.251074,36.01989],[-114.152489,36.025367],[-114.048427,36.195153],[-114.048427,37.000263],[-110.499369,37.00574],[-109.042503,37.000263]]]}
    },
    "CA": {
        theme:{startColor: "#FFEE98", stopColor: "#D1C37C"},
        locations: [
            {
                name: "Lassen Volcanic National Park", 
                gps:[40.394730, -121.213204], 
                thumb: "CALassen.jpg", 
                pinSize: 25, 
                detail:{
                    summary: "Lassen Volcanic National Park is in northern California. It's rich in hydrothermal sites like Bumpass Hell, with its acres of bubbling mud pots. The summit of Lassen Peak Volcano offers views over the surrounding wilderness. Nearby, the Devastated Area is littered with lava rocks from its last eruption. A network of trails through forest and around several lakes connects with the Pacific Crest Trail in the north.",
                    link: "https://www.nps.gov/lavo/index.htm",
                    tags: ["National park", "Volcano"]
                }
            },
            {
                name: "Big Bear", 
                gps:[34.254532, -116.922436], 
                thumb: "CABigBear.jpg", 
                pinSize: 15, 
                detail:{
                    summary: "Big Bear Lake is a small city in Southern California. It sits on the banks of fish-filled Big Bear Lake. It’s known for Bear Mountain ski resort, with its terrain parks and learner slopes, and family-friendly Snow Summit ski resort. Boutiques, gift shops and restaurants line the streets of Big Bear Lake Village, the commercial area. Surrounding the city, the rugged San Bernardino National Forest has mountain trails.",
                    link: "https://www.bigbear.com/",
                    tags: ["Mountain"]
                }
            },
            {
                name: "Joshua Tree National Park", 
                gps:[33.8574045,-115.9158259], 
                thumb:"JoshuaTree.jpg", 
                pinSize:20,
                detail:{
                    summary:"Joshua Tree National Park is a vast protected area in southern California. It's characterized by rugged rock formations and stark desert landscapes. Named for the region’s twisted, bristled Joshua trees, the park straddles the cactus-dotted Colorado Desert and the Mojave Desert, which is higher and cooler. Keys View looks out over the Coachella Valley. Hiking trails weave through the boulders of Hidden Valley.",
                    link:"https://www.nps.gov/jotr/index.htm",
                    tags:["National Park"]
                }
            },
            {
                name: "Death Valley National Park", 
                gps: [36.419142, -116.812444], 
                thumb:"Zabriskie Point.jpg", 
                pinSize:20,
                detail:{
                    summary:"Death Valley National Park straddles eastern California and Nevada. It’s known for Titus Canyon, with a ghost town and colorful rocks, and Badwater Basin’s salt flats, North America's lowest point. Above, Telescope Peak Trail weaves past pine trees. North of the spiky salt mounds known as the Devil’s Golf Course, rattlesnakes live in Mesquite Flat Sand Dunes.",
                    link:"https://www.nps.gov/deva/index.htm",
                    tags:["Desert", "National Park"]
                }
            },
            {
                name: "Channel Islands", 
                gps:[33.984283, -119.763456], 
                thumb:"CAChannelIslands.jpg", 
                pinSize:30,
                detail:{
                    summary:"The Channel Islands are an archipelago of eight islands located in the Pacific Ocean off the coast of southern California along the Santa Barbara Channel in the United States of America. Five of the islands are part of Channel Islands National Park, and the waters surrounding these islands make up Channel Islands National Marine Sanctuary. The islands were first colonized by the Chumash and Tongva Native Americans 13,000 years ago, who were then displaced by European settlers who used the islands for fishing and agriculture. The U.S. military uses the islands as training grounds, weapons test sites, and as a strategic defensive location. The Channel Islands and the surrounding waters house a diverse ecosystem with many endemic species and subspecies.",
                    link:"https://www.nps.gov/chis/index.htm",
                    tags:["Pacific Ocean", "National Park"]
                }
            },
            {
                name: "John Muir Overlook", 
                gps:[37.157871, -122.183091], 
                thumb:"CAMuirOverlook.jpg", 
                pinSize:20,
                detail:{
                    summary:"Muir Beach Overlook is part of the Golden Gate National Recreation Area. People may visit this cliffside park when driving on State Route 1 north of San Francisco, California and south of Stinson Beach, California.",
                    link:"https://www.nps.gov/goga/planyourvisit/muirbeach.htm",
                    tags:["Beach", "Ocean"]
                }
            },
            {
                name: "Point Reyes", 
                gps:[38.071592, -122.884998], 
                thumb:"CAPointReyes.jpg", 
                pinSize:20,
                detail:{
                    summary:"Point Reyes National Seashore is a vast expanse of protected coastline in Northern California’s Marin County. Beaches here include Wildcat Beach, with the cliffside Alamere Falls. On a rocky headland, the 1870 Point Reyes Lighthouse is a viewpoint for migrating gray whales. The Phillip Burton Wilderness features extensive trails through grassland, firs and pine forest, and up to the peak of Mount Wittenberg.",
                    link:"https://www.nps.gov/pore/index.htm",
                    tags:["Ocean", "Beach"]
                }
            },
            {
                name: "Anza Borrego", 
                gps:[33.098073, -116.302063], 
                thumb:"CAAnza.jpg", 
                pinSize:20,
                detail:{
                    summary:"Anza-Borrego Desert State Park is a state park located within the Colorado Desert of southern California, United States.",
                    link:"http://www.parks.ca.gov/?page_id=638",
                    tags:["State Park", "Desert"]
                }
            },
            {
                name: "Sequoia National Park", 
                gps:[36.065305, -118.646116], 
                thumb:"CASequia.jpg", 
                pinSize:40,
                detail:{
                    summary:"Kings Canyon National Park, located on the western slope of the Sierra Nevada to the east of the San Joaquin Valley. Kings Canyon National Park is a national park in the southern Sierra Nevada, in Fresno and Tulare Counties, California in the United States. Originally established in 1890 as General Grant National Park, it was greatly expanded and renamed to Kings Canyon National Park on March 4, 1940.",
                    link:"https://www.nps.gov/seki/index.htm",
                    tags:["National Park"]
                }
            },
            {
                name: "Mount Shasta", 
                gps:[41.408423, -122.203980], 
                thumb:"CAShasta.jpg", 
                pinSize:25,
                detail:{
                    summary:"Mount Shasta is a potentially active volcano at the southern end of the Cascade Range in Siskiyou County, California. At an elevation of 14,179 feet, it is the second-highest peak in the Cascades and the fifth-highest in the state.",
                    link:"https://visitmtshasta.com/",
                    tags:["Mountain", "Volcano"]
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
                thumb:"ORSmithRock.jpg", 
                pinSize:20,
                detail:{
                    summary: "Smith Rock State Park is an American state park located in central Oregon's High Desert near the communities of Redmond and Terrebonne. Its sheer cliffs of tuff and basalt are ideal for rock climbing of all difficulty levels.",
                    link: "https://smithrock.com/",
                    tags: ['Climbing', "Hiking", "River"]
                }
            },
            {
                name: "Cannon Beach", 
                gps:[45.184325, -123.766963], 
                thumb:"ORCannonBeach.jpg", 
                pinSize:25,
                detail:{
                    summary: "Cannon Beach is a small coastal city in northwest Oregon. It’s known for its long, sandy shore. Standing tall in the ocean, Haystack Rock is a seasonal haven for tufted puffins. On a headland to the north, trails in Ecola State Park offer sweeping views of the ocean, coves and a lighthouse. South is Arcadia Beach, with tide pools and a picnic area. Nearby Hug Point has sea caves.",
                    link: "http://www.cannonbeach.org/",
                    tags: ["Beach", "Ocean"]
                }
            },
            {
                name: "Columbia River Gorge", 
                gps:[45.717059, -121.567153], 
                thumb:"ORWAGorge.jpg", 
                pinSize:25,
                detail:{
                    summary: "The Columbia River Gorge is a canyon of the Columbia River in the Pacific Northwest of the United States.",
                    link: "https://www.fs.usda.gov/crgnsa",
                    tags: ["River"]
                }
            },
            {
                name: "Crater Lake", 
                gps:[42.941285, -122.107685], 
                thumb:"ORCraterLake2.jpg", 
                pinSize:25,
                detail:{
                    summary: "Crater Lake National Park is in the Cascade Mountains of southern Oregon. It’s known for its namesake Crater Lake, formed by the now-collapsed volcano, Mount Mazama. Wizard Island is a cinder cone near the western edge of the lake.",
                    link: "https://www.nps.gov/crla/index.htm",
                    tags: ['National Park', "Volcano"]
                }
            },
            {
                name: "Painted Hills", 
                gps:[44.648677, -120.270208], 
                thumb:"ORPaintedHills1.jpg", 
                pinSize:20,
                detail:{
                    summary: "The Painted Hills are listed as one of the Seven Wonders of Oregon. Painted Hills is named after the colorful layers of its hills corresponding to various geological eras, formed when the area was an ancient river floodplain.",
                    link: "https://traveloregon.com/things-to-do/painted-hills/",
                    tags: ['Desert']
                }
            },
            {
                name: "Trillium Lake", 
                gps:[44.870463, -122.239089], 
                thumb:"ORTrilliumLake.jpg", 
                pinSize:20,
                detail:{
                    summary: "Trillium Lake is a lake situated 7.5 miles south-southwest of Mount Hood in the U.S. state of Oregon. It is formed by a dam at the headwaters of Mud Creek, tributary to the Salmon River.",
                    link: "https://en.wikipedia.org/wiki/Trillium_Lake",
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
                thumb:"WAHohRainforest2.jpg", 
                pinSize:20,
                detail: {
                    summary: "The Hoh Rainforest is located on the Olympic Peninsula in western Washington state, USA. It is one of the largest temperate rainforests in the U.S.",
                    link: "https://www.nps.gov/olym/planyourvisit/visiting-the-hoh.htm",
                    tags: ['Forest']
                }
            },
            {
                name: "Mount Rainier", 
                gps:[47.252013, -121.761267], 
                thumb:"WAMountRainier2.jpg", 
                pinSize:20,
                detail: {
                    summary: "Mount Rainier is the highest mountain of the Cascade Range of the Pacific Northwest, and the highest mountain in the U.S. state of Washington.",
                    link: "https://www.nps.gov/mora/index.htm",
                    tags: ['Mountain']
                }
            },
            {
                name: "Mount St. Helens", 
                gps:[46.491014, -122.196667], 
                thumb:"ORMountSaintHelens.jpg", 
                pinSize:20,
                detail: {
                    summary: "Mount St. Helens is an active stratovolcano located in Skamania County, Washington, in the Pacific Northwest region of the United States. It is 50 miles northeast of Portland, Oregon and 96 miles south of Seattle, Washington.",
                    link: "http://mountsthelens.com/",
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
        theme:{startColor: "#C18950", stopColor: "#935D25"},
        locations: [
            {
                name: "Red Rock Canyon", 
                gps:[36.145629, -115.855859], 
                thumb:"NVRedRock1.jpg", 
                pinSize:30,
                detail:{
                    summary:"Red Rock Canyon National Conservation Area lies in Nevada’s Mojave Desert. It’s known for geological features such as towering red sandstone peaks and the Keystone Thrust Fault, as well as Native American petroglyphs. Panoramic viewing spots dot the 13-mile Scenic Drive. The sheltered Ice Box Canyon has seasonal waterfalls. To the south, Spring Mountain Ranch State Park features historic buildings and hiking trails.",
                    link:"https://www.redrockcanyonlv.org/",
                    tags:[]
                }
            },
            {
                name: "Valley of Fire", 
                gps:[36.885178, -114.531397], 
                thumb:"NVValleyFire1.jpg", 
                pinSize:30,
                detail:{
                    summary:"Valley of Fire State Park is a public recreation and nature preservation area covering nearly 46,000 acres located 16 miles south of Overton, Nevada. The state park derives its name from red sandstone formations, the Aztec Sandstone, which formed from shifting sand dunes 150 million years ago.",
                    link:"http://parks.nv.gov/parks/valley-of-fire",
                    tags:[]
                }
            },
            {
                name: "Virgin River", 
                gps:[37.949005, -115.796528], 
                thumb:"AZUTVirginRiver.jpg", 
                pinSize:30,
                detail:{
                    summary:"The Virgin River is a tributary of the Colorado River in the U.S. states of Utah, Nevada, and Arizona. The river is about 162 miles (261 km) long.[2] It was designated Utah's first wild and scenic river in 2009, during the centennial celebration of Zion National Park.",
                    link:"https://en.wikipedia.org/wiki/Virgin_River",
                    tags:[]
                }
            }
        ],
        gpsCoordinates: {topLeft: [41.909763, -119.959334], bottomRight: [35.131818, -114.528898]}, 
        "geometry":{"type":"Polygon","coordinates":[[[-117.027882,42.000709],[-114.04295,41.995232],[-114.048427,37.000263],[-114.048427,36.195153],[-114.152489,36.025367],[-114.251074,36.01989],[-114.371566,36.140383],[-114.738521,36.102045],[-114.678275,35.516012],[-114.596121,35.324319],[-114.574213,35.138103],[-114.634459,35.00118],[-115.85034,35.970598],[-116.540435,36.501861],[-117.498899,37.21934],[-118.71478,38.101128],[-120.001861,38.999346],[-119.996384,40.264519],[-120.001861,41.995232],[-118.698349,41.989755],[-117.027882,42.000709]]]}
    },
    "UT": {
        theme:{startColor: "#C18950", stopColor: "#935D25"},
        locations: [
            {
                name: "Zion National Park", 
                gps:[39.316430, -112.915778], 
                thumb:"UTZion.jpg", 
                pinSize:30,
                detail:{
                    summary:"Zion National Park is a southwest Utah nature preserve distinguished by Zion Canyon’s steep red cliffs. Zion Canyon Scenic Drive cuts through its main section, leading to forest trails along the Virgin River. The river flows to the Emerald Pools, which have waterfalls and a hanging garden. Also along the river, partly through deep chasms, is Zion Narrows wading hike.",
                    link:"https://www.nps.gov/zion/index.htm",
                    tags:[]
                }
            },
            {
                name: "Snow Canyon", 
                gps:[37.201646, -113.645240], 
                thumb:"UTSnowCanoyon1.jpg", 
                pinSize:30,
                detail:{
                    summary:"Snow Canyon State Park is a state park of Utah, USA, featuring a canyon carved from the red and white Navajo sandstone in the Red Mountains. The park is located near Ivins, Utah and St. George in Washington County. Other geological features of the state park include extinct cinder cones, lava tubes, lava flows, and sand dunes.",
                    link:"https://stateparks.utah.gov/parks/snow-canyon/",
                    tags:[]
                }
            }
        ],
        gpsCoordinates: {topLeft: [41.984833, -114.029961], bottomRight: [37.017262, -109.096173]}, 
        "geometry":{"type":"Polygon","coordinates":[[[-112.164359,41.995232],[-111.047063,42.000709],[-111.047063,40.998429],[-109.04798,40.998429],[-109.053457,39.125316],[-109.058934,38.27639],[-109.042503,38.166851],[-109.042503,37.000263],[-110.499369,37.00574],[-114.048427,37.000263],[-114.04295,41.995232],[-112.164359,41.995232]]]}
    },
};

export default {
    usa: usa
};