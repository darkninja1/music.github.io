var music = ['ll.mp3','Hunter.mp3','Jifuragi.mp3','Night Of Sicily.mp3','Un diavolo scaccia l′altro.mp3','Code.mp3','sunshine.mp3','code.mp3','king.mp3','king2.mp3'];
var musicname = ['무법 변호사 Lawless Lawyer Main Title','Hunter x Hunter','Jifuragi','Night Of Sicily','Un diavolo scaccia l′altro','Code Gease','Mr. Sunshine','The Da Vinci Code',"The King's Avatar - 全职高手  「Extended OP」Xin Yang BY -Zhang Jie","The King's Avatar Ost Full Album"];
var musicpic = ['ll.png','Hunter.jpg','v3.jpg','v2.png','v1.jpeg','Code.jpg','sunshine.jpg','code.jpg','king.jpg','king2.jpg'];
var pre = [];

function start() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('img').style.display = 'block';
  var cmusic = Math.floor(Math.random() * music.length);
  if (pre.length == music.length) {
    pre = [];
    start();
  }
  else if (pre.includes(musicname[cmusic])) {
    start();
  }
  else {
    document.getElementById('musicid').src = "/music/"+music[cmusic];
    document.getElementById('mname').innerHTML = musicname[cmusic];
    pre.push(musicname[cmusic]);
    document.getElementById('img').src = "/pics/"+musicpic[cmusic];
    document.getElementById('img2').style.backgroundImage = "url('pics/"+musicpic[cmusic]+"')";
    
    document.getElementById("music").load();
    document.getElementById("music").play();
    document.getElementById("music").onended = function() {
    start();
    };
  }
}

