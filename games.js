const games = [
  {
    id: "cow-bay",
    title: "Cow Bay",
    src: "https://jamestore214.github.io/g3/class-309",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/cowbay.png",
    tags: ["idle", "fun"]
  },
  {
    id: "temple-run-2",
    title: "Temple Run 2",
    src: "https://jamestore214.github.io/g26/class-405/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/templerun2.jpeg",
    tags: ["platformer", "fun", "popular"]
  },
  {
    id: "bee-swarm-simulator",
    title: "Bee Swarm Simulator",
    src: "https://dddatt.github.io/bss/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/beeswarm.webp",
    tags: ["idle", "fun"]
  },
  {
    id: "soccer-skills-world-cup",
    title: "Soccer Skills World Cup",
    src: "https://jamestore214.github.io/g2/class-423/#topvaz",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/Soccerworld.jpeg",
    tags: ["skill", "soccer", "fun"]
  },
  {
    id: "online-pvp",
    title: "Online PVP",
    src: "https://kittengames.github.io/mogus/Shootur.html",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/shootergame.png",
    tags: ["multiplayer", "fun"]
  },
  {
    id: "eaglercraft",
    title: "Eaglercraft",
    src: "https://irv77.github.io/AmplerLauncher/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/eaglercraft.jpeg",
    tags: ["skill", "popular", "best"]
  },
  {
    id: "super-star-car",
    title: "Super Star Car",
    src: "https://labgstore311.github.io/g69/class-630/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/supstar.jpeg",
    tags: ["racing", "cars", "fun"]
  },
  {
    id: "stick-fighter",
    title: "Stick Fighter",
    src: "https://labgstore311.github.io/g2/class-629/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/Stickfight.jpeg",
    tags: ["battle", "fun"]
  },
  {
    id: "gobdun",
    title: "Gobdun",
    src: "https://labgstore311.github.io/g50/class-21/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/gobdum.jpeg",
    tags: ["battle", "fun"]
  },
  {
    id: "riddle-transfer-2",
    title: "Riddle Transfer 2",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://files.catbox.moe/c89h5i.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/trans2.jpeg",
    tags: ["puzzle", "fun"]
  },
  {
    id: "riddle-transfer-1",
    title: "Riddle Transfer 1",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://files.catbox.moe/s46796.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/trans1.jpeg",
    tags: ["puzzle", "fun"]
  },
  {
    id: "chicken-merge",
    title: "Chicken Merge",
    src: "https://labgstore311.github.io/g9/class-641/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/Chicken-merge.jpeg",
    tags: ["idle", "fun"]
  },
  {
    id: "zoom-be",
    title: "ZOOM-BE",
    src: "https://labgstore311.github.io/g3/class-316",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/zoombi-ezgif.com-avif-to-png-converter.png",
    tags: ["multiplayer", "fun"]
  },
  {
    id: "appel",
    title: "Appel",
    src: "https://kittengames.github.io/mogus/Appul_.html",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/appel.jpeg",
    tags: ["platformer", "fun"]
  },
  {
    id: "angry-birds-space",
    title: "Angry Birds Space",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://files.catbox.moe/eybma7.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/angryspace.jpeg",
    tags: ["puzzle", "fun", "popular"]
  },
  {
    id: "penalty-shooter-2",
    title: "Penalty Shooter 2",
    src: "https://labgstore311.github.io/g2/class-627",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/penalshoot.jpeg",
    tags: ["skill", "soccer", "fun"]
  },
  {
    id: "rally-racer-dirt",
    title: "Rally Racer Dirt",
    src: "https://trafficjam3d.github.io/rally-racer-dirt/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/Rallyracerdirt.jpeg",
    tags: ["racing", "fun"]
  },
  {
    id: "angry-birds-halloween",
    title: "Angry Birds Halloween",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://files.catbox.moe/sddisy.swf&aspect=16:9",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/angrybridshallo.jpeg",
    tags: ["puzzle", "fun"]
  },
  {
    id: "riddle-school-5",
    title: "Riddle School 5",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://files.catbox.moe/rvxug0.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/riddle5.jpg",
    tags: ["puzzle", "fun"]
  },
  {
    id: "riddle-school-4",
    title: "Riddle School 4",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://files.catbox.moe/kd6q4g.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/riddle4.jpeg",
    tags: ["puzzle", "fun"]
  },
  {
    id: "riddle-school-3",
    title: "Riddle School 3",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://files.catbox.moe/pjl34p.swf&aspect=13:9",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/riddle3.jpeg",
    tags: ["puzzle", "fun"]
  },
  {
    id: "riddle-school-2",
    title: "Riddle School 2",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://files.catbox.moe/4g1htn.swf&aspect=31:18",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/riddle2.png",
    tags: ["puzzle", "fun"]
  },
  {
    id: "angry-birds",
    title: "Angry Birds",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://files.catbox.moe/krop63.swf&aspect=16:9",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/angryvogels.jpg",
    tags: ["puzzle", "fun", "popular"]
  },
  {
    id: "riddle-school",
    title: "Riddle School",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://files.catbox.moe/j4sx7b.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/riddle1.jpeg",
    tags: ["puzzle", "fun"]
  },
  {
    id: "big-tall-small",
    title: "Big Tall Small",
    src: "https://abinbins.github.io/a8/big-tall-small/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/bigtallsmall.jpeg",
    tags: ["puzzle", "fun"]
  },
  {
    id: "pong",
    title: "Pong",
    src: "https://sethclydesdale.github.io/browser-pong/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/pong.png",
    tags: ["retro", "multiplayer", "fun"]
  },
  {
    id: "pokemon-emerald",
    title: "Pokemon - Emerald",
    src: "https://kittengames.github.io/mogus/poke.html",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/pokemon.webp",
    tags: ["retro", "fun", "popular", "best"]
  },
  {
    id: "the-password-game",
    title: "The Password Game",
    src: "https://kittengames.github.io/mogus/pass.html",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/pass.png",
    tags: ["puzzle", "fun"]
  },
  {
    id: "little-alchemy-2",
    title: "Little Alchemy 2",
    src: "https://only-games.github.io/projects/little-alchemy/index.html",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/little.jpeg",
    tags: ["puzzle", "fun", "popular"]
  },
  {
    id: "the-final-earth-2",
    title: "The Final Earth 2",
    src: "https://us.surajpyakurel.com.np/gf/thefinalearth2.html",
    img: "https://cdn.statically.io/gh/SuperPepino/gameicons/refs/heads/main/icons/download%20(30).jpeg",
    tags: ["puzzle", "fun"]
  },
  {
    id: "run-3",
    title: "Run 3",
    src: "https://lekug.github.io/tn6pS9dCf37xAhkJv/",
    img: "https://cdn.statically.io/gh/SuperPepino/gameicons/refs/heads/main/icons/download%20(29).jpeg",
    tags: ["platformer", "fun", "popular"]
  },
  {
    id: "backrooms",
    title: "Backrooms",
    src: "https://us.surajpyakurel.com.np/gf/backrooms/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/8473434d1b812442a33272611c659990750fdad0/images/download%20(28).jpeg",
    tags: ["puzzle", "adventure", "fun"]
  },
  {
    id: "poor-bunny",
    title: "Poor Bunny",
    src: "https://poorbunny.gitlab.io/file/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/ripbunny.png",
    tags: ["idle", "fun"]
  },
  {
    id: "bad-time-simulator",
    title: "Bad Time Simulator",
    src: "https://doodle-pile.gitlab.io/endless-sans/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/badtim.jpeg",
    tags: ["idle", "fun"]
  },
  {
    id: "among-us",
    title: "Among Us",
    src: "https://kittengames.github.io/mogus/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/mogus.jpg",
    tags: ["multiplayer", "fun", "popular", "best"]
  },
  {
    id: "papas-pizzeria",
    title: "Papa's Pizzeria",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/papaspizzeria_v2.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/daddypiz.jpeg",
    tags: ["idle", "fun", "popular"]
  },
  {
    id: "achtung-die-kurve",
    title: "Achtung Die Kurve",
    src: "https://achtung.life/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/achtung.jpeg",
    tags: ["multiplayer", "fun"]
  },
  {
    id: "hole-io",
    title: "Hole.io",
    src: "https://us.surajpyakurel.com.np/gf/holeio.html",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/holeo.jpeg",
    tags: ["skill", "fun", "popular"]
  },
  {
    id: "bloons-td-4",
    title: "Bloons TD 4",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/bloons-td4-expansion.swf",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPJtEH7-ixI7kF48chSfN1uQSaTVv1MEl2eQ&s",
    tags: ["skill", "fun", "popular"]
  },
  {
    id: "idle-miner",
    title: "Idle Miner",
    src: "https://mountain-game-games.github.io/zidleminer.html",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/idelminer.jpeg",
    tags: ["idle", "fun"]
  },
  {
    id: "masked-forces",
    title: "Masked Forces",
    src: "https://labgstore311.github.io/g26/class-525",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/maskedforces.jpeg",
    tags: ["shooter", "fun"]
  },
  {
    id: "superhero-io",
    title: "SuperHero.io",
    src: "https://slope-game.github.io/superheroio/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/supaero.jpeg",
    tags: ["skill", "fun"]
  },
  {
    id: "shady-bears",
    title: "Shady Bears",
    src: "https://shadybears.gitlab.io/file/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/623fc333ec7c123ac6ec5e130ded5c05-ezgif.com-avif-to-png-converter.png",
    tags: ["skill", "fun"]
  },
  {
    id: "snow-rider-3d",
    title: "Snow Rider 3D",
    src: "https://snowrider97.github.io/file/",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhsp_VjgVsbkQXQDeqc3O0jjRHP_b37hV7cw&s",
    tags: ["skill", "racing", "fun"]
  },
  {
    id: "lingo",
    title: "Lingo",
    src: "https://www.lingospelen.nl/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/lingo.jpeg",
    tags: ["skill", "puzzle", "fun"]
  },
  {
    id: "banana-poker",
    title: "Banana Poker",
    src: "https://www.culinaryschools.org/kids-games/banana-poker/game.php",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/bana.jpeg",
    tags: ["skill", "fun"]
  },
  {
    id: "binding-of-isaac",
    title: "Binding of Isaac: Wrath of the Lamb",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/bindisaac.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/iss.png",
    tags: ["idle", "fun", "popular"]
  },
  {
    id: "polytrack",
    title: "Polytrack",
    src: "https://shookcheeto.shokodeal.ru/gf/polytrack.html",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/polytrack.jpg",
    tags: ["racing", "fun"]
  },
  {
    id: "bomb-word-filler",
    title: "Bomb Word Filler",
    src: "https://bombparty-clone.fly.dev/",
    img: "https://cdn.pixabay.com/photo/2017/01/31/16/59/bomb-2025548_1280.png",
    tags: ["skill", "puzzle", "fun"]
  },
  {
    id: "age-of-war",
    title: "Age of War",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/agewar.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/agewar.jpeg",
    tags: ["idle", "fun", "popular"]
  },
  {
    id: "age-of-war-2",
    title: "Age of War 2",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/agewar2.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/agewar2.webp",
    tags: ["idle", "fun"]
  },
  {
    id: "earthwalker",
    title: "Earthwalker",
    src: "https://earthwalker.codingkitten.hackclub.app",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjaCnSCafh1oPQMXSuZQ0adV5q7KA5lqJ-Q&s",
    tags: ["skill", "fun"]
  },
  {
    id: "wikipedia-speedruns",
    title: "Wikipedia Speedruns",
    src: "https://wikispeedruns.com/",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/06/Wikipedia-logo_ka.png",
    tags: ["skill", "fun"]
  },
  {
    id: "gobble",
    title: "Gobble",
    src: "https://math181124.github.io/g9/class-420",
    img: "https://math181124.github.io/img/class-420.png",
    tags: ["skill", "fun"]
  },
  {
    id: "stick-defenders",
    title: "Stick Defenders",
    src: "https://math181124.github.io/g2/class-416",
    img: "https://math181124.github.io/img/class-416.png",
    tags: ["shooter", "survival"]
  },
  {
    id: "level-devil",
    title: "Level Devil",
    src: "https://math181124.github.io/g22/class-356",
    img: "https://math181124.github.io/img/class-356.png",
    tags: ["platformer", "fun", "popular"]
  },
  {
    id: "super-speeder",
    title: "Super Speeder",
    src: "https://math181124.github.io/g7/class-82",
    img: "https://math181124.github.io/img/class-82.png",
    tags: ["skill", "fun"]
  },
  {
    id: "swingo",
    title: "Swingo",
    src: "https://math181124.github.io/g69/class-636",
    img: "https://math181124.github.io/img/class-636.png",
    tags: ["platformer", "fun"]
  },
  {
    id: "blumgi-castle",
    title: "Blumgi Castle",
    src: "https://math181124.github.io/g16/class-427",
    img: "https://math181124.github.io/img/class-427.png",
    tags: ["battle", "fun"]
  },
  {
    id: "stickman-ragdoll-fight",
    title: "Stickman Ragdoll Fight",
    src: "https://math181124.github.io/g177/class-281",
    img: "https://math181124.github.io/img/class-281.png",
    tags: ["battle", "fun"]
  },
  {
    id: "stickman-run",
    title: "Stickman Run",
    src: "https://math181124.github.io/g7/class-74",
    img: "https://math181124.github.io/img/class-74.png",
    tags: ["platformer", "fun"]
  },
  {
    id: "mimelet",
    title: "Mimelet",
    src: "https://math181124.github.io/g8/class-140",
    img: "https://math181124.github.io/img/class-140.png",
    tags: ["platformer", "fun"]
  },
  {
    id: "stickman-parkour-3",
    title: "Stickman Parkour 3",
    src: "https://math181124.github.io/g7/class-75",
    img: "https://math181124.github.io/img/class-75.png",
    tags: ["platformer", "fun"]
  },
  {
    id: "blumgi-dragon",
    title: "Blumgi Dragon",
    src: "https://math181124.github.io/g22/class-363",
    img: "https://math181124.github.io/img/class-363.png",
    tags: ["skill", "fun"]
  },
  {
    id: "1v1-lol",
    title: "1v1 LOL",
    src: "https://math181124.github.io/g77-3/class-439",
    img: "https://math181124.github.io/img/class-439.png",
    tags: ["skill", "multiplayer", "3d", "fun", "popular"]
  },
  {
    id: "tiger-simulator-3d",
    title: "Tiger Simulator 3D",
    src: "https://math181124.github.io/g69/class-587",
    img: "https://math181124.github.io/img/class-587.png",
    tags: ["platformer", "3d", "fun"]
  },
  {
    id: "champions-league",
    title: "Champions League",
    src: "https://math181124.github.io/g2/class-588",
    img: "https://math181124.github.io/img/class-588.png",
    tags: ["skill", "soccer", "fun"]
  },
  {
    id: "dreadhead-parkour",
    title: "DreadHead Parkour",
    src: "https://math181124.github.io/g97/class-412",
    img: "https://math181124.github.io/img/class-412.png",
    tags: ["platformer", "adventure", "fun"]
  },
  {
    id: "golfinity",
    title: "Golfinity",
    src: "https://math181124.github.io/g9/class-777",
    img: "https://math181124.github.io/img/class-777.png",
    tags: ["skill", "fun"]
  },
  {
    id: "rocket-league",
    title: "Rocket League",
    src: "https://math181124.github.io/g2/class-527",
    img: "https://math181124.github.io/img/class-527.png",
    tags: ["racing", "fun", "popular", "best"]
  },
  {
    id: "fruit-ninja",
    title: "Fruit Ninja",
    src: "https://math181124.github.io/g50/class-22",
    img: "https://math181124.github.io/img/class-22.png",
    tags: ["skill", "fun", "popular"]
  },
  {
    id: "g-switch-4",
    title: "G-Switch 4",
    src: "https://math181124.github.io/g22/class-366",
    img: "https://math181124.github.io/img/class-366.png",
    tags: ["skill", "fun"]
  },
  {
    id: "yohoho-io",
    title: "YoHoHo.io",
    src: "https://math181124.github.io/g77/class-828",
    img: "https://math181124.github.io/img/class-828.png",
    tags: ["skill", "multiplayer", "fun"]
  },
  {
    id: "master-chess",
    title: "Master Chess",
    src: "https://math181124.github.io/g97/class-506",
    img: "https://math181124.github.io/img/class-506.png",
    tags: ["skill", "puzzle", "fun"]
  },
  {
    id: "bob-the-robber-4",
    title: "Bob The Robber 4",
    src: "https://math181124.github.io/g97/class-568",
    img: "https://math181124.github.io/img/class-568.png",
    tags: ["platformer", "fun"]
  },
  {
    id: "decent",
    title: "Decent",
    src: "https://math181124.github.io/g22/class-377",
    img: "https://math181124.github.io/img/class-377.png",
    tags: ["platformer", "fun"]
  },
  {
    id: "dadish",
    title: "Dadish",
    src: "https://math181124.github.io/g7/class-86",
    img: "https://math181124.github.io/img/class-86.png",
    tags: ["platformer", "fun"]
  },
  {
    id: "gunspin",
    title: "Gunspin",
    src: "https://labgstore311.github.io/g5/class-533",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/hunspan.jpeg",
    tags: ["shooter", "fun"]
  },
  {
    id: "stickman-minesweeper-2",
    title: "Stickman MineSweeper 2",
    src: "https://math181124.github.io/g2/class-426",
    img: "https://math181124.github.io/img/class-426.png",
    tags: ["platformer", "puzzle", "fun"]
  },
  {
    id: "europe-cup",
    title: "Europe Cup",
    src: "https://math181124.github.io/g2/class-429",
    img: "https://math181124.github.io/img/class-429.png",
    tags: ["skill", "soccer", "fun"]
  },
  {
    id: "parkour-race",
    title: "Parkour Race",
    src: "https://tataedu23.github.io/g77/class-830",
    img: "https://tataedu23.github.io/img/class-830.png",
    tags: ["platformer", "fun"]
  },
  {
    id: "stickman-hook",
    title: "Stickman Hook",
    src: "https://stickmanhook.gitlab.io/file/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/stickman.jpeg",
    tags: ["platformer", "fun", "popular"]
  },
  {
    id: "crossy-road-space",
    title: "Crossy Road Space",
    src: "https://lnahtml.github.io/a/crossy-road/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/crossyroad.jpeg",
    tags: ["platformer", "fun"]
  },
  {
    id: "boxing-random",
    title: "Boxing Random",
    src: "https://labgstore311.github.io/g20/class-825",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/Boxrandom.jpeg",
    tags: ["skill", "multiplayer", "fun"]
  },
  {
    id: "basket-random",
    title: "Basket Random",
    src: "https://labgstore311.github.io/g26/class-436",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/basketrandom.png",
    tags: ["skill", "multiplayer", "fun", "popular"]
  },
  {
    id: "volley-random",
    title: "Volley Random",
    src: "https://labgstore311.github.io/g/class-811",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/volleyrand.jpeg",
    tags: ["skill", "multiplayer", "fun"]
  },
  {
    id: "mini-battles",
    title: "Mini Battles",
    src: "https://math181124.github.io/g72/class-649",
    img: "https://math181124.github.io/img/class-649.png",
    tags: ["skill", "multiplayer", "fun"]
  },
  {
    id: "blumgi-ball",
    title: "Blumgi Ball",
    src: "https://labgstore311.github.io/g16/class-419/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/blumgiball.jpeg",
    tags: ["skill", "fun"]
  },
  {
    id: "blumgi-slime",
    title: "Blumgi Slime",
    src: "https://math181124.github.io/g16/class-421",
    img: "https://math181124.github.io/img/class-421.png",
    tags: ["skill", "fun"]
  },
  {
    id: "blumgi-bloom",
    title: "Blumgi Bloom",
    src: "https://math181124.github.io/g4/class-183",
    img: "https://math181124.github.io/img/class-183.png",
    tags: ["skill", "fun"]
  },
  {
    id: "blumgi-rocket",
    title: "Blumgi Rocket",
    src: "https://majesticwafer.github.io/BlumgiRocket/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/blumgirocket.jpeg",
    tags: ["racing", "fun"]
  },
  {
    id: "recoil",
    title: "Recoil",
    src: "https://labgstore311.github.io/g2/class-772",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/recoi.jpeg",
    tags: ["puzzle", "fun"]
  },
  {
    id: "fireboy-watergirl-2",
    title: "Fire Boy and Water Girl 2",
    src: "https://math181124.github.io/g177/class-345",
    img: "https://math181124.github.io/img/class-345.png",
    tags: ["multiplayer", "puzzle", "fun"]
  },
  {
    id: "fireboy-watergirl-3",
    title: "Fire Boy and Water Girl 3",
    src: "https://math181124.github.io/g177/class-344",
    img: "https://math181124.github.io/img/class-344.png",
    tags: ["multiplayer", "puzzle", "fun"]
  },
  {
    id: "fireboy-watergirl-4",
    title: "Fire Boy and Water Girl 4",
    src: "https://math181124.github.io/g177/class-343",
    img: "https://math181124.github.io/img/class-343.png",
    tags: ["multiplayer", "puzzle", "fun"]
  },
  {
    id: "fireboy-watergirl-5",
    title: "Fire Boy and Water Girl 5",
    src: "https://math181124.github.io/g177/class-342",
    img: "https://math181124.github.io/img/class-342.png",
    tags: ["multiplayer", "puzzle", "fun"]
  },
  {
    id: "fireboy-watergirl-6",
    title: "Fire Boy and Water Girl 6",
    src: "https://math181124.github.io/g177/class-341",
    img: "https://math181124.github.io/img/class-341.png",
    tags: ["multiplayer", "puzzle", "fun"]
  },
  {
    id: "slope-2",
    title: "Slope 2",
    src: "https://labgstore311.github.io/g97/class-800/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/slop2.jpeg",
    tags: ["skill", "fun"]
  },
  {
    id: "choppy-orc",
    title: "Choppy Orc",
    src: "https://ucbg.github.io/choppy-orc/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/orc.jpeg",
    tags: ["skill", "fun"]
  },
  {
    id: "pepernoten-pong",
    title: "Pepernoten Pong",
    src: "https://cdn-sinterklaasjournaal.ntr.nl/assets/games/2023/pietengames-2016/pong.html",
    img: "https://api.sinterklaasjournaal.nl/thumbs/i/0/mod_media_image/72.w640.r640-360.75ed908.png",
    tags: ["skill", "fun"]
  },
  {
    id: "pietensprong",
    title: "PietenSprong",
    src: "https://cdn-sinterklaasjournaal.ntr.nl/assets/games/2023/pietengames-2018/pietenjump.html",
    img: "https://api.sinterklaasjournaal.nl/thumbs/i/0/mod_media_image/294.w640.r640-360.683956a.png",
    tags: ["skill", "fun"]
  },
  {
    id: "pepernotensjoelen",
    title: "Pepernotensjoelen",
    src: "https://cdn-sinterklaasjournaal.ntr.nl/assets/games/2024/pietengames-2019/sjoelen.html",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/Sjoelen.png",
    tags: ["skill", "fun"]
  },
  {
    id: "rhomb",
    title: "Rhomb",
    src: "https://class1811.github.io/g4/class-187",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/rhomb.png",
    tags: ["puzzle", "fun"]
  },
  {
    id: "cubinko",
    title: "Cubinko",
    src: "https://class1811.github.io/g6/class-161",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/cubinko.png",
    tags: ["puzzle", "fun"]
  },
  {
    id: "trap-the-cat",
    title: "Trap the Cat",
    src: "https://class1811.github.io/g26/class-494",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/trap.jpeg",
    tags: ["puzzle", "fun"]
  },
  {
    id: "zombie-outbreak",
    title: "Zombie Outbreak",
    src: "https://class1811.github.io/g74/class-237",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/outbreak.png",
    tags: ["shooter", "survival", "fun"]
  },
  {
    id: "ovo-dimensions",
    title: "OVO Dimensions",
    src: "https://class1811.github.io/g50/class-14",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/class-14.png",
    tags: ["platformer", "fun"]
  },
  {
    id: "dyna-boy",
    title: "Dyna Boy",
    src: "https://ghgstore311.github.io/g74/class-262",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/dynaboy.png",
    tags: ["platformer", "fun"]
  },
  {
    id: "growmi",
    title: "GROWMI",
    src: "https://labgstore311.github.io/g4/class-182",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/growmi.png",
    tags: ["puzzle", "fun"]
  },
  {
    id: "shootz",
    title: "Shootz",
    src: "https://ghgstore311.github.io/g22/class-394",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/shootz.png",
    tags: ["shooter", "fun"]
  },
  {
    id: "stacktris",
    title: "Stacktris",
    src: "https://ghgstore311.github.io/g2/class-417/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/stacktris.png",
    tags: ["skill", "puzzle", "fun"]
  },
  {
    id: "tag-2",
    title: "Tag 2",
    src: "https://ghgstore311.github.io/g22/class-364",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/tag2.png",
    tags: ["skill", "multiplayer", "fun"]
  },
  {
    id: "gladihoppers",
    title: "Gladihoppers",
    src: "https://hypackelgames.firebaseapp.com/files/gladihoppers/game.html",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/gladihopper.png",
    tags: ["battle", "multiplayer", "fun"]
  },
  {
    id: "yarn",
    title: "Yarn",
    src: "https://codingkitten-yt.github.io/Pico-8Embedder/?url=https://raw.githubusercontent.com/CodingKitten-YT/Pico-8Embedder/refs/heads/main/carts/yarn-0.p8.png",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/yarn.jpeg",
    tags: ["platformer", "fun"]
  },
  {
    id: "picohot",
    title: "Picohot",
    src: "https://codingkitten-yt.github.io/Pico-8Embedder/?url=https://raw.githubusercontent.com/CodingKitten-YT/Pico-8Embedder/refs/heads/main/carts/picohot-0.p8.png",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/picohot.png",
    tags: ["shooter", "fun"]
  },
  {
    id: "cell-machine",
    title: "Cell Machine",
    src: "https://lite.3kh0.net/projects/cell-machine/",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/cellmachine.png",
    tags: ["puzzle", "fun"]
  },
  {
    id: "draw-the-hill",
    title: "Draw The Hill",
    src: "https://lite.3kh0.net/projects/draw-the-hill/",
    img: "https://lite.3kh0.net/projects/draw-the-hill/icons/icon-512.png",
    tags: ["skill", "fun"]
  },
  {
    id: "hextris",
    title: "Hextris",
    src: "https://lite.3kh0.net/projects/hextris/",
    img: "https://lite.3kh0.net/projects/hextris/images/hextris-logo.png",
    tags: ["skill", "puzzle", "fun"]
  },
  {
    id: "impossible-quiz",
    title: "Impossible Quiz",
    src: "https://lite.3kh0.net/projects/impossiblequiz/",
    img: "https://lite.3kh0.net/projects/impossiblequiz/impossiblequiz.png",
    tags: ["other", "fun"]
  },
  {
    id: "kitten-cannon",
    title: "Kitten Cannon",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/kittencannon.swf",
    img: "https://lite.3kh0.net/projects/kittencannon/kittencannon.png",
    tags: ["other", "fun"]
  },
  {
    id: "wolfenstein-3d",
    title: "Wolfenstein 3D",
    src: "https://lite.3kh0.net/projects/wolf3d/",
    img: "https://lite.3kh0.net/projects/wolf3d/art/wolf3d.png",
    tags: ["shooter", "retro", "3d"]
  },
  {
    id: "wordle",
    title: "Wordle",
    src: "https://lite.3kh0.net/projects/wordle/",
    img: "https://lite.3kh0.net/projects/wordle/img/logo_512x512.png",
    tags: ["puzzle", "fun", "popular"]
  },
  {
    id: "beyond-the-grave-2",
    title: "Beyond The Grave II",
    src: "https://codingkitten-yt.github.io/quickmath/btg.html",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/btg.png",
    tags: ["battle", "fun"]
  },
  {
    id: "run-2",
    title: "Run 2",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/run2.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/run2.jpeg",
    tags: ["platformer", "fun", "popular"]
  },
  {
    id: "vex",
    title: "Vex",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/vex.swf&aspect=1:1",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/vex1.jpeg",
    tags: ["platformer", "fun"]
  },
  {
    id: "vex-2",
    title: "Vex 2",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/vex2.swf&aspect=8:7",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/vex2.jpeg",
    tags: ["platformer", "fun"]
  },
  {
    id: "vex-4",
    title: "Vex 4",
    src: "https://math181124.github.io/g/class-567/",
    img: "https://math181124.github.io/img/class-567.png",
    tags: ["platformer", "fun"]
  },
  {
    id: "vex-5",
    title: "Vex 5",
    src: "https://math181124.github.io/g26/class-493/",
    img: "https://math181124.github.io/img/class-493.png",
    tags: ["platformer", "fun"]
  },
  {
    id: "vex-6",
    title: "Vex 6",
    src: "https://math181124.github.io/g/class-809",
    img: "https://math181124.github.io/img/class-809.png",
    tags: ["platformer", "fun"]
  },
  {
    id: "vex-7",
    title: "Vex 7",
    src: "https://math181124.github.io/g/class-510",
    img: "https://math181124.github.io/img/class-510.png",
    tags: ["platformer", "fun"]
  },
  {
    id: "hobo-1",
    title: "Hobo 1",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/hobo1.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/hobo1.jpeg",
    tags: ["battle", "fun"]
  },
  {
    id: "hobo-2",
    title: "Hobo 2",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/hobo2.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/hobo2.jpeg",
    tags: ["battle", "fun"]
  },
  {
    id: "hobo-3",
    title: "Hobo 3",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/hobo3.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/hobo3.jpeg",
    tags: ["battle", "fun"]
  },
  {
    id: "hobo-4",
    title: "Hobo 4",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/hobo4.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/hobo4.jpeg",
    tags: ["battle", "fun"]
  },
  {
    id: "hobo-5",
    title: "Hobo 5",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/hobo5.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/hobo5.jpeg",
    tags: ["battle", "fun"]
  },
  {
    id: "hobo-6",
    title: "Hobo 6",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/hobo6.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/hobo6.jpeg",
    tags: ["battle", "fun"]
  },
  {
    id: "hobo-7",
    title: "Hobo 7",
    src: "https://codingkitten-yt.github.io/FlashEmbed/?url=https://raw.githubusercontent.com/CodingKitten-YT/FlashEmbed/main/files/hobo7.swf",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/refs/heads/main/images/hobo7.jpeg",
    tags: ["battle", "fun"]
  },
  {
    id: "cut-the-rope",
    title: "Cut The Rope",
    src: "https://lite.3kh0.net/projects/ctr/",
    img: "https://upload.wikimedia.org/wikipedia/en/6/66/Cut_the_Rope_%28App_icon%29.png",
    tags: ["puzzle", "fun", "popular"]
  },
  {
    id: "cut-the-rope-holiday",
    title: "Cut The Rope Holiday",
    src: "https://lite.3kh0.net/projects/ctr-holiday/",
    img: "https://lite.3kh0.net/projects/ctr-holiday/Holiday_Gift.webp",
    tags: ["puzzle", "fun"]
  },
  {
    id: "cut-the-rope-time-travel",
    title: "Cut The Rope Time Travel",
    src: "https://lite.3kh0.net/projects/ctr-tr/",
    img: "https://lite.3kh0.net/projects/ctr-tr/logo.png",
    tags: ["puzzle", "fun"]
  },
  {
    id: "rising-lava",
    title: "Rising Lava",
    src: "https://turbowarp.org/944715656/embed",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/risinglava.png",
    tags: ["platformer", "fun"]
  },
  {
    id: "virtua-racing",
    title: "Virtua Racing",
    src: "https://turbowarp.org/977543606/embed",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/virtuaracing.png",
    tags: ["racing", "retro", "fun"]
  },
  {
    id: "prism",
    title: "Prism",
    src: "https://turbowarp.org/127030178/embed?hqpen",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/prism.png",
    tags: ["puzzle", "fun"]
  },
  {
    id: "flappy-bird",
    title: "Flappy Bird",
    src: "https://jxmked.github.io/Flappybird/",
    img: "https://upload.wikimedia.org/wikipedia/en/0/0a/Flappy_Bird_icon.png",
    tags: ["skill", "fun", "popular"]
  },
  {
    id: "eggy-car",
    title: "Eggy Car",
    src: "https://labgstore311.github.io/g5/class-463",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/eggycar.jpeg",
    tags: ["skill", "fun"]
  },
  {
    id: "ovo",
    title: "OVO",
    src: "https://ovo-modloader.github.io/versions/1.4.4b/index.html",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/ovo.jpeg",
    tags: ["platformer", "fun", "popular"]
  },
  {
    id: "slope",
    title: "Slope",
    src: "https://23azostore.github.io/s/slope",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/Slope.jpeg",
    tags: ["skill", "fun", "popular", "3d", "best"]
  },
  {
    id: "monster-tracks",
    title: "Monster Tracks",
    src: "https://23azostore.github.io/s5/monster-tracks",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/monstertrack.jpeg",
    tags: ["racing", "cars", "fun"]
  },
  {
    id: "doodle-jump",
    title: "Doodle Jump",
    src: "https://23azostore.github.io/s7/doodle-jump",
    img: "https://cdn.statically.io/gh/CodingKitten-YT/KittenGames-gamelibrary/main/images/doodle-removebg-preview.png",
    tags: ["skill", "fun", "popular"]
  },
];
