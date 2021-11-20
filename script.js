var music = ['ll.mp3','Hunter.mp3'];
var musicname = ['무법 변호사 Lawless Lawyer Main Title','Hunter x Hunter'];
var musicpic = ['ll.png','Hunter.jpg'];

function start() {
  document.getElementById('login').style.display = 'none';
  document.getElementById('img').style.display = 'block';
  var cmusic = Math.floor(Math.random() * music.length);
  document.getElementById('musicid').src = "/music/"+music[cmusic];
  document.getElementById('mname').innerHTML = musicname[cmusic];
  document.getElementById('img').src = "/pics/"+musicpic[cmusic];
  document.getElementById("music").onended = function() {
  start();
  };
}

