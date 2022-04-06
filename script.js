/*var music = ['ll.mp3','Hunter.mp3','Jifuragi.mp3','Night Of Sicily.mp3','Un diavolo scaccia l′altro.mp3','Code.mp3','sunshine.mp3','code.mp3','king.mp3','king2.mp3','ring.mp3','FT1.mp3'];
var musicname = ['무법 변호사 Lawless Lawyer Main Title','Hunter x Hunter','Jifuragi','Night Of Sicily','Un diavolo scaccia l′altro','Code Gease','Mr. Sunshine','The Da Vinci Code',"The King's Avatar - 全职高手  「Extended OP」Xin Yang BY -Zhang Jie","The King's Avatar Ost Full Album",'JJ Lin – Lose Control _ Shang-Chi - The Album','FairyTail Main Theme OP1'];
var musicpic = ['ll.png','Hunter.jpg','v3.jpg','v2.png','v1.jpeg','Code.jpg','sunshine.jpg','code.jpg','king.jpg','king2.jpg','ring.jpg','FT1.jpeg'];*/
var music = ['royal.mp3','kino.mp3','elena.mp3','detective.mp3','irregular.mp3','vanitas.mp3','jorm.mp3','crusade.mp3','hero.mp3','world.mp3'];
var musicname = ["Oushitsu Kyoushi Haine Ending FULL - Doko ni Ita no sa!～Prince Night ／ P4 with T「王室教師ハイネ ED」","Kino's Journey -the Beautiful World- Ending _ Satodama no Tsuki","Wandering Witch: The Journey of Elaina","The Detective is Already Dead","The Irregular at Magic High School","ヴァニタスの 手記 カルテ (Vanitasu no Karute)","Jormungand (ヨルムンガンド, Yorumungando)","Our Last Crusade or the Rise of a New World","The Legendary Hero's","World End"];
var musicpic = ["royal.jpg","kino.png","elena.jpg","detective.jpg","irregular.jpg","vanitas.jpg","jorm.jpg","crusade.jpeg",'hero.jpg','world.jpeg'];
var pre = [];
var m1 = false;
var logins = false;
var mute1 = false;
var prevol = 1;

function start() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('img').style.display = 'block';
  document.getElementById('pp').style.display = "block";
  logins = true;
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
    document.getElementById('musicid').src = "nmusic/"+music[cmusic];
    document.getElementById('mname').innerHTML = musicname[cmusic];
    pre.push(musicname[cmusic]);
    document.getElementById('img').src = "npics/"+musicpic[cmusic];
    document.getElementById('img2').style.background = "url('npics/"+musicpic[cmusic]+"') no-repeat center center fixed";
    document.getElementById('img2').style.backgroundSize = "cover";
    
    
    document.getElementById("music").load();
    document.getElementById("music").play();
    document.getElementById("music").onended = function() {
    start();
    };
  }
}
document.body.onkeyup = function(e) {
  if (e.key == " " ||
      e.code == "Space" ||      
      e.keyCode == 32      
  ) {
    space1();
  }
  else if (e.keyCode == 39) {
    start();
  }
  else if (e.keyCode == 189 && document.getElementById("slide").value != 0) {
    document.getElementById("slide").value -= 1;
  }
  else if (e.keyCode == 187 && document.getElementById("slide").value != 100) {
    document.getElementById("slide").value += 1;
  }
  else if (e.keyCode == 48) {
    document.getElementById("slide").value = 100;
    countd("100%");
  }
  else if (e.keyCode == 49) {
    document.getElementById("slide").value = 10;
    countd("10%");
  }
  else if (e.keyCode == 50) {
    document.getElementById("slide").value = 20;
    countd("20%");
  }
  else if (e.keyCode == 51) {
    document.getElementById("slide").value = 30;
    countd("30%");
  }
  else if (e.keyCode == 52) {
    document.getElementById("slide").value = 40;
    countd("40%");
  }
  else if (e.keyCode == 53) {
    document.getElementById("slide").value = 50;
    countd("50%");
  }
  else if (e.keyCode == 54) {
    document.getElementById("slide").value = 60;
    countd("60%");
  }
  else if (e.keyCode == 55) {
    document.getElementById("slide").value = 70;
    countd("70%");
  }
  else if (e.keyCode == 56) {
    document.getElementById("slide").value = 80;
    countd("80%");
  }
  else if (e.keyCode == 57) {
    document.getElementById("slide").value = 90;
    countd("90%");
  }
  else if (e.keyCode == 77) {
    mutted1();
  }
  vol();
}
function mutted1() {
  if (mute1 == true) {
    document.getElementById("slide").value = prevol;
    mute1 = false;
    countd(prevol*100+"%");
  }
  else {
    prevol = document.getElementById("slide").value/100;
    document.getElementById("slide").value = 0;
    mute1 = true;
    countd("<i class='material-icons' style='margin:none;padding:none;font-size:70px;transform: translate(0px, 0px);'>&#xe04f;</i>");
  }
}
function pause() {
  document.getElementById("music").pause();
  document.getElementById('pause').style.display = "block";
  document.getElementById('pp').innerHTML = "<i class='material-icons' style='margin:none;padding:none;font-size:30px;transform: translate(0px, 0px);'>&#xe037;</i>";
  countd("<i class='material-icons' style='margin:none;padding:none;font-size:80px;transform: translate(0px, 0px);'>&#xe037;</i>");
}
function play() {
  document.getElementById("music").play();
  document.getElementById('pause').style.display = "none";
  document.getElementById('pp').innerHTML = "<i class='material-icons' style='margin:none;padding:none;font-size:30px;transform: translate(0px, 0px);'>&#xe034;</i>";
  document.getElementById('pp').style.display = "block";
  countd("<i class='material-icons' style='margin:none;padding:none;font-size:70px;transform: translate(0px, 0px);'>&#xe034;</i>");
}
function space1() {
  if (logins == true) {
    var yn1 = document.getElementById("music").paused;
    if (yn1 == true) {
      play();
    }
    else {
      pause();
    }
  }
  else {
    start();
  }
}
function countd(txt) {
document.getElementById('pausep').innerHTML = txt;
document.getElementById('pausep').style.display = "block";
document.getElementById('pausep').style.animation = "mymove 1s 1"; 
setTimeout( function() {document.getElementById('pausep').style.display = "none";},1000);
}
function vol() {
  var iv = document.getElementById("slide").value;
  if (iv >= 75) {
    document.getElementById('vol').innerHTML = "<i class='material-icons' style='margin:none;padding:none;font-size:30px;transform: translate(0px, 7px);'>&#xe050;</i>";
  }
  else if (iv >= 30) {
    //
    document.getElementById('vol').innerHTML = "<i class='material-icons' style='margin:none;padding:none;font-size:30px;transform: translate(0px, 7px);'>&#xe04d;</i>";
  }
  else if (iv >= 1) {
    document.getElementById('vol').innerHTML = "<i class='material-icons' style='margin:none;padding:none;font-size:30px;transform: translate(0px, 7px);'>&#xe04e;</i>";
  }
  else if (iv == 0) {
    document.getElementById('vol').innerHTML = "<i class='material-icons' style='margin:none;padding:none;font-size:30px;transform: translate(0px, 7px);'>&#xe04f;</i>";
  }
  else {
    document.getElementById('vol').innerHTML = "<i class='material-icons' style='margin:none;padding:none;font-size:30px;transform: translate(0px, 7px);'>&#xe050;</i>";
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
    document.getElementById('loop').innerHTML = "<i class='material-icons' style='margin:none;padding:none;font-size:20px;transform: translate(0px, 2px);'>&#xe041;</i>";
    document.getElementById("music").loop = true;
    m1 = true;
    
  }
  else {
    document.getElementById('loop').innerHTML = "<i class='material-icons' style='margin:none;padding:none;font-size:20px;transform: translate(0px, 2px);'>&#xe040;</i>";
    document.getElementById("music").loop = false;
    m1 = false;
  }
}