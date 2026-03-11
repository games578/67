const games = [
  {
    id: "a-small-world-cup",
    title: "A Small World Cup",
    src: "https://mc0825.github.io/g16/class-680/",
    img: "https://jamestore214.github.io/img/class-680.png"
  },
  {
    id: "subway-surfers",
    title: "Subway Surfers",
    src: "https://jamestore214.github.io/g26/class-444/",
    img: "https://jamestore214.github.io/img/class-444.png"
  },
  {
    id: "murder",
    title: "Murder",
    src: "https://jamestore214.github.io/g72/class-580/",
    img: "https://jamestore214.github.io/img/class-580.png"
  },
  {
    id: "slope",
    title: "Slope",
    src: "https://jamestore214.github.io/g5/class-450",
    img: "https://jamestore214.github.io/img/class-450.png"
  },
  {
    id: "swat",
    title: "Swat",
    src: "https://mc0825.github.io/g97/class-792/",
    img: "https://jamestore214.github.io/img/class-792.png"
  },
  {
    id: "lol",
    title: "lol",
    src: "https://mc0825.github.io/g20/class-440/",
    img: "https://jamestore214.github.io/img/class-440.png"
  },
  {
    id: "snow-rider",
    title: "Snow Rider",
    src: "https://mc0825.github.io/g26/class-537/",
    img: "https://jamestore214.github.io/img/class-537.png"
  },
  {
    id: "shotz",
    title: "Shotz",
    src: "https://mc0825.github.io/g22/class-394/",
    img: "https://mc0825.github.io/img/class-394.png"
  },
  {
    id: "goalkeeper-challenge",
    title: "Goalkeeper Challenge",
    src: "https://mc0825.github.io/g68/class-1049/",
    img: "https://mc0825.github.io/img/class-1049.png"
  },
  {
    id: "stair-race",
    title: "Stair Race 3D",
    src: "https://mc0825.github.io/g2/class-619/",
    img: "https://mc0825.github.io/img/class-619.png"
  },
  {
    id: "among-us",
    title: "Among Us",
    src: "https://mc0825.github.io/g5/class-468/",
    img: "https://mc0825.github.io/img/class-468.png"
  },
  {
    id: "sausage-flip",
    title: "Sausage Flip",
    src: "https://mc0825.github.io/g2/class-415/",
    img: "https://mc0825.github.io/img/class-415.png"
  },
  {
    id: "fireboy-and-watergirl",
    title: "Fireboy and Watergirl",
    src: "https://mc0825.github.io/g177/class-346/",
    img: "https://mc0825.github.io/img/class-346.png"
  },
  {
    id: "fruit-ninja",
    title: "Fruit Ninja",
    src: "https://mc0825.github.io/g50/class-22/",
    img: "https://mc0825.github.io/img/class-22.png"
  },
  {
    id: "red-ball",
    title: "Red Ball 4",
    src: "https://mc0825.github.io/g22/class-491/",
    img: "https://mc0825.github.io/img/class-491.png"
  },
  {
    id: "gobble-top",
    title: "Gobble Top",
    src: "https://mc0825.github.io/g9/class-420/",
    img: "https://mc0825.github.io/img/class-420.png"
  },
  {
    id: "bitlife",
    title: "Bitlife",
    src: "https://mc0825.github.io/g5/class-441/",
    img: "https://mc0825.github.io/img/class-441.png"
  },
  {
    id: "traffic-rush",
    title: "Traffic Rush",
    src: "https://mc0825.github.io/g22/class-393/",
    img: "https://mc0825.github.io/img/class-393.png"
  },
  {
    id: "penalty-kick",
    title: "Penalty Kick",
    src: "https://mc0825.github.io/g5/class-519/",
    img: "https://mc0825.github.io/img/class-519.png"
  },
  {
    id: "blumi-soccer",
    title: "Blumgi Soccer",
    src: "https://mc0825.github.io/g68/class-1050/",
    img: "https://mc0825.github.io/img/class-1050.png"
  },
  {
    id: "stick-rush",
    title: "Stick Rush",
    src: "https://mc0825.github.io/g68/class-982/",
    img: "https://mc0825.github.io/img/class-982.png"
  },
  {
    id: "bumber-cars-soccer",
    title: "Bumper Cars Soccer",
    src: "https://mc0825.github.io/g16/class-665/",
    img: "https://mc0825.github.io/img/class-665.png"
  },
  {
    id: "elastic-man",
    title: "Elastic Man",
    src: "https://mc0825.github.io/g97/class-500/",
    img: "https://mc0825.github.io/img/class-500.png"
  },
  {
    id: "super-soccer",
    title: "Super Soccer",
    src: "https://mc0825.github.io/g69/class-628/",
    img: "https://mc0825.github.io/img/class-628.png"
  },
  {
    id: "idle-lumber",
    title: "Idle Lumber",
    src: "https://mc0825.github.io/g72/class-586/",
    img: "https://mc0825.github.io/img/class-586.png"
  },
  {
    id: "school-escape",
    title: "School Escape",
    src: "https://mc0825.github.io/g72/class-894/",
    img: "https://mc0825.github.io/img/class-894.png"
  },
  {
    id: "stunt-cars",
    title: "Madalin Stunt Cars",
    src: "https://mc0825.github.io/g5/class-566/",
    img: "https://mc0825.github.io/img/class-566.png"
  },
  {
    id: "parking-fury",
    title: "Parking Fury 3D",
    src: "https://mc0825.github.io/g3/class-725/",
    img: "https://mc0825.github.io/img/class-725.png"
  },
  {
    id: "monster-tracks",
    title: "Monster Tracks",
    src: "https://mc0825.github.io/g72/class-414/",
    img: "https://mc0825.github.io/img/class-414.png"
  },
  {
    id: "supercars-royale",
    title: "Supercars Royale",
    src: "https://mc0825.github.io/g66/class-976/",
    img: "https://mc0825.github.io/img/class-976.png"
  },
  {
    id: "ground-digger",
    title: "Ground Digger",
    src: "https://mc0825.github.io/g68/class-1067/",
    img: "https://mc0825.github.io/img/class-1067.png"
  },
  {
    id: "bike",
    title: "MotorBike",
    src: "https://mc0825.github.io/g68/class-1078/",
    img: "https://mc0825.github.io/img/class-1078.png"
  },
  {
    id: "viking",
    title: "Viking Village",
    src: "https://mc0825.github.io/g66/class-1005/",
    img: "https://mc0825.github.io/img/class-1005.png"
  },
  {
    id: "rocket",
    title: "Blumgi Rocket",
    src: "https://mc0825.github.io/g16/class-413/",
    img: "https://mc0825.github.io/img/class-413.png"
  },
  {
    id: "sniper",
    title: "Lethal Sniper 3D",
    src: "https://mc0825.github.io/g74/class-257/",
    img: "https://mc0825.github.io/img/class-257.png"
  },
  {
    id: "alien",
    title: "Aliens Nest",
    src: "https://mc0825.github.io/g74/class-275/",
    img: "https://mc0825.github.io/img/class-275.png"
  },
  {
    id: "johny-shooter",
    title: "Johnny Trigger Action Shooter",
    src: "https://mc0825.github.io/g66/class-953/",
    img: "https://mc0825.github.io/img/class-953.png"
  },
  {
    id: "soccer-random",
    title: "Soccer Random",
    src: "https://mc0825.github.io/g26/class-511/",
    img: "https://mc0825.github.io/img/class-511.png"
  },
  {
    id: "idle-ants",
    title: "Idle Ants",
    src: "https://mc0825.github.io/g72/class-631/",
    img: "https://mc0825.github.io/img/class-631.png"
  }
];
