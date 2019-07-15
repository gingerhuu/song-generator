var button1 = document.querySelector('.happy');
var button2 = document.querySelector('.sad');
var button3 = document.querySelector('.chill');
var happySong = document.querySelector('.happy-song');
var sadSong = document.querySelector('.sad-song');
var chillSong = document.querySelector('.chill-song');

var happySonglist = [
  "'If I Can't Have You' by Shawn Mendes",
  "'Long Live' by Taylor Swift",
  "'Love Story' by Taylor Swift",
  "'Señorita' by Shawn Mendes and Camila Cabello ",
  "'Come To Brazil' by Why Don't We",
  "'Truthfully' by DNCE",
  "'Babe' by Sugarland",
  "'no tears left to cry' by Ariana Grande",
  "'Run the World (Girls)' by Beyoncé",
  "'2002' by Anne-Marie",
  "'Wake Me Up' by Avicii",
  "'Clearly' by Grace VanderWaal",
  "'Happier' by Marshmello ft. Bastille",
  "'Happy' by Pharrell Williams",
  "'I Gotta Feeling' by The Black Eyed Peas",
  "'Don't Stop Believin'' by Journey",
  "'Count on Me' by Bruno Mars"
]

var sadSonglist = [
  "'Last Kiss' by Taylor Swift",
  "'Say Something' by A Great Big World",
  "'Say You Won't Let Go' by James Arthur",
  "'Happier' by Ed Sheeran",
  "'His Daughter' by Molly Kate Kestner",
  "'Million Reasons' by Lady Gaga",
  "'Skinny Love' by Bon Iver",
  "'arms' by Christina Perri",
  "'All Too Well' by Taylor Swift",
  "'Perfect Day (A True Story)' by Gabbie Hanna",
  "'Unloved' by Lisa Cimorelli",
  "'Crush Culture' by Conan Gray",
  "'Lookalike' by Conan Gray",
  "'Supermarket Flowers' by Ed Sheeran",
  "'Lovely'by Khalid"
]

var chillSonglist = [
  "'The Sky is Pink' by Jenny Nuo",
  "'comethru' by Jeremy Zucker",
  "'One' by Ed Sheeran",
  "'This Years Love' by David Gray",
  "'Fix You' by Canyon City",
  "'Time After Time' by Iron & Wine",
  "'Halo' by Lotter Kestner",
  "'watch' by Billie Eilish",
  "'Delicate' by Taylor Swift"
]

button1.addEventListener("click", function(){
  console.log("hi")
  newDecimal = Math.random(happySong.length - 1) * 17
  newNum = Math.floor(newDecimal)
  happySong.textContent = happySonglist[newNum]
})

button2.addEventListener("click", function(){
  console.log("hi")
  newDecimal = Math.random(sadSong.length - 1) * 15
  newNum = Math.floor(newDecimal)
  sadSong.textContent = sadSonglist[newNum]
})

button3.addEventListener("click", function(){
  console.log("hi")
  newDecimal = Math.random(chillSong.length - 1) * 9
  newNum = Math.floor(newDecimal)
  chillSong.textContent = chillSonglist[newNum]
})

var string = "So, what are we feeling today?";
var str = string.split("");
var el = document.getElementById('str');
(function animate() {
str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running);
var running = setTimeout(animate, 90);
})();
// var string = "So, what are we feeling today?";
// var str = string.split("");
// var el = document.getElementById('str');

// function animate(){
//   str.length > 0 ? el.innerHTML += str.shift() : clearTimeout(running)
//   var running = setTimeout(animate, 90)
// }();
