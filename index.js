var button1 = document.querySelector('.happy');
var button2 = document.querySelector('.sad');
var button3 = document.querySelector('.chill');
var happySong = document.querySelector('.happy-song');
var sadSong = document.querySelector('.sad-song');
var chillSong = document.querySelector('.chill-song');

var happySonglist = [
  "'The biggest adventure you can ever take is to live the life of your dreams.' –Oprah Winfrey",
  "'The most difficult thing is the decision to act, the rest is merely tenacity.' –Amelia Earhart.",
  "'Great minds discuss ideas, average minds discuss events, small minds discuss people.' -Eleanor Roosevelt",
  "'Let us pick up our books and our pens. They are our most powerful weapons. One child, one teacher, one book, and one pen can change the world.' –Malala Yousafzai",
  "'We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better.' -J.K. Rowling"
]

var sadSonglist = [
  "'The biggest adventure you can ever take is to live the life of your dreams.' –Oprah Winfrey",
  "'The most difficult thing is the decision to act, the rest is merely tenacity.' –Amelia Earhart.",
  "'Great minds discuss ideas, average minds discuss events, small minds discuss people.' -Eleanor Roosevelt",
  "'Let us pick up our books and our pens. They are our most powerful weapons. One child, one teacher, one book, and one pen can change the world.' –Malala Yousafzai",
  "'We do not need magic to change the world, we carry all the power we need inside ourselves already: we have the power to imagine better.' -J.K. Rowling"
]

var chillSonglist = [
  "'The Sky is Pink' by Jenny Nuo",
  "'comethru' by Jeremy Zucker",
  "'One' by Ed Sheeran",
  "'This Years Love' by David Gray",
  "'Fix You' by Canyon City",
  "'Time After Time' by Iron & Wine",
  "'Halo' by Lotter Kestner"
]

button1.addEventListener("click", function() {
  console.log("hi")
  newDecimal = Math.random(happySong.length - 1) * 5
  newNum = Math.floor(newDecimal)
  happySong.textContent = happySonglist[newNum]
})

button2.addEventListener("click", function() {
  console.log("hi")
  newDecimal = Math.random(sadSong.length - 1) * 5
  newNum = Math.floor(newDecimal)
  sadSong.textContent = sadSonglist[newNum]
})

button3.addEventListener("click", function() {
  console.log("hi")
  newDecimal = Math.random(chillSong.length - 1) * 5
  newNum = Math.floor(newDecimal)
  chillSong.textContent = chillSonglist[newNum]
})
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

