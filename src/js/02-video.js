import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
console.log(player);

let currentTimeStopPlayer = localStorage.getItem('videoplayer-current-time = data.seconds');
console.log(currentTimeStopPlayer);

// const onPause = function (data) {
//   //   const timeStopPlayer = data.seconds;
//   localStorage.setItem('videoplayer-current-time = data.seconds', timeStopPlayer);
//   //   console.log(timeStopPlayer);
// };
// const onPlay = function (data) {
//   timeOnPlayer = data.seconds;
//   console.log(timeOnPlayer);
// };
const currentTime = player.on(
  'timeupdate',
  throttle(function (data) {
    const timeStopPlayer = data.seconds;
    localStorage.setItem('videoplayer-current-time = data.seconds', data.seconds);
    console.log(timeStopPlayer);
  }, 1000),
);

player
  .setCurrentTime(currentTimeStopPlayer)
  .then(function (seconds) {
    // player.on('pause', onPlaybackPause);
    player.on('timeupdate', throttle(currentTime, 3000));
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
// //////////////////////////////////////////////////////////////////////////////
// let currentTimeStopPlayer = localStorage.getItem('videoplayer-current-time = data.seconds');
// console.log(currentTimeStopPlayer);

// const onPlaybackPause = function (data) {
//   const timeStopPlayer = data.seconds;
//   localStorage.setItem('videoplayer-current-time = data.seconds', timeStopPlayer);
//   console.log(data.seconds);
// };
// // const onPlaybackPlay = function (data) {
// //   localStorage.setItem('videoplayer-current-time = data.seconds', data.seconds);
// //   player.on('timeupdate', data.seconds);
// // };

// // player
// //   .setCurrentTime(currentTimeStopPlayer)
// //   .then(function (seconds) {
// //     player.on('pause', onPlaybackPause);
// //     // player.on('timeupdate', throttle(onPlaybackPlay, 1000));
// //   })
// //   .catch(function (error) {
// //     switch (error.name) {
// //       case 'RangeError':
// //         // the time was less than 0 or greater than the video’s duration
// //         break;

// //       default:
// //         // some other error occurred
// //         break;
// //     }
// //   });

// // const onPlaybackPlay = function (data) {
// //   localStorage.setItem('videoplayer-current-time = data.seconds', data.seconds);
// //   console.log('videoplayer-current-time');
// // };
// // // const throttled = throttle(onPlaybackPlay, 1000);

// // // Player.on('timeupdate', throttled);
