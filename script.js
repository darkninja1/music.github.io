/*var music = ['ll.mp3','Hunter.mp3','Jifuragi.mp3','Night Of Sicily.mp3','Un diavolo scaccia l′altro.mp3','Code.mp3','sunshine.mp3','code.mp3','king.mp3','king2.mp3','ring.mp3','FT1.mp3'];
var musicname = ['무법 변호사 Lawless Lawyer Main Title','Hunter x Hunter','Jifuragi','Night Of Sicily','Un diavolo scaccia l′altro','Code Gease','Mr. Sunshine','The Da Vinci Code',"The King's Avatar - 全职高手  「Extended OP」Xin Yang BY -Zhang Jie","The King's Avatar Ost Full Album",'JJ Lin – Lose Control _ Shang-Chi - The Album','FairyTail Main Theme OP1'];
var musicpic = ['ll.png','Hunter.jpg','v3.jpg','v2.png','v1.jpeg','Code.jpg','sunshine.jpg','code.jpg','king.jpg','king2.jpg','ring.jpg','FT1.jpeg'];*/
var music = ['royal.mp3','kino.mp3','elena.mp3','detective.mp3','irregular.mp3','vanitas.mp3','jorm.mp3'];
var musicname = ["Oushitsu Kyoushi Haine Ending FULL - Doko ni Ita no sa!～Prince Night ／ P4 with T「王室教師ハイネ ED」","Kino's Journey -the Beautiful World- Ending _ Satodama no Tsuki","Wandering Witch: The Journey of Elaina","The Detective is Already Dead","The Irregular at Magic High School","ヴァニタスの 手記 カルテ (Vanitasu no Karute)","Jormungand (ヨルムンガンド, Yorumungando)"];
var musicpic = ["royal.jpg","kino.png","elena.jpg","detective.jpg","irregular.jpg","vanitas.jpg","jorm.jpg"];
var pre = [];
var m1 = false;

function start() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('img').style.display = 'block';
  document.getElementById('pp').style.display = "block";
  var cmusic = Math.floor(Math.random() * music.length);
  if (pre.length == music.length) {
    pre = [];
    start();
  }
  else if (pre.includes(musicname[cmusic])) {
    start();
  }
  else {
    document.getElementById('tt').innerHTML = "Dom's Music("+musicname[cmusic]+")";
    document.getElementById('musicid').src = "music/"+music[cmusic];
    document.getElementById('mname').innerHTML = musicname[cmusic];
    pre.push(musicname[cmusic]);
    document.getElementById('img').src = "pics/"+musicpic[cmusic];
    document.getElementById('img2').style.backgroundImage = "url('pics/"+musicpic[cmusic]+"')";
    
    document.getElementById("music").load();
    document.getElementById("music").play();
    document.getElementById("music").onended = function() {
    start();
    };
  }
}
function pause() {
  document.getElementById("music").pause();
  document.getElementById('pause').style.display = "block";
  document.getElementById('pp').style.display = "none";
}
function play() {
  document.getElementById("music").play();
  document.getElementById('pause').style.display = "none";
  document.getElementById('pp').style.display = "block";
}
function vol() {
  var iv = document.getElementById("slide").value;
  if (iv >= 75) {
    document.getElementById('vol').innerHTML = "🔊";
  }
  else if (iv >= 30) {
    document.getElementById('vol').innerHTML = "🔉";
  }
  else {
    document.getElementById('vol').innerHTML = "🔈";
  }

  document.getElementById("music").volume = (iv/100);
}
function up() {
  var cc = document.getElementById('music').currentTime;
  var dd = document.getElementById('music').duration;
  var cc1 = parseInt(cc%60);
  var dd1 = parseInt(dd%60);
  if (cc1 <= 9) {
    document.getElementById('time1').innerHTML = (parseInt(cc/60)+':0'+cc1);
  }
  else {
    document.getElementById('time1').innerHTML = (parseInt(cc/60)+':'+cc1);
  }
  if (dd1 <= 9) {
    document.getElementById('time2').innerHTML = (parseInt(dd/60)+':0'+dd1);
  }
  else {
    document.getElementById('time2').innerHTML = (parseInt(dd/60)+':'+dd1);
  }
  document.getElementById('bar').style.width = ((cc / dd)*100) +'%';
}
function loop() {
  if (m1 == false) {
    document.getElementById('loop').innerHTML = '2';
    document.getElementById("music").loop = true;
    m1 = true;
    
  }
  else {
    document.getElementById('loop').innerHTML = '1';
    document.getElementById("music").loop = false;
    m1 = false;
  }
}