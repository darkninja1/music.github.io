var music = ['ll.mp3','Hunter.mp3','Jifuragi.mp3','Night Of Sicily.mp3','Un diavolo scaccia l′altro.mp3'];
var musicname = ['무법 변호사 Lawless Lawyer Main Title','Hunter x Hunter','Jifuragi','Night Of Sicily','Un diavolo scaccia l′altro'];
var musicpic = ['ll.png','Hunter.jpg','v3.jpg','v2.png','v1.jpeg'];
var pre = "";

function start() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('img').style.display = 'block';
  var cmusic = Math.floor(Math.random() * music.length);
  if (pre == musicname[cmusic]) {
    start();
  }
  else {
    document.getElementById('musicid').src = "/music/"+music[cmusic];
    document.getElementById('mname').innerHTML = musicname[cmusic];
    pre = musicname[cmusic];
    document.getElementById('img').src = "/pics/"+musicpic[cmusic];
    document.getElementById('img2').style.backgroundImage = "url('pics/"+musicpic[cmusic]+"')";
    
    document.getElementById("music").load();
    document.getElementById("music").play();
    document.getElementById("music").onended = function() {
    start();
    };
  }
}

