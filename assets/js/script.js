// add music
const worldMusic = document.querySelector('.music');
const btnMusic = document.querySelector('.btn-music');

let playMusic = false;

btnMusic.addEventListener('click', () => {
  playMusic = !playMusic;
  btnMusic.classList.toggle('music-off');
  playMusic ? worldMusic.play() : worldMusic.pause();
});

worldMusic.volume = 0.3;
worldMusic.loop = true;