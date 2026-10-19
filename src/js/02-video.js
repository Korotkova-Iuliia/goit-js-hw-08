import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
// console.log(player);

let currentTimeStopPlayer = localStorage.getItem('videoplayer-current-time');
console.log(currentTimeStopPlayer);

const currentTimePlayer = player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log(data.seconds);
  }, 1000),
);

player.setCurrentTime(currentTimeStopPlayer).then(function (seconds) {
  if (currentTimePlayer) {
    seconds;
  }
});
