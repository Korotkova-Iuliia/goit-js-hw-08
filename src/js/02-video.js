import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
// console.log(player);

let currentTimeStopPlayer = localStorage.getItem('videoplayer-current-time');
// console.log(currentTimeStopPlayer);

const currentTimePlayer = player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem('videoplayer-current-time', data.seconds);
    console.log(data.seconds);
  }, 1000),
);

player
  .setCurrentTime()
  .then(function (seconds) {
    if (currentTimePlayer) {
      return currentTimeStopPlayer;
    }
  })
  .catch(function (error) {
    console.log('для воспроизведения нажмите play');
    // console.log(error);
  });
// import Player from '@vimeo/player';
// const throttle = require('lodash.throttle');
// const iframe = document.querySelector('#vimeo-player');
// const player = new Player(iframe);
// console.log(player);

// let currentTimeStopPlayer = localStorage.getItem('videoplayer-current-time');
// console.log(currentTimeStopPlayer);

// const currentTimePlayer = player.on(
//   'timeupdate',
//   throttle(function (data) {
//     localStorage.setItem('videoplayer-current-time', data.seconds);
//     console.log(data.seconds);
//   }, 1000),
// );

// player
//   .setCurrentTime(currentTimeStopPlayer)
//   .then(function (seconds) {
//     currentTimePlayer;
//   })
//   .catch(function (error) {
//     switch (error.name) {
//       case 'RangeError':
//         // the time was less than 0 or greater than the video’s duration
//         break;

//       default:
//         // some other error occurred
//         break;
//     }
//   });
