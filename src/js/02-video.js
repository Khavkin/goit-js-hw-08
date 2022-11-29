import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

class LocalStorage {
  static storageKey;
  static getValue() {
    return localStorage.getItem(this.storageKey);
  }

  static setValue(value) {
    localStorage.setItem(this.storageKey, value);
  }
}

LocalStorage.storageKey = 'videoplayer-current-time';

const iframe = document.querySelector('#vimeo-player');

const player = new Player(iframe);

player.on(
  'timeupdate',
  throttle(function () {
    player
      .getCurrentTime()
      .then(function (seconds) {
        LocalStorage.setValue(seconds);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, 1000)
);

window.onload = () => {
  const currentTime = LocalStorage.getValue();
  console.log(currentTime);
  if (currentTime) {
    player
      .setCurrentTime(currentTime)
      .then(function (seconds) {
        console.log(`actual time ${seconds}`);
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
  }
};
