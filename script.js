document.addEventListener('DOMContentLoaded', function() {
  let songSelect = document.getElementById('songSelect');
  let mySong = document.getElementById('mySong');
  let slider = document.querySelector(".slider");

  songSelect.addEventListener('change', function() {
    mySong.src = this.value;
    mySong.play();
  });
  
  let state = false;
  let btn = document.querySelector(".btn");
  let record = document.querySelector(".record");
  let toneArm = document.querySelector(".tone-arm");

  btn.addEventListener("click", () => {
    if (state == false) {
      record.classList.add("on");
      toneArm.classList.add("play");
      setTimeout(() => {
        mySong.play();
      }, 1000);
    } else {
      record.classList.remove("on");
      toneArm.classList.remove("play");
      mySong.pause();
    }
    state = !state;
  });

  slider.addEventListener('input', function() {
    mySong.volume = this.value / 100; 
  });
});

