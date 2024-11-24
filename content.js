function checkForAds() {
  let adExist = document.getElementsByClassName("ad-showing").length > 0;
  let video = document.getElementsByClassName("video-stream html5-main-video")[0];
  let skipButton = document.getElementsByClassName("ytp-skip-ad-button")[0];

  if (adExist && video) {
    video.playbackRate = 16;
    video.muted = true;
  }

  if (skipButton && !skipButton.clicked) {
    skipButton.click();
    skipButton.clicked = true;
    chrome.runtime.sendMessage({ adsSkipped: true });
  }
  else if (!adExist) {
    if (skipButton) skipButton.clicked = false;
  }
}

setInterval(checkForAds, 100);